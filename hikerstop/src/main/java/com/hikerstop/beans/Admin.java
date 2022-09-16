package com.hikerstop.beans;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

import lombok.Data;


@Entity
public class Admin {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
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

	
	@OneToMany(mappedBy = "admin")
	private List<Event> event;

	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	


	public Admin() {
		super();
	}


	

	public Admin(String username, String password, String firstName, String lastName, String mobileNo, String emailId,
			String gender, int age, String address, String addharCardNo, boolean status) {
		super();
		this.username = username;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.mobileNo = mobileNo;
		this.emailId = emailId;
		this.gender = gender;
		this.age = age;
		this.address = address;
		this.addharCardNo = addharCardNo;
		this.status = status;
		
	}


	public int getAdminId() {
		return adminId;
	}




	public void setAdminId(int adminId) {
		this.adminId = adminId;
	}


	public String getUserName() {
		return username;
	}

	public void setUserName(String userName) {
		this.username = userName;
	}


	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}


	public String getEmailId() {
		return emailId;
	}


	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}


	public String getAddharCardNo() {
		return addharCardNo;
	}


	public void setAddharCardNo(String addharCardNo) {
		this.addharCardNo = addharCardNo;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}


	

	@Override
	public String toString() {
		return "Admin [adminId=" + adminId + ", userName=" + username + ", password=" + password + ", firstName="
				+ firstName + ", lastName=" + lastName + ", mobileNo=" + mobileNo + ", emailId=" + emailId + ", gender="
				+ gender + ", age=" + age + ", address=" + address + ", addharCardNo=" + addharCardNo + ", status="
				+ status + "]";
	}
	
	
	
}