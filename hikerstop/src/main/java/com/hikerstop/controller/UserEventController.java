package com.hikerstop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hikerstop.dto.ResponseDTO;
import com.hikerstop.services.UserEventService;








//main




@RestController
@RequestMapping("/user")
public class UserEventController {
	
		@Autowired
		UserEventService userService;
		
		@GetMapping("/{eventname}")
		public ResponseEntity<?> fetchEvents(@PathVariable String eventname){
			//Event event = userService.fetchEvents(eventname);
			System.out.println(eventname);
			return ResponseEntity.ok(new ResponseDTO<>(userService.fetchEvents(eventname)));
		}
		
		@GetMapping
		public ResponseEntity<?> getEvents() {
			return ResponseEntity.ok(new ResponseDTO<>(userService.getAllEvents()));
		}
		

}
