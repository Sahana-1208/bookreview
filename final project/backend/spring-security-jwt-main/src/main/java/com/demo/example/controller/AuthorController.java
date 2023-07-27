package com.demo.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.example.entity.Author;
import com.demo.example.service.AuthorService;




@RestController
@RequestMapping("/author")
public class AuthorController {
	@Autowired
	AuthorService service; 
	
	@PostMapping("/")
	public boolean addAuthor(@RequestBody Author author)
	{
	 return service.addAuthor(author);
	}
	@GetMapping("/")
	public List <Author> getAllAuthor()
	{
	 return service.getAllAuthor();
	}
}
