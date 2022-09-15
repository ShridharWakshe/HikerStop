package com.hikerstop.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hikerstop.beans.Payment;
import com.hikerstop.dao.PaymentDao;





//main








@Service
public class PaymentServiceImpl implements PaymentService{
	@Autowired
	PaymentDao pd;

	@Override
	public Payment save(Payment p) {
		return pd.save(p);
	}

	@Override
	public String deletepayment(int payid) {
		 pd.deleteById(payid);
		 return "delete payment" +payid;
	}
	
	
}
