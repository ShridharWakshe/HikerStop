package com.cdac.hikerstop.services;

import java.util.List;

import com.cdac.hikerstop.beans.Customer;

public interface CustomerService {

	List<Customer> getAllUsers();
	
	Customer save(Customer c);
	
	Customer authencateUser(String username , String password);
	
	Customer update(Customer c, String username);
	
	Customer updatePassword(String username, String password);
}