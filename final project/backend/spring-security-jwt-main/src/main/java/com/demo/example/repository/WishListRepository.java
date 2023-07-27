package com.demo.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.example.entity.Wishlist;


@Repository
public interface WishListRepository extends JpaRepository<Wishlist,Integer>{

}
