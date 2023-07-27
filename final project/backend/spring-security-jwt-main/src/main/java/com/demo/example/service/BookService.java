package com.demo.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.example.entity.Book;
import com.demo.example.repository.BookRepository;



@Service
public class BookService {
	@Autowired
	BookRepository repository;
	
	public boolean addBook(Book book)
	 {
	 return repository.save(book)!=null?true:false;
	 }
	 public List<Book> getAllBook()
	 {
	 return repository.findAll();
	 }
}
