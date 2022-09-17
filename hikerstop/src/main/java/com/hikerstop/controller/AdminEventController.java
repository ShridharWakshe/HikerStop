package com.hikerstop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hikerstop.beans.Event;
import com.hikerstop.services.AdminService;



@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/origin")
public class AdminEventController {
	
		@Autowired
		AdminService adminService;
		
		
		@GetMapping("/allevent")
		private List<Event> getAllBooks() 
		{
		return adminService.getAllEvents();
		}
		
		
		//creating a get mapping that retrieves the detail of a specific book
		
		@GetMapping("/admin/{eventid}")
		private Event getBooks(@PathVariable("eventid") int eventid) 
		{
		return adminService.getBooksById(eventid);
		}
		
		
		//creating a delete mapping that deletes a specified book
		
		@DeleteMapping("/admin/{eventid}")
		private void deleteBook(@PathVariable("eventid") int eventid) 
		{
			adminService.delete(eventid);
		}
		
		
		//creating post mapping that post the book detail in the database
		@PostMapping("/add")
		private int saveBook(@RequestBody Event event) 
		{
			adminService.saveOrUpdate(event);
		return event.getEventid();
		}
		
		
		//creating put mapping that updates the book detail 
//		@PutMapping("/admin")
//		private Event update(@RequestBody Event event) 
//		{
//			adminService.saveOrUpdate(event);
//		return event;
//		}
		
		@PutMapping("/admin/{eventid}")
		private Event update(@RequestBody Event event) 
		{
			adminService.saveOrUpdate(event);
		return event;
		}
	}

