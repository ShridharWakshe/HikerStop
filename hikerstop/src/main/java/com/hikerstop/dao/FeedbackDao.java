package com.hikerstop.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hikerstop.beans.Feedback;






//main




@Repository
public interface FeedbackDao extends JpaRepository<Feedback,Integer> {

	@Query(value="select * from Feedback where name=:name",nativeQuery=true)
	Feedback findByName(String name);
	
	
}
