package com.cdac.hikerstop.beans;

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

@Entity
public class Admin {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "a_id")
	private int adminId;
	@NotNull
	private String username;
	@NotNull
	private String password; 
	
	@NotNull
	private String firstName;
	@NotNull
	private String lastName;
	@NotNull
	private String mobileNo;
	@NotNull
	private String emailId;
	@NotNull
	private String gender;
	@NotNull
	private int age;
	@NotNull
	private String address;
	@NotNull
	@Column(unique=true)
	private String addharCardNo;

	@Column(columnDefinition = "boolean default false")
	private boolean status;

	
	@OneToMany(mappedBy = "admin")
	private List<Event> event;
	
	public Admin() {
		super();
	}


	public Admin(@NotNull String username, @NotNull String password, @NotNull String firstName,
			@NotNull String lastName, @NotNull String mobileNo, @NotNull String emailId, @NotNull String gender,
			@NotNull int age, @NotNull String address, @NotNull String addharCardNo, @NotNull boolean status,
			List<Event> event) {
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
		this.event = event;
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


	public List<Event> getEvent() {
		return event;
	}

	public void setEvent(List<Event> event) {
		this.event = event;
	}

	@Override
	public String toString() {
		return "Admin [adminId=" + adminId + ", userName=" + username + ", password=" + password + ", firstName="
				+ firstName + ", lastName=" + lastName + ", mobileNo=" + mobileNo + ", emailId=" + emailId + ", gender="
				+ gender + ", age=" + age + ", address=" + address + ", addharCardNo=" + addharCardNo + ", status="
				+ status + ", event=" + event + "]";
	}
	
	
	
}