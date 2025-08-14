package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Customer;
import com.example.demo.Service.Cservice;

@RestController
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
@RequestMapping("/auth")
public class SecureCustomerController {

	@Autowired
private Cservice custServ;
    
    @PostMapping("/register")
    public ResponseEntity<String> registerCustomer(@RequestBody Customer customer){
    	try {
    		String message=custServ.registerCustomer(customer);
    		return ResponseEntity.ok(message);
    	}catch(IllegalArgumentException ex) {
    		return new ResponseEntity<>(ex.getMessage(),HttpStatus.CONFLICT);
    	}
    }
    
    @GetMapping("/show")
    public String show()
    {
    	return "The auth is defined";
    }
}
