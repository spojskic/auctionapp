package com.atlantbh.auctionapp.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;

@NoArgsConstructor
@Setter
@Getter
@Entity
//This line of code doesn't work in production, so it needs to be removed
@Table(name = "Bids", schema="auction")
public class BidsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Positive(message = "value must be positive")
    @Column(nullable = false)
    private Float price;

    @Column(nullable = false)
    private LocalDateTime bidDate;

    @ManyToOne
    @JoinColumn(name = "userId", nullable = false)
    private UserEntity user;

    @ManyToOne
    @JoinColumn(name = "productId", nullable = false)
    private ProductEntity product;

    public BidsEntity(Float price, LocalDateTime bidDate, UserEntity user, ProductEntity product) {
        this.price = price;
        this.bidDate = bidDate;
        this.user = user;
        this.product = product;
    }
}