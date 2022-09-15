package com.hikerstop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hikerstop.beans.Feedback;
import com.hikerstop.dto.ResponseDTO;
import com.hikerstop.services.FeedbackService;








//main



@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/feedback")
public class FeedbackController {
	@Autowired
	FeedbackService fService;
	
	@PostMapping
	public ResponseEntity<?> addFeedback(@RequestBody Feedback f) {
		return new ResponseEntity<>(new ResponseDTO<>(fService.save(f)), HttpStatus.CREATED);
	}
	
	@GetMapping("/{name}")
	public ResponseEntity<?> fetchFeedback(@PathVariable String name){
		System.out.println(name);
		return ResponseEntity.ok(new ResponseDTO<>(fService.fetchFeedback(name)));
	}
	
	@GetMapping
	public ResponseEntity<?> getFeedback() {
		return ResponseEntity.ok(new ResponseDTO<>(fService.getAllCustomers()));
	}
	
	
	@DeleteMapping("/delete/{name}")
	public ResponseEntity<?> deleteFeedback(@PathVariable String name) {
		return ResponseEntity.ok(new ResponseDTO<>(fService.deleteFeedback(name)));
	}
	
}
