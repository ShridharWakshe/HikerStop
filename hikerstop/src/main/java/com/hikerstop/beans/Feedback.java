package com.hikerstop.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;




//main



@Entity
public class Feedback {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private int fid;
	private String name;
	private String comment;
	private int rating;
	public Feedback() {
		super();
	}
	public Feedback(String name, String comment, int rating) {
		super();
		this.name = name;
		this.comment = comment;
		this.rating = rating;
	}
	public Feedback(int fid, String name, String comment, int rating) {
		super();
		this.fid = fid;
		this.name = name;
		this.comment = comment;
		this.rating = rating;
	}
	public int getFid() {
		return fid;
	}
	public void setFid(int fid) {
		this.fid = fid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	@Override
	public String toString() {
		return "Feedback [fid=" + fid + ", name=" + name + ", comment=" + comment + ", rating=" + rating + "]";
	}
	
	
}
