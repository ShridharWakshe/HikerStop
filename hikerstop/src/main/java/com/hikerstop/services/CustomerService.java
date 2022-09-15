package com.hikerstop.services;

import java.util.List;

import com.hikerstop.beans.Customer;







//main










public interface CustomerService {

	List<Customer> getAllUsers();

	public Customer save(Customer c);

	Customer authenticateUser(String username, String password);


	 Customer update(Customer c, String username);


	Customer updatePassword(String username, String password);


	
}
