package com.hikerstop.beans;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
//mark class as an Entity 
@Entity
@Data
//defining class name as Table name
@Table
public class Bookevent {
	
		//Defining book id as primary key
		@Id
		 
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private int bookid;
		
		private String trekkersname;
		
		@Temporal(TemporalType.TIMESTAMP)
		private Date bookdate;
		
		private String eventname;
		
		private int noofperson;
		
		@Column(name = "mobile_no")
		private String mobileNo;
		
		@Column(name = "email_id")
		private String emailId;

		
		
		@ManyToOne(fetch = FetchType.EAGER)
		@JsonIgnore
		@JoinColumn(name="c_id")
		private Customer customer;
		
		@ManyToOne(fetch = FetchType.EAGER)
		@JsonIgnore
		@JoinColumn(name="eventid")
		private Event event;
		
	
		
}

