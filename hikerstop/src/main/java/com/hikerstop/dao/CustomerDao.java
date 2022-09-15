package com.hikerstop.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hikerstop.beans.Customer;








//main



@Repository
public interface CustomerDao extends JpaRepository<Customer,Integer>{
//@Query(value="select * from customer where username=UserName and password=password",nativeQuery=true)
//Optional<Customer> getByUserName(String UserName,String password);
	
	Optional<Customer> findByUsername(String username);

	@Query(value="select * from customer where username=:username and password=:password",nativeQuery=true)
	Optional<Customer> findByUsernamePassword(String username, String password);

	
	

}
