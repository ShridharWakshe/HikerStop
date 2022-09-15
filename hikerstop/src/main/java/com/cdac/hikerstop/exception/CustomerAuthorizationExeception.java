package com.cdac.hikerstop.exception;

@SuppressWarnings("serial")
public class CustomerAuthorizationExeception  extends RuntimeException {

	public CustomerAuthorizationExeception(String message) {
		super(message);
	}
	
}