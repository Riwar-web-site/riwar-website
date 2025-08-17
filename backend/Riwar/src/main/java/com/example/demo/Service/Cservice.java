package com.example.demo.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Customer;
import com.example.demo.Repository.CustomerRepository;

@Service
public class Cservice {
	
	@Autowired
	private CustomerRepository repo;
	
	 @Autowired
    private PasswordEncoder encoder;
	
	public String registerCustomer(Customer customer) 
	{
    	if(repo.findByEmail(customer.getEmail()).isPresent())
    	{
    		throw new IllegalArgumentException("User already exists with email:"+customer.getEmail());
    	}
    	
    	customer.setPwd(encoder.encode(customer.getPwd()));
    	repo.save(customer);
    	return "Registration successful for :"+customer.getEmail();
 }

	public Customer authenticateCustomer(String email, String password) {
		Optional<Customer> customerOpt = repo.findByEmail(email);
		
		if (customerOpt.isPresent()) {
			Customer customer = customerOpt.get();
			// Check if the provided password matches the encoded password
			if (encoder.matches(password, customer.getPwd())) {
				return customer;
			}
		}
		return null; // Authentication failed
	}

}
	

