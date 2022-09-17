package com.hikerstop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hikerstop.dto.ResponseDTO;
import com.hikerstop.services.AdminAuthorService;


@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/authority")
public class AdminAuthorityController {
	@Autowired
	AdminAuthorService adminauthorService;
	
	@GetMapping("/{username}")
	public ResponseEntity<?> fetchCustomers(@PathVariable String username){
		System.out.println(username);
		return ResponseEntity.ok(new ResponseDTO<>(adminauthorService.fetchCustomers(username)));
	}
	
	@GetMapping("/allusers")
	public ResponseEntity<?> getCustomers() {
		return ResponseEntity.ok(new ResponseDTO<>(adminauthorService.getAllCustomers()));
	}
	
	
	
	//issue
	@DeleteMapping("/delete/{a_id}")
	public ResponseEntity<?> deleteCustomer(@PathVariable int a_id) {
		return ResponseEntity.ok(new ResponseDTO<>(adminauthorService.deletebyCustomerId(a_id)));
	}
	


}
