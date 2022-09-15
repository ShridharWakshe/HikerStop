package com.hikerstop.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hikerstop.beans.Payment;






//main





@Repository
public interface PaymentDao extends JpaRepository<Payment,Integer>{

}
