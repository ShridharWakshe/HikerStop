package com.hikerstop.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hikerstop.beans.Customer;
import com.hikerstop.dao.CustomerDao;
import com.hikerstop.exception.CustomerAuthorizationExeception;
import com.hikerstop.exception.CustomerExcpetion;
import com.hikerstop.exception.CustomerNotFoundException;






//main









@Service
public class CustomerServiceImpl implements CustomerService{
	@Autowired
	CustomerDao custDao;

	@Override
	public List<Customer> getAllUsers() {
		
		System.out.println("it working");
		List<Customer> clist= custDao.findAll();
		
		clist.forEach((c) -> c.getUsername());
		return clist;
	}

	@Override
	public Customer save(Customer c) {
		Optional<Customer> op = custDao.findByUsername(c.getUsername());
		if(op.isPresent()) {
			throw new CustomerExcpetion("Customer Exists Excpetion");
		}
		return custDao.save(c);
	}

	@Override
	public Customer authenticateUser(String username, String password) {
		Customer customer = custDao.findByUsernamePassword(username,password)
				.orElseThrow(() -> new CustomerAuthorizationExeception("Invalid Username & Password"));
		System.out.println(customer);
		//customer.getUsername();
		//customer.getPassword();
		return customer;
		
		
	}

	@Override
	public Customer update(Customer c,String username) {
		Customer customer = custDao.findByUsername(username)
				.orElseThrow(() -> new CustomerNotFoundException("Customer Not Found"));
		if(username!=null) {
			customer.setUsername(c.getUsername());
			customer.setPassword(c.getPassword());
			//customer.setPassword1(c.getPassword1());
			customer.setAddress(c.getAddress());
			customer.setAge(c.getAge());
			customer.setCity(c.getCity());
			customer.setGender(c.getGender());
			customer.setCname(c.getCname());
			customer.setMob_no(c.getMob_no());
			customer.setEmail_id(c.getEmail_id());
			
		}
		return custDao.save(customer);
	}

	@Override
	public Customer updatePassword(String username, String password) {
		Customer c1=null;
		if(!password.isEmpty()) {
			c1=custDao.findByUsername(username)
					.orElseThrow(() -> new CustomerNotFoundException("Customer Not Found" +username));
			c1.setPassword(password);
			//c1.setPassword1(password1);
			return custDao.save(c1);
		}
		
		return null;
	}

	

	

	
	


}

