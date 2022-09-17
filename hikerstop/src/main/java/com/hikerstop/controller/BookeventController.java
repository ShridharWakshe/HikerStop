package com.hikerstop.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hikerstop.beans.Bookevent;
import com.hikerstop.services.BookeventService;


@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/bookevent")

public class BookeventController {

	//autowire the BooksService class
	@Autowired
	BookeventService bookeventService;
	//creating a get mapping that retrieves all the books detail from the database 
	
	@GetMapping("/event")
	private List<Bookevent> getAllBooks() 
	{
	return bookeventService.getAllBooks();  //why not going through dto
	}
	
	
	//creating a get mapping that retrieves the detail of a specific book
	
	@GetMapping("/event/{bookid}")
	private Bookevent getBooks(@PathVariable("bookid") int bookid) 
	{
	return bookeventService.getBooksById(bookid);
	}
	
	
	//creating a delete mapping that deletes a specified book
	
	@DeleteMapping("/event/{bookid}")
	private void deleteBook(@PathVariable("bookid") int bookid) 
	{
		bookeventService.delete(bookid);
	}
	
	
	//creating post mapping that post the book detail in the database
	@PostMapping("/event")
	private int saveBook(@RequestBody Bookevent bookevent) 
	{
		bookeventService.saveOrUpdate(bookevent);
	return bookevent.getBookid();
	}
	
	
	//creating put mapping that updates the book detail 
	@PutMapping("/event")
	private Bookevent update(@RequestBody Bookevent bookevent) 
	{
		bookeventService.saveOrUpdate(bookevent);
	return bookevent;
	}
}
