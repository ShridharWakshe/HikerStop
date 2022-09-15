package com.hikerstop.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hikerstop.beans.Enquiry;







//main




@Repository
public interface EnquiryDao extends JpaRepository<Enquiry,Integer> {



}
