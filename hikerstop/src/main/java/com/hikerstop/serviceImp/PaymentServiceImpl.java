package com.hikerstop.serviceImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hikerstop.beans.Payment;
import com.hikerstop.dao.PaymentDao;
import com.hikerstop.services.PaymentService;



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
