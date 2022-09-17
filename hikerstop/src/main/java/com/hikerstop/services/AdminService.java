package com.hikerstop.services;

import java.util.List;

import com.hikerstop.beans.Event;




public interface AdminService {



	//getting all books record by using the method findaAll() of CrudRepository
	public List<Event> getAllEvents();
	
	
	//getting a specific record by using the method findById() of CrudRepository
	public Event getBooksById(int eventid);
	
	
	//saving a specific record by using the method save() of CrudRepository
	public void saveOrUpdate(Event event);
	
	
	//deleting a specific record by using the method deleteById() of CrudRepository
	public void delete(int eventid);
	
	
	//updating a record
	public void update(Event event, int eventid);
}
