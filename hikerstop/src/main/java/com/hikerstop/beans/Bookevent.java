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
//mark class as an Entity 
@Entity
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

		
		
		@ManyToOne //(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
		@JoinColumn(name="c_id",referencedColumnName = "c_id",nullable=false)
		private Customer customer;
		
		@ManyToOne	(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
		@JoinColumn(name="eventid",referencedColumnName = "eventid",nullable=false)
		private Event event;
		

		public Bookevent() {
			super();
		}

		
		public Bookevent(String trekkersname, Date bookdate, String eventname, int noofperson, String mobileNo,
				String emailId, Customer customer, Event event) {
			super();
			this.trekkersname = trekkersname;
			this.bookdate = bookdate;
			this.eventname = eventname;
			this.noofperson = noofperson;
			this.mobileNo = mobileNo;
			this.emailId = emailId;
			this.customer = customer;
			this.event = event;
		}


		public int getBookid() {
			return bookid;
		}


		public void setBookid(int bookid) {
			this.bookid = bookid;
		}


		public String getTrekkersname() {
			return trekkersname;
		}


		public void setTrekkersname(String trekkersname) {
			this.trekkersname = trekkersname;
		}


		public Date getBookdate() {
			return bookdate;
		}


		public void setBookdate(Date bookdate) {
			this.bookdate = bookdate;
		}


		public String getEventname() {
			return eventname;
		}


		public void setEventname(String eventname) {
			this.eventname = eventname;
		}


		public int getNoofperson() {
			return noofperson;
		}


		public void setNoofperson(int noofperson) {
			this.noofperson = noofperson;
		}


		public String getMobileNo() {
			return mobileNo;
		}


		public void setMobileNo(String mobileNo) {
			this.mobileNo = mobileNo;
		}


		public String getEmailId() {
			return emailId;
		}


		public void setEmailId(String emailId) {
			this.emailId = emailId;
		}


		public Customer getCustomer() {
			return customer;
		}


		public void setCustomer(Customer customer) {
			this.customer = customer;
		}


		public Event getEvent() {
			return event;
		}


		public void setEvent(Event event) {
			this.event = event;
		}


		@Override
		public String toString() {
			return "Bookevent [bookid=" + bookid + ", trekkersname=" + trekkersname + ", bookdate=" + bookdate
					+ ", eventname=" + eventname + ", noofperson=" + noofperson + ", mobileNo=" + mobileNo
					+ ", emailId=" + emailId + ", customer=" + customer + ", event=" + event + "]";
		}
		
		
}

