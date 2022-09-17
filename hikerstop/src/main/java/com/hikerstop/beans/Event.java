package com.hikerstop.beans;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Entity
@Data
public class Event {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private int eventid;
	
	private String eventname;
	
	private Date eventdate;
	
	private int availabilty;
	
	private Double price;
	
	@ManyToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name="a_id")
	private Admin admin;
	
	/*@OneToOne(mappedBy = "event")
	private Customer customer;
	*/
	
	@OneToMany(mappedBy = "event")
	private List<Bookevent> bookEvent;
	
	
	
}
