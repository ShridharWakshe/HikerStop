package com.cdac.hikerstop.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.cdac.hikerstop.beans.Admin;
import com.cdac.hikerstop.dao.AdminInfoDao;



public class AdminInfoServiceImp implements AdminInfoService{
	@Autowired
	AdminInfoDao admindao;

	@Override
	public List<Admin> getAllUsers() {
		List<Admin> clist= admindao.findAll();
		clist.forEach((c) -> c.getUserName());
		return clist;
	}

	@Override
	public Admin save(Admin c) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Admin authenticateUser(String username, String password) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Admin update(Admin c, String username) {
		// TODO Auto-generated method stub
		return null;
	}


}
