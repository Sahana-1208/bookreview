package com.demo.example.entity;

import java.sql.Date;
//import java.util.List;

//import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.OneToMany;
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
public class Book {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="book_id")
	int bookId;
	String bookName;
	String author;
	String imageurl;
	String description;
	Date releaseDate;
//	int bookRating;
//	@OneToMany(cascade=CascadeType.ALL)
//	@JoinColumn(name="book_id",referencedColumnName="book_id")
//	List<Rating> rating;
}
