package com.cdac.hikerstop.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cdac.hikerstop.beans.Customer;

@Repository
public interface CustomerDao extends JpaRepository<Customer, Integer> {
	
	Optional<Customer> findByUsername(String username);
	
	@Query(value="select * from Customer where username=:username and password=:password",nativeQuery=true)
	Optional<Customer> findByUsernamePassword(String username, String password);

}