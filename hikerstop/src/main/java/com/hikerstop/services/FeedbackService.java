package com.hikerstop.services;

import java.util.List;

import com.hikerstop.beans.Feedback;








//main





public interface FeedbackService {
	Feedback save(Feedback f);

	Feedback fetchFeedback(String name);

	List<Feedback> getAllCustomers();

	String deleteFeedback(String name);
}
