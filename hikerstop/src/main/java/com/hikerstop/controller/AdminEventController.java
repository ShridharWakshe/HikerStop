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






//main



@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/origin")
public class AdminEventController {
	
		@Autowired
		AdminService adminService;
		
//		@GetMapping("/{eventid}")
//		public ResponseEntity<?> fetchEvents(@PathVariable int eventid){
//			//Event event = adminService.fetchEvents(eventname);
//			System.out.println(eventid);
//			return ResponseEntity.ok(new ResponseDTO<>(adminService.fetchEvents(eventid)));
//		}
//		
//		@GetMapping("/allevent")
//		public ResponseEntity<?> getEvents() {
//			return ResponseEntity.ok(new ResponseDTO<>(adminService.getAllEvents()));
//		}
//		
//		@PostMapping("/add")
//		public ResponseEntity<?> addEvent(@RequestBody Event e) {
//			return new ResponseEntity<>(new ResponseDTO<>(adminService.save(e)), HttpStatus.CREATED);
//		}
//		
//		@PutMapping("/update/{eventname}")
//		public ResponseEntity<?> updateUser(@PathVariable String eventname,  @RequestBody  Event e) {
//			System.out.println(e);
//			return ResponseEntity.ok(new ResponseDTO<>(adminService.update(e,eventname)));
//		}
//		
//		@DeleteMapping("/delete/{eventid}")
//		public ResponseEntity<?> deleteEvent(@PathVariable int eventid) {
//			return ResponseEntity.ok(new ResponseDTO<>(adminService.deletebyId(eventid)));
//		}
////		
//	
//}
//  
		//autowire the BooksService class
		
		//creating a get mapping that retrieves all the books detail from the database 
		
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
		@PutMapping("/admin")
		private Event update(@RequestBody Event event) 
		{
			adminService.saveOrUpdate(event);
		return event;
		}
	}

