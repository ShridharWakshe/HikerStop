package com.app.dto;

import org.springframework.beans.BeanUtils;
import org.springframework.web.multipart.MultipartFile;

import com.app.pojos.Event;

import lombok.Data;


@Data
public class EventDTO {
	
	private int eventid;
	
	
	private String eventname;
	
	
	private String eventcat;
	
	
	private int price;
	
	
	private int guideId;
	
	
	private String location;
	
	
	private MultipartFile pic;
	
	
	public static Event toEntity(EventDTO dto) {
		Event entity=new Event();
		BeanUtils.copyProperties(dto, entity, "pic");		
		return entity;
	}
	
}
