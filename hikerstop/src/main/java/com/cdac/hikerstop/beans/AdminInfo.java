package com.cdac.hikerstop.beans;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "admin_detail")
public class AdminInfo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "admin_info_id")
	private int adminInfoId;
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
	@NotNull
	@Column(columnDefinition = "boolean default false")
	private boolean status;
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "admin_id",referencedColumnName = "a_id")
    private Admin admin;
	
	

	public AdminInfo() {
		super();
	}



	public AdminInfo(String firstName, @NotNull String lastName, @NotNull String mobileNo, @NotNull String emailId,
			@NotNull String gender, @NotNull int age, @NotNull String address, @NotNull String addharCardNo,
			@NotNull boolean status, Admin admin) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.mobileNo = mobileNo;
		this.emailId = emailId;
		this.gender = gender;
		this.age = age;
		this.address = address;
		this.addharCardNo = addharCardNo;
		this.status = status;
		this.admin = admin;
	}



	public int getAdminInfoId() {
		return adminInfoId;
	}



	public void setAdminInfoId(int adminInfoId) {
		this.adminInfoId = adminInfoId;
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



	public Admin getAdmin() {
		return admin;
	}



	public void setAdmin(Admin admin) {
		this.admin = admin;
	}



	@Override
	public String toString() {
		return "AdminInfo [adminInfoId=" + adminInfoId + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", mobileNo=" + mobileNo + ", emailId=" + emailId + ", gender=" + gender + ", age=" + age
				+ ", address=" + address + ", addharCardNo=" + addharCardNo + ", status=" + status + ", admin=" + admin
				+ "]";
	}
	
	
	
	
}
