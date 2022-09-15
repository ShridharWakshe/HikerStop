package com.cdac.hikerstop.beans;

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

@Entity
public class Customer {
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int c_id;
	@NotNull
	private String cname;
	@NotNull
	private String username;
	@NotNull
	private String password;
	
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
	
	
	
	/*@OneToOne(cascade = {CascadeType.ALL})
	@JoinColumn(name="eventid",referencedColumnName = "eventid")
	private Event event;*/
	
	@OneToMany(mappedBy = "customer")
	private List<Bookevent> bookEvent;
	
	

	public Customer() {
		super();
	}



	public Customer(@NotNull String cname, @NotNull String username, @NotNull String password, @NotNull String mob_no,
			@NotNull String email_id, @NotNull String gender, @NotNull String address, @NotNull String city,
			@NotNull int age, List<Bookevent> bookEvent) {
		super();
		this.cname = cname;
		this.username = username;
		this.password = password;
		this.mob_no = mob_no;
		this.email_id = email_id;
		this.gender = gender;
		this.address = address;
		this.city = city;
		this.age = age;
		this.bookEvent = bookEvent;
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



	public List<Bookevent> getBookEvent() {
		return bookEvent;
	}



	public void setBookEvent(List<Bookevent> bookEvent) {
		this.bookEvent = bookEvent;
	}



	@Override
	public String toString() {
		return "Customer [c_id=" + c_id + ", cname=" + cname + ", username=" + username + ", password=" + password
				+ ", mob_no=" + mob_no + ", email_id=" + email_id + ", gender=" + gender + ", address=" + address
				+ ", city=" + city + ", age=" + age + ", bookEvent=" + bookEvent + "]";
	}
	
	
	

}

	
