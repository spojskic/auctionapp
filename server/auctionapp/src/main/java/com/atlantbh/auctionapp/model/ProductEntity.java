package com.atlantbh.auctionapp.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Formula;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "Product", schema="auction")
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 100)
    @Column(nullable = false)
    private String productName;

    @Size(max = 255)
    @Column(nullable = false, columnDefinition="TEXT")
    private String description;

    @Positive
    @Column(nullable = false)
    private Float startPrice;

    @Column(nullable = false)
    private LocalDateTime startDate;

    @Column(nullable = false)
    private LocalDateTime endDate;

    @Column(nullable = false, columnDefinition="TEXT")
    private String images;

    @Column(nullable = false)
    private long userId;

    @Formula("(SELECT b.price FROM auction.bids b INNER JOIN auction.product p on p.id = b.product_id " +
            "WHERE b.product_id = id ORDER BY b.price DESC LIMIT 1)")
    private BigDecimal highestBid;

    @Formula("(SELECT COUNT(*) FROM auction.bids b INNER JOIN auction.product p on p.id = b.product_id " +
            "WHERE b.product_id = id)")
    private Integer numberOfBids;

    @ManyToOne
    @JoinColumn(name = "categoryId", nullable = false)
    private CategoryEntity category;

    public ProductEntity(String productName, String description, Float startPrice, LocalDateTime startDate, LocalDateTime endDate, String images, long userId, CategoryEntity category) {
        this.productName = productName;
        this.description = description;
        this.startPrice = startPrice;
        this.startDate = startDate;
        this.endDate = endDate;
        this.images = images;
        this.userId = userId;
        this.category = category;
    }
}
