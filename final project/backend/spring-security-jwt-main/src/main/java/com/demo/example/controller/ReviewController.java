package com.demo.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.example.entity.Review;
import com.demo.example.service.ReviewService;



@RestController
@RequestMapping("/review")
public class ReviewController {
	@Autowired
    ReviewService service; 
	
	@PostMapping("/")
	public boolean addReview(@RequestBody Review review)
	{
	 return service.addReview(review);
	}
	@GetMapping("/")
	public List <Review> getAllReview()
	{
	 return service.getAllReview();
	}
}
