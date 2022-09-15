package com.hikerstop.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hikerstop.beans.Customer;
import com.hikerstop.dao.AdminAuthorDao;
import com.hikerstop.exception.CustomerNotFoundException;





//main









@Service
public class AdminAuthorServiceImpl implements AdminAuthorService {

	@Autowired
	AdminAuthorDao adminADao;

	@Override
	public Customer fetchCustomers(String cname) {
		Customer e = adminADao.findByname(cname);
		if (e == null) {
			throw new CustomerNotFoundException("Customer Not Found...");
		}
		return e;
	}

	@Override
	public List<Customer> getAllCustomers() {
		List<Customer> clist = adminADao.findAll();
		clist.forEach((c) -> c.getCname());
		return clist;
	}

	@Override
	public String deletebyCustomerId(int c_id) {
		Customer c = adminADao.findById(c_id)
				.orElseThrow(() -> new CustomerNotFoundException("Customer Not Found..."));
		adminADao.delete(c);
		return "Customer Id " + c_id + " deleted";
	}
}
