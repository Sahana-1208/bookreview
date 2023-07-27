package com.demo.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.example.entity.Rating;
import com.demo.example.service.RatingService;

@RestController
@RequestMapping("/rating")
@CrossOrigin("*")
public class RatingController {
	@Autowired
    RatingService service; 
	
	@PostMapping("/")
	public boolean addRating(@RequestBody Rating rating)
	{
		System.out.println("Helooooooooo");
	 return service.addRating(rating);
	}
	@GetMapping("/")
	public List <Rating> getAllRating()
	{
	 return service.getAllRating();
	}
}
