package com.demo.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.example.entity.Review;


@Repository
public interface ReviewRepository extends JpaRepository<Review,Integer>{

}
