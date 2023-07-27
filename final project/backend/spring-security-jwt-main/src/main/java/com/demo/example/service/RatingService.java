package com.demo.example.service;

import java.util.List;

//import org.springframework.aop.AopInvocationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.demo.example.entity.Book;
import com.demo.example.entity.Rating;
import com.demo.example.repository.BookRepository;
import com.demo.example.repository.RatingRepository;
import com.demo.example.repository.UserRepository;

@Service
public class RatingService {
	@Autowired
	RatingRepository repository;
	@Autowired
	UserRepository userRepo;
	@Autowired
	BookRepository bookRepo;
	
//	public boolean addRating(String email,int bookId,int value)
//	 {
//		if(userRepo.existsByEmail(email) && repository.findByUserIdAndBookId(userRepo.findByEmail(email).get().getId(),bookId).size()!=0) {
//			System.out.println("if case");
//			Rating rating=repository.findByUserIdAndBookId(userRepo.findByEmail(email).get().getId(), bookId).get(0);
//			rating.setValue(value);
//			repository.save(rating);
//		}
//		else if(userRepo.existsByEmail(email)) {
//			Rating rating=new Rating();
//			rating.setValue(value);
//			rating.setUserId(userRepo.findByEmail(email).get().getId());
//			rating.setBookId(bookId);
//			rating=repository.save(rating);
//		}
//		
//		Book book=bookRepo.findById(bookId).get();
//		book.setBookRating(getAverageRating(bookId));
//		return true;
//	 }
	 public List<Rating> getAllRating()
	 {
	 return repository.findAll();
	 }
	 
//	 public int getAverageRating(int bookId) {
//		 try {
//			 return repository.getAverageRating(bookId);
//		 }
//		 catch(AopInvocationException e) {
//			 return 0;
//		 }
//	 }
	 public boolean addRating(Rating rating) {
		 return repository.save(rating)!=null?true:false;
	 }
}
