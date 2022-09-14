package com.cdac.finalproject.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Admin {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "a_id")
	private int adminId;
	
	private String userName;
	
	private String password;

	public int getAdminId() {
		return adminId;
	}
	
	
	public Admin() {
		super();
	}


	public Admin(String userName, String password) {
		super();
		this.userName = userName;
		this.password = password;
	}


	public void setAdminId(int adminId) {
		this.adminId = adminId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	@Override
	public String toString() {
		return "Admin [adminId=" + adminId + ", userName=" + userName + ", password=" + password + "]";
	}


}
