package com.hikerstop.services;

import java.util.List;

import com.hikerstop.beans.Customer;






//main






public interface AdminAuthorService {

	Customer fetchCustomers(String cname);

	List<Customer> getAllCustomers();

	String deletebyCustomerId(int a_id);

}