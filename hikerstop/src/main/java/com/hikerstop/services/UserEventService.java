package com.hikerstop.services;

import java.util.List;

import com.hikerstop.beans.Event;








//main






public interface UserEventService  {

	Event fetchEvents(String eventname);

	List<Event> getAllEvents();



}
