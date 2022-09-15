package com.cdac.hikerstop.services;

import java.util.List;

import com.cdac.hikerstop.beans.Admin;

public interface AdminInfoService {

	List<Admin> getAllUsers();

	public Admin save(Admin c);

	Admin authenticateUser(String username, String password);


	Admin update(Admin c, String username);
	
}
