package com.cdac.hikerstop.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.hikerstop.beans.Admin;
import com.cdac.hikerstop.dao.AdminInfoDao;
import com.cdac.hikerstop.exceptions.CustomerAuthorizationExeception;
import com.cdac.hikerstop.exceptions.CustomerExcpetion;
import com.cdac.hikerstop.exceptions.CustomerNotFoundException;


@Service
public class AdminInfoServiceImp implements AdminInfoService{
	
	@Autowired(required=true)
	AdminInfoDao admindao;

	@Override
	public List<Admin> getAllUsers() {
		List<Admin> clist= admindao.findAll();
		clist.forEach((c) -> c.getUserName());
		return clist;
	}

	@Override
	public Admin save(Admin c) {
		Optional<Admin> op = admindao.findByUsername(c.getUserName());
		if(op.isPresent()) {
			throw new CustomerExcpetion("Customer Exists Excpetion");
		}
		return admindao.save(c);
	}

	@Override
	public Admin authenticateUser(String username, String password) {
		Admin admin = admindao.findByUsernamePassword(username,password)
				.orElseThrow(() -> new CustomerAuthorizationExeception("Invalid Username & Password"));
		System.out.println(admin);
		//customer.getUsername();
		//customer.getPassword();
		return admin;
		
		
	}

	@Override
	public Admin update(Admin c,String username) {
		Admin admin = admindao.findByUsername(username)
				.orElseThrow(() -> new CustomerNotFoundException("Customer Not Found"));
		if(username!=null) {
			admin.setUserName(c.getUserName());
			admin.setPassword(c.getPassword());
		
			
		}
		return admindao.save(admin);
	}


}
