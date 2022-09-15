package com.hikerstop.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;





//main









@Service
public class AdminServiceImpl{

//	@Autowired
//	AdminDao adminDao;
//	
//	@Override
//	public String fetchEvents(int eventid) {
//		Event e = adminDao.findByEventId(e.eventid);
//				if(e==null)
//				{
//					throw new CategoryNotFoundException("Event Not Found...");
//				}
//				return "Event Id "+eventid;
//	}
//
//	@Override
//	public List<Event> getAllEvents() {
//		List<Event> elist= adminDao.findAll();
//		elist.forEach((e) ->e.getEventname());
//		for(Event e: elist)
//		{
//		System.out.print(e);
//		}
//		return elist;
//	}
//
//	@Override
//	public Event save(Event e) {
//		Optional<Event> ev = adminDao.findByEventId(e.getEventid());
//		if(ev.isPresent()) {
//			throw new EventExistsExcpetion("Event Already Exists Excpetion");
//		}
//		return adminDao.save(e);
//	}
//
//	@Override
//	public String update(Event e, int eventid) {
//		Event event = adminDao.findByEvent(eventid)
//				.orElseThrow(() -> new CategoryNotFoundException("Event Not Found..."));
//		if(eventid!=null) {
//			event.setEventid(e.getEventid());
//			event.setEventname(e.getEventname());
//			event.setEventdate(e.getEventdate());
//			event.setAvailabilty(e.getAvailabilty());
//			event.setPrice(e.getPrice());
//		}
//		return adminDao.save(event);
//	
//	}
//
//	@Override
//	public String deletebyId(int eventid) {
//		Event e = adminDao.findById(eventid)
//		.orElseThrow(() -> new CategoryNotFoundException("Event Not Found..."));
//		adminDao.delete(e);
//		return "Event Id "+eventid+" deleted";
//	}
}
