package com.hikerstop.beans;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;

import lombok.Data;


@Entity
@Data
public class Admin {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "a_id")
	private int adminId;
	
	private String username;
	
	private String password; 
	
	private String firstName;
	
	private String lastName;
	
	private String mobileNo;
	
	private String emailId;
	
	private String gender;
	
	private int age;
	
	private String address;
	
	@Column(unique=true)
	private String addharCardNo;
	
	@Column(columnDefinition = "boolean default false")
	private boolean status;

	@Override
	public String toString() {
		return "Admin [adminId=" + adminId + ", username=" + username + ", password=" + password + ", firstName="
				+ firstName + ", lastName=" + lastName + ", mobileNo=" + mobileNo + ", emailId=" + emailId + ", gender="
				+ gender + ", age=" + age + ", address=" + address + ", addharCardNo=" + addharCardNo + ", status="
				+ status + "]";
	}

	
	
}
