package com.cdac.hikerstop.exceptions;

@SuppressWarnings("serial")
public class CategoryNotFoundException extends RuntimeException {


	
	public CategoryNotFoundException(String message) {
		super(message);
	}

}