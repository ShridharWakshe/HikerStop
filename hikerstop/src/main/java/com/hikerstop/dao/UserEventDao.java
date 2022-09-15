package com.hikerstop.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hikerstop.beans.Event;








//main


@Repository
public interface UserEventDao extends JpaRepository<Event,Integer>{

	
	@Query(value="select * from Event where eventname=:eventname",nativeQuery=true)
	Event findByEventname(String eventname);

}
