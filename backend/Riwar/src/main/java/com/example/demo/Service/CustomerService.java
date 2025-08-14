package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Customer;
import com.example.demo.Exception.UserNameDoesntExistException;
import com.example.demo.Repository.CustomerRepository;

@Service
public class CustomerService implements UserDetailsService {

	@Autowired
	private CustomerRepository repo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		Customer cust=repo.findByEmail(username).orElse(null);
		if(cust==null)
		{
			throw new UserNameDoesntExistException("User details not found:"+username);
		}
		List<GrantedAuthority>authorities=List.of(new SimpleGrantedAuthority("ROLE_USER"));
		User user=new User(cust.getEmail(),cust.getPwd(),authorities);
		return user;
	}

	
}
