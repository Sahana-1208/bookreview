package com.demo.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.example.entity.Wishlist;
import com.demo.example.service.WishListService;



@RestController
@RequestMapping("/wishlist")
public class WishListController {
	@Autowired
	WishListService service; 
	
	@PostMapping("/")
	public boolean addWishList(@RequestBody Wishlist wishlist)
	{
	 return service.addWishList(wishlist);
	}
	@GetMapping("/")
	public List <Wishlist> getAllWishList()
	{
	 return service.getAllWishList();
	}
}
