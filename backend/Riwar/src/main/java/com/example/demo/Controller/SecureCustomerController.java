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

import com.example.demo.DTO.LoginRequest;
import com.example.demo.DTO.LoginResponse;
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
    
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> loginCustomer(@RequestBody LoginRequest loginRequest) {
        try {
            Customer customer = custServ.authenticateCustomer(loginRequest.getEmail(), loginRequest.getPassword());
            
            if (customer != null) {
                LoginResponse response = new LoginResponse(true, "Login successful", 
                    customer.getEmail(), customer.getEmail()); // Using email as name since Customer doesn't have name field
                return ResponseEntity.ok(response);
            } else {
                LoginResponse response = new LoginResponse(false, "Invalid email or password");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
            }
        } catch (Exception ex) {
            LoginResponse response = new LoginResponse(false, "Login failed: " + ex.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
    
    @PostMapping("/logout")
    public ResponseEntity<LoginResponse> logoutCustomer() {
        try {
            // Since we're using stateless authentication, we just need to return success
            // The frontend will handle clearing the stored user data
            LoginResponse response = new LoginResponse(true, "Logout successful");
            return ResponseEntity.ok(response);
        } catch (Exception ex) {
            LoginResponse response = new LoginResponse(false, "Logout failed: " + ex.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
    
    @GetMapping("/show")
    public String show()
    {
    	return "The auth is defined";
    }
}
