package com.hikerstop.beans;


import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

import lombok.Data;


@Entity
@Data
public class Payment {  //implements Serializable
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pid;
	
	private String noofperson;
	
	private Date paydate;
	
	
	@OneToOne(cascade = {CascadeType.ALL})
	@JoinColumn(name="eventbook_fk")
	private Eventbook eventbook;
	



}