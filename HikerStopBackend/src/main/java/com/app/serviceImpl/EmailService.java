package com.app.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
	
	@Autowired
	private JavaMailSender emailSender;

	public void sendEmailForNewRegistration(String email) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("shridharwakshe12@gmail.com");
		message.setTo(email);
		message.setSubject("Thank you for Registering with us!");
		message.setText("WELCOME to HikerStop ");
		emailSender.send(message);
	}

	
	public void sendEmailForWorker(String email) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("shridharwakshe12@gmail.com");
		message.setTo(email);
		message.setSubject("Event has been booked");
		message.setText("Please check the My orders ");
		emailSender.send(message);
	}


}
