package com.demo.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.example.entity.Author;
import com.demo.example.repository.AuthorRepository;



@Service
public class AuthorService {
	@Autowired
	AuthorRepository repository;
	
	public boolean addAuthor(Author author)
	 {
	 return repository.save(author)!=null?true:false;
	 }
	 public List<Author> getAllAuthor()
	 {
	 return repository.findAll();
	 }
}
