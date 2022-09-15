package com.cdac.hikerstop.exception;

@SuppressWarnings("serial")
public class CustomerNotFoundException extends RuntimeException{
	
	public CustomerNotFoundException(String message) {
		super(message);
	}
}