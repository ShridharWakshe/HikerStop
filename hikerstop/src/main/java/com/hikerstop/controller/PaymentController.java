package com.hikerstop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hikerstop.beans.Payment;
import com.hikerstop.dto.ResponseDTO;
import com.hikerstop.services.PaymentService;




@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/payment")
public class PaymentController {

	@Autowired
	PaymentService ps;
	@PostMapping("/user")
	public ResponseEntity<?> addpaymentdetail(@RequestBody Payment p) 
	{
		return new ResponseEntity<>(new ResponseDTO<>(ps.save(p)), HttpStatus.CREATED);
	}
	
	@DeleteMapping("/delete/{payid}")
	public ResponseEntity<?> deletepayment(@PathVariable int payid){
		
		return ResponseEntity.ok(new ResponseDTO<>(ps.deletepayment(payid)));
	}
}
