package com.demo.example.repository;

//import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.example.entity.Rating;

@Repository
public interface RatingRepository extends JpaRepository<Rating,Integer> {
//	List<Rating> findByUserIdAndBookId(long userId,int bookId);
//	public boolean existByBookId(int bookId);
//	@Query(value="select avg(value) from rating where bool_id=?1",nativeQuery=true)
//	public int getAverageRating(int bookId);
}
