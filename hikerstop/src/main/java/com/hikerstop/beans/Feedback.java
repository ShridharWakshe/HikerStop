package com.hikerstop.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;


@Entity
@Data
public class Feedback {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private int fid;
	private String name;
	private String comment;
	private int rating;
	
	
}
