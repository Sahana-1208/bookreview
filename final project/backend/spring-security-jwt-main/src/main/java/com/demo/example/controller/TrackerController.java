package com.demo.example.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.example.entity.Tracker;
import com.demo.example.service.TrackerService;



@RestController
@RequestMapping("/tracker")
public class TrackerController {
	@Autowired
	TrackerService service; 
	
	@PostMapping("/")
	public boolean addTracker(@RequestBody Tracker tracker)
	{
	 return service.addTracker(tracker);
	}
	@GetMapping("/")
	public List <Tracker> getAllTracker()
	{
	 return service.getAllTracker();
	}
}
