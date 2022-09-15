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

@Entity
public class Event {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private int eventid;
	
	@NotNull
	private String eventname;
	@NotNull
	private Date eventdate;
	@NotNull
	private int availabilty;
	@NotNull
	private Double price;
	
	@ManyToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name="a_id")
	private Admin admin;
	
	/*@OneToOne(mappedBy = "event")
	private Customer customer;
	*/
	
	@OneToMany(mappedBy = "event")
	private List<Bookevent> bookEvent;
	

	public Event() {
		super();
	}

	public Event(@NotNull String eventname, @NotNull Date eventdate, @NotNull int availabilty, @NotNull Double price,
			Admin admin, List<Bookevent> bookEvent) {
		super();
		this.eventname = eventname;
		this.eventdate = eventdate;
		this.availabilty = availabilty;
		this.price = price;
		this.admin = admin;
		this.bookEvent = bookEvent;
	}

	public int getEventid() {
		return eventid;
	}

	public void setEventid(int eventid) {
		this.eventid = eventid;
	}

	public String getEventname() {
		return eventname;
	}

	public void setEventname(String eventname) {
		this.eventname = eventname;
	}

	public Date getEventdate() {
		return eventdate;
	}

	public void setEventdate(Date eventdate) {
		this.eventdate = eventdate;
	}

	public int getAvailabilty() {
		return availabilty;
	}

	public void setAvailabilty(int availabilty) {
		this.availabilty = availabilty;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Admin getAdmin() {
		return admin;
	}

	public void setAdmin(Admin admin) {
		this.admin = admin;
	}

	public List<Bookevent> getBookEvent() {
		return bookEvent;
	}

	public void setBookEvent(List<Bookevent> bookEvent) {
		this.bookEvent = bookEvent;
	}

	@Override
	public String toString() {
		return "Event [eventid=" + eventid + ", eventname=" + eventname + ", eventdate=" + eventdate + ", availabilty="
				+ availabilty + ", price=" + price + ", admin=" + admin + ", bookEvent=" + bookEvent + "]";
	}

	
	
	
	
	
}
