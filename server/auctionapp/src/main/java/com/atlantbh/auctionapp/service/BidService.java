package com.atlantbh.auctionapp.service;

import com.atlantbh.auctionapp.exceptions.BadRequestException;
import com.atlantbh.auctionapp.exceptions.NotFoundException;
import com.atlantbh.auctionapp.model.BidsEntity;
import com.atlantbh.auctionapp.model.ProductEntity;
import com.atlantbh.auctionapp.model.UserEntity;
import com.atlantbh.auctionapp.projections.BidProj;
import com.atlantbh.auctionapp.repository.BidRepository;
import com.atlantbh.auctionapp.repository.ProductRepository;
import com.atlantbh.auctionapp.repository.UserRepository;
import com.atlantbh.auctionapp.request.BidRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class BidService {
    @Autowired
    private BidRepository bidRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    public List<BidProj> getBidsForProduct(long id){
        List<BidProj> bids = bidRepository.findAllByProductId(id);
        if(bids.isEmpty()) {
            throw new NotFoundException("Bids for product with id:" + id + " do not exist");
        }

        return bids;
    }

    public String add(BidRequest bidRequest){
        ProductEntity product = productRepository.findProductById(bidRequest.getProductId());
        if (product.getStartPrice() >= bidRequest.getPrice())
            throw new BadRequestException("Price can't be lower than the product start price");
        if (product.getEndDate().isBefore(LocalDateTime.now()))
            throw new BadRequestException("Auction ended for this product");

        UserEntity user = userRepository.getById(bidRequest.getUserId());
        if (product.getUserId() == user.getId())
            throw new BadRequestException("You can't bid on your own product");

        Double maxBid = bidRepository.getMaxBidFromProduct(product.getId());
        if (maxBid != null && maxBid >= bidRequest.getPrice())
            throw new BadRequestException("Price can't be lower than highest bid of $" + maxBid);

        bidRepository.save(new BidsEntity(bidRequest.getPrice(), user, product));

        return String.valueOf(bidRequest.getPrice());
    }
}
