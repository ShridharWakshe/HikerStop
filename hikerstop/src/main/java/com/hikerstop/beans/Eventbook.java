package com.hikerstop.beans;


import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.Cascade;

import lombok.Data;


@Entity
@Data
public class Eventbook {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)  //(strategy=GenerationType.AUTO)
		private int bookid;
		
		private Date bookdate;
		
		private int noofperson;
		
		private String Eventname;
		
		

		@OneToOne(cascade = {CascadeType.ALL})
		@JoinColumn(name="customer_fk")
		private Customer customer;
		
	

}
