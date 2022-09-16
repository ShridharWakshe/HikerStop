package com.hikerstop.beans;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.core.serializer.Serializer;



//main

@Entity
public class Enquiry  {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int enquiryid;
	private String fullname;
	private String Phone;
	private String emailid;
	private String message;
	public Enquiry() {
		super();
	}
	public Enquiry(String fullname, String phone, String emailid, String message) {
		super();
		this.fullname = fullname;
		Phone = phone;
		this.emailid = emailid;
		this.message = message;
	}
	public Enquiry(int enquiryid, String fullname, String phone, String emailid, String message) {
		super();
		this.enquiryid = enquiryid;
		this.fullname = fullname;
		Phone = phone;
		this.emailid = emailid;
		this.message = message;
	}
	public int getEnquiryid() {
		return enquiryid;
	}
	public void setEnquiryid(int enquiryid) {
		this.enquiryid = enquiryid;
	}
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public String getPhone() {
		return Phone;
	}
	public void setPhone(String phone) {
		Phone = phone;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	@Override
	public String toString() {
		return "Enquiry [enquiryid=" + enquiryid + ", fullname=" + fullname + ", Phone=" + Phone + ", emailid="
				+ emailid + ", message=" + message + "]";
	}
	
	
	
	
	
	
}
