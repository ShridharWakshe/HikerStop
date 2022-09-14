package com.cdac.hikerstop.beans;

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

@Entity
public class Customer {
	@Id @NotNull
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int c_id;
	@NotNull
	private String cname;
	@NotNull
	private String username;
	@NotNull
	private String password;
	@NotNull
	private String password1;
	@NotNull
	private String mob_no;
	@NotNull
	private String email_id;
	@NotNull
	private String gender;
	@NotNull
	private String address;
	@NotNull
	private String city;
	@NotNull
	private int age;
	
	
	
	@OneToOne(cascade = {CascadeType.ALL})
	@JoinColumn(name="event_fk")
	private Event event;
	
	
	public Customer() {
		super();
	}

	
	public Customer(int c_id) {
		super();
		this.c_id = c_id;
	}


	public Customer(String cname, String username, String password, String password1, String mob_no, String email_id,
			String gender, String address, String city, int age) {
		super();
		this.cname = cname;
		this.username = username;
		this.password = password;
		this.password1 = password1;
		this.mob_no = mob_no;
		this.email_id = email_id;
		this.gender = gender;
		this.address = address;
		this.city = city;
		this.age = age;
	}


	public Customer(String cname, String username, String password, String password1, String mob_no, String email_id,
			String gender, String address, String city, int age, Event event) {
		super();
		this.cname = cname;
		this.username = username;
		this.password = password;
		this.password1 = password1;
		this.mob_no = mob_no;
		this.email_id = email_id;
		this.gender = gender;
		this.address = address;
		this.city = city;
		this.age = age;
		this.event = event;
	}


	public int getC_id() {
		return c_id;
	}


	public void setC_id(int c_id) {
		this.c_id = c_id;
	}


	public String getCname() {
		return cname;
	}


	public void setCname(String cname) {
		this.cname = cname;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getPassword1() {
		return password1;
	}


	public void setPassword1(String password1) {
		this.password1 = password1;
	}


	public String getMob_no() {
		return mob_no;
	}


	public void setMob_no(String mob_no) {
		this.mob_no = mob_no;
	}


	public String getEmail_id() {
		return email_id;
	}


	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public int getAge() {
		return age;
	}


	public void setAge(int age) {
		this.age = age;
	}


	public Event getEvent() {
		return event;
	}


	public void setEvent(Event event) {
		this.event = event;
	}


	@Override
	public String toString() {
		return "Customer [c_id=" + c_id + ", cname=" + cname + ", username=" + username + ", password=" + password
				+ ", password1=" + password1 + ", mob_no=" + mob_no + ", email_id=" + email_id + ", gender=" + gender
				+ ", address=" + address + ", city=" + city + ", age=" + age + ", event=" + event + "]";
	}
}

	
