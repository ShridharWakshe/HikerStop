package com.cdac.hikerstop.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.hikerstop.beans.Customer;
import com.cdac.hikerstop.dao.CustomerDao;
import com.cdac.hikerstop.exception.CustomerAuthorizationExeception;
import com.cdac.hikerstop.exception.CustomerException;
import com.cdac.hikerstop.exception.CustomerNotFoundException;

@Service
public class CustomerServiceImplementation implements CustomerService {
	
	@Autowired
	CustomerDao customerDao;

	@Override
	public List<Customer> getAllUsers() {
		List<Customer> clist= customerDao.findAll();
		clist.forEach((c) -> c.getUsername());
		return clist;
	}

	@Override
	public Customer save(Customer c) {
		Optional<Customer> op = customerDao.findByUsername(c.getUsername());
		if(op.isPresent()) {
			throw new CustomerException("Customer Exists Exception");
		}
		return customerDao.save(c);
	}

	@Override
	public Customer authencateUser(String Username, String password) {
		Customer customer = customerDao.findByUsernamePassword(Username,password)
				.orElseThrow(() -> new CustomerAuthorizationExeception("Invalid Username & Password"));
		System.out.println(customer);
		
		return customer;
	}

	@Override
	public Customer update(Customer c, String username) {
		Customer customer = customerDao.findByUsername(username)
				.orElseThrow(() -> new CustomerNotFoundException("Customer Not Found"));
		if(username!=null) {
			customer.setUsername(c.getUsername());
			customer.setPassword(c.getPassword());
			customer.setAddress(c.getAddress());
			customer.setAge(c.getAge());
			customer.setCity(c.getCity());
			customer.setGender(c.getGender());
			customer.setCname(c.getCname());
			customer.setMob_no(c.getMob_no());
			customer.setEmail_id(c.getEmail_id());
			customer.setAddress(c.getAddress());
			
		}
		return customerDao.save(customer);
	}

	@Override
	public Customer updatePassword(String username, String password) {
		Customer c1=null;
		if(!password.isEmpty()) {
			c1=customerDao.findByUsername(username)
					.orElseThrow(() -> new CustomerNotFoundException("Customer Not Found" +username));
			c1.setPassword(password);
			
			return customerDao.save(c1);
		}
		
		return null;
	}

}