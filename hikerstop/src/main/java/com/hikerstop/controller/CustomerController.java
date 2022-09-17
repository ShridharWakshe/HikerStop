package com.hikerstop.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hikerstop.beans.Customer;
import com.hikerstop.dto.ResponseDTO;
import com.hikerstop.services.CustomerService;




@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/customer")
public class CustomerController {
	@Autowired
	CustomerService customerService;
	
	@GetMapping("/all")
	public ResponseEntity<?> getUsers() {
		return ResponseEntity.ok(new ResponseDTO<>(customerService.getAllUsers()));
	}
	
	@PostMapping
	public ResponseEntity<?> addCustomer(@RequestBody Customer c) {
		return new ResponseEntity<>(new ResponseDTO<>(customerService.save(c)), HttpStatus.CREATED);
	}
	

	
	@GetMapping("/login/{username}/{password}")
	public ResponseEntity<?> authenticateLogin(@PathVariable String username,@PathVariable String password) {
		System.out.println(username+ "   "+password);
		Customer c1= customerService.authenticateUser(username,password);
		if(c1!=null){
		return ResponseEntity.ok().build();
		}
		else {
			return ResponseEntity.notFound().build();
		}
	}
	
	
	@PutMapping("/update/{username}")
	public ResponseEntity<?> updateUser(@PathVariable String username,  @RequestBody  Customer c) {
		System.out.println(c);
		return ResponseEntity.ok(new ResponseDTO<>(customerService.update(c,username)));
	}
	
	@PutMapping("/password/{username}")
	public ResponseEntity<?> updatePassword(@PathVariable String username, @RequestBody Customer c) {
		System.out.println(c.getPassword());
		
		return ResponseEntity.ok(new ResponseDTO<>(customerService.updatePassword(username, c.getPassword())));
		
	}
	
	

	
}


