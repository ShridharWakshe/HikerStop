package com.hikerstop.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hikerstop.beans.Eventbook;
import com.hikerstop.dao.EventbookDao;








//main











@Service
public class EventbookServiceImpl implements EventbookService{

	@Autowired
	EventbookDao ed;

	


	@Override
	public String delete(int bookid) {
		
		 ed.deleteById(bookid);
		 return "delete booked event" +bookid;
	}




	@Override
	public Eventbook save(Eventbook e) {
		
		return ed.save(e);
	}
	
	
}
