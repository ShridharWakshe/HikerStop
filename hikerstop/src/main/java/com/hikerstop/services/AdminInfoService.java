package com.hikerstop.services;

import java.util.List;

import com.hikerstop.beans.Admin;







//main









public interface AdminInfoService {

	List<Admin> getAllUsers();

	public Admin save(Admin c);

	Admin authenticateUser(String username, String password);


	Admin update(Admin c, String username);
	
}


