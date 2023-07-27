package com.demo.example.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.example.entity.Book;
import com.demo.example.service.BookService;



@RestController
@RequestMapping("/book")
@CrossOrigin("*")
public class BookController {
	@Autowired
	BookService service; 
	
	@PostMapping("/")
	public boolean addBook(@RequestBody Book book)
	{
	 return service.addBook(book);
	}
	@GetMapping("/")
	public List <Book> getAllBook()
	{
	 return service.getAllBook();
	}
}
