package com.demo.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.example.entity.Wishlist;
import com.demo.example.repository.WishListRepository;



@Service
public class WishListService {
	@Autowired
	WishListRepository repository;
	
	public boolean addWishList(Wishlist wishlist)
	 {
	 return repository.save(wishlist)!=null?true:false;
	 }
	 public List<Wishlist> getAllWishList()
	 {
	 return repository.findAll();
	 }
}
