package com.hikerstop.services;

import com.hikerstop.beans.Enquiry;

//main






public interface EnquiryService {

	Enquiry save(Enquiry e);

	Enquiry fetchEnquiry(int enquiryid);

	String deleteEnquiry(int enquiryid);


}
