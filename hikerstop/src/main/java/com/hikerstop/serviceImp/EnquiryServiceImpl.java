package com.hikerstop.serviceImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hikerstop.beans.Enquiry;
import com.hikerstop.dao.EnquiryDao;
import com.hikerstop.services.EnquiryService;




@Service
public class EnquiryServiceImpl implements EnquiryService{
	@Autowired
	EnquiryDao eDao;
	
	@Override
	public Enquiry save(Enquiry e) {
		return eDao.save(e);
	}

	@Override
	public Enquiry fetchEnquiry(int enquiryid) {
		return eDao.getById(enquiryid);
	}

	@Override
	public String deleteEnquiry(int enquiryid) {
		Enquiry e = eDao.getById(enquiryid);
		eDao.delete(e);
		return "Feedback "+enquiryid+" deleted";
	}

	

}
