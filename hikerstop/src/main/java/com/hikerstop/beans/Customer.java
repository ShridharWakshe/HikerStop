package com.hikerstop.beans;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.Cascade;

import lombok.Data;

@Entity
@Data
public class Customer {
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int c_id;
	
	private String cname;
	
	private String username;
	
	private String password;
	
	private String mob_no;
	
	private String email_id;
	
	private String gender;
	
	private String address;
	
	private String city;
	
	private int age;
	
	
	
	/*@OneToOne(cascade = {CascadeType.ALL})
	@JoinColumn(name="eventid",referencedColumnName = "eventid")
	private Event event;*/
	
	@OneToMany(mappedBy = "customer")
	private List<Bookevent> bookEvent;
	
	

}

	
