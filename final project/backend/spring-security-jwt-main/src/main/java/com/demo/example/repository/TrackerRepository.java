package com.demo.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.example.entity.Tracker;



@Repository
public interface TrackerRepository extends JpaRepository<Tracker,Integer>{

}
