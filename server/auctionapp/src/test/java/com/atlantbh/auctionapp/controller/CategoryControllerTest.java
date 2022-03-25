package com.atlantbh.auctionapp.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class CategoryControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Test
    public void getCategories() throws Exception{
        mockMvc.perform(MockMvcRequestBuilders.get("/categories")
                .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk()).andReturn();
    }
}
