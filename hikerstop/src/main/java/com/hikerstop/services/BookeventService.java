package com.hikerstop.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hikerstop.beans.Bookevent;
import com.hikerstop.dao.BookeventDao;






//main









	@Service
	public class BookeventService {
	
	@Autowired
	BookeventDao Bookeventdao;
	//getting all books record by using the method findaAll() of CrudRepository
	public List<Bookevent> getAllBooks() 
	{
	List<Bookevent> bookevent = new ArrayList<Bookevent>();
	Bookeventdao.findAll().forEach(books1 -> bookevent.add(books1));
	return bookevent;
	}
	//getting a specific record by using the method findById() of CrudRepository
	public Bookevent getBooksById(int bookid) 
	{
	return Bookeventdao.findById(bookid).get();
	}
	//saving a specific record by using the method save() of CrudRepository
	public void saveOrUpdate(Bookevent bookevent) 
	{
		Bookeventdao.save(bookevent);
	}
	//deleting a specific record by using the method deleteById() of CrudRepository
	public void delete(int bookid) 
	{
		Bookeventdao.deleteById(bookid);
	}
	//updating a record
	public void update(Bookevent bookevent, int bookid) 
	{
		Bookeventdao.save(bookevent);
	}
	}
