package com.hikerstop.serviceImp;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hikerstop.beans.Event;
import com.hikerstop.dao.UserEventDao;
import com.hikerstop.exception.CategoryNotFoundException;
import com.hikerstop.services.UserEventService;


@Service
public class UserEventServiceImpl implements UserEventService{
	@Autowired
	UserEventDao userDao;
	
	@Override
	public Event fetchEvents(String eventname) {
		Event e = userDao.findByEventname(eventname);
				if(e==null)
				{
					throw new CategoryNotFoundException("Event Not Found...");
				}
				return e;
	}

	@Override
	public List<Event> getAllEvents() {
		List<Event> elist= userDao.findAll();
		elist.forEach((e) ->e.getEventname());
		return elist;
	}
}
