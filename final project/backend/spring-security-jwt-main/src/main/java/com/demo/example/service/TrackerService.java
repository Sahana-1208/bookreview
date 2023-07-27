package com.demo.example.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.example.entity.Tracker;
import com.demo.example.repository.TrackerRepository;



@Service
public class TrackerService {
	@Autowired
	TrackerRepository repository;
	
	public boolean addTracker(Tracker tracker)
	 {
	 return repository.save(tracker)!=null?true:false;
	 }
	 public List<Tracker> getAllTracker()
	 {
	 return repository.findAll();
	 }
}
