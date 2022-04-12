package com.atlantbh.auctionapp.service;

import com.atlantbh.auctionapp.model.CategoryEntity;
import com.atlantbh.auctionapp.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<CategoryEntity> getAllCategories(){
        return categoryRepository.findAll();
    }
}
