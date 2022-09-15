package com.hikerstop.services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.hikerstop.beans.Eventbook;







//main









public interface EventbookService {



	String delete(int bookid);

	Eventbook save(Eventbook e);

	
	

}
