package com.hikerstop.serviceImp;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hikerstop.beans.Event;
import com.hikerstop.dao.AdminDao;
import com.hikerstop.services.AdminService;



@Service
public class AdminServiceImpl implements AdminService{

	@Autowired
	AdminDao Admindao;
	//getting all books record by using the method findaAll() of CrudRepository
	public List<Event> getAllEvents() 
	{
	List<Event> event = new ArrayList<Event>();
	Admindao.findAll().forEach(books1 ->event.add(books1));
	return event;
	}
	//getting a specific record by using the method findById() of CrudRepository
	public Event getBooksById(int eventid) 
	{
	return Admindao.findById(eventid).get();
	}
	//saving a specific record by using the method save() of CrudRepository
	public void saveOrUpdate(Event event) 
	{
		Admindao.save(event);
	}
	//deleting a specific record by using the method deleteById() of CrudRepository
	public void delete(int eventid) 
	{
		Admindao.deleteById(eventid);
	}
	//updating a record
	public void update(Event event, int eventid) 
	{
		Admindao.save(event);
	}
}
