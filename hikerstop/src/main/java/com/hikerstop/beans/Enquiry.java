package com.hikerstop.beans;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;



@Entity
@Data
public class Enquiry {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private int enquiryid;
	
	private String fullname;
	
	private String Phone;
	
	private String emailid;
	
	private String message;
	
	
	
}
