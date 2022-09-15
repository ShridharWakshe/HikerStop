package com.hikerstop.beans;


import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;



//main



@Entity
public class Payment {
	@Id
	@GeneratedValue(generator="gen1")
	private int pid;
	@NotNull
	private String noofperson;
	@NotNull
	private Date paydate;
	
	
	@OneToOne(cascade = {CascadeType.ALL})
	@JoinColumn(name="eventbook_fk")
	private Eventbook eventbook;
	
	
	
	public Payment() {
		super();
	}

	

	public Payment(int pid) {
		super();
		this.pid = pid;
	}



	public Payment(@NotNull String noofperson, @NotNull Date paydate, Eventbook eventbook) {
		super();
		this.noofperson = noofperson;
		this.paydate = paydate;
		this.eventbook = eventbook;
	}



	public int getPid() {
		return pid;
	}



	public void setPid(int pid) {
		this.pid = pid;
	}



	public String getName() {
		return noofperson;
	}



	public void setName(String noofperson) {
		this.noofperson = noofperson;
	}



	public Date getPaydate() {
		return paydate;
	}



	public void setPaydate(Date paydate) {
		this.paydate = paydate;
	}



	public Eventbook  getEventbook () {
		return eventbook;
	}



	public void setEventbook (Eventbook  eventbook ) {
		this.eventbook = eventbook;
	}



	@Override
	public String toString() {
		return "Payment [pid=" + pid + ", noofperson=" + noofperson + ", paydate=" + paydate + ", eventbook=" + eventbook + "]";
	}



}