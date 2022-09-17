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

import com.hikerstop.beans.Admin;
import com.hikerstop.dto.ResponseDTO;
import com.hikerstop.services.AdminInfoService;



@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/author")
public class AdminController {
	@Autowired
	 AdminInfoService adminInfoService;
	
	@GetMapping("/admindata")
	public ResponseEntity<?> getUsers() {
		return ResponseEntity.ok(new ResponseDTO<>(adminInfoService.getAllUsers()));
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> addAdmin(@RequestBody Admin c) {
		return new ResponseEntity<>(new ResponseDTO<>(adminInfoService.save(c)), HttpStatus.CREATED);
	}
	
	
	@GetMapping("/adminlogin/{username}/{password}")
	public ResponseEntity<?> authenticateLogin(@PathVariable String username,@PathVariable String password) {
		System.out.println(username+ "   "+password);
		Admin c1= adminInfoService.authenticateUser(username,password);
		if(c1!=null){
		return ResponseEntity.ok().build();
		}
		else {
			return ResponseEntity.notFound().build();
		}
	}
	
	@PutMapping("/update/{username}")
	public ResponseEntity<?> updateUser(@PathVariable String username,  @RequestBody  Admin c) {
		System.out.println(c);
		return ResponseEntity.ok(new ResponseDTO<>(adminInfoService.update(c,username)));
	}
	

	
}
