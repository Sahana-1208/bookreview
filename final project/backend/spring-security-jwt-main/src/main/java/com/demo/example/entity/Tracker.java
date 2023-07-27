package com.demo.example.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level=AccessLevel.PRIVATE)
@Getter
@Setter
@Entity
public class Tracker {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="tracker_id")
	int tracker_id;
	int total_pages;
	int pages_completed;
}
