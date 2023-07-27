package com.demo.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.example.entity.Review;
import com.demo.example.repository.ReviewRepository;



@Service
public class ReviewService {
	@Autowired
	ReviewRepository repository;
	
	public boolean addReview(Review review)
	 {
	 return repository.save(review)!=null?true:false;
	 }
	 public List<Review> getAllReview()
	 {
	 return repository.findAll();
	 }
}
