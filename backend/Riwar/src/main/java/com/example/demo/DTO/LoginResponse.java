package com.example.demo.DTO;

public class LoginResponse {
    private boolean success;
    private String message;
    private String email;
    private String name;

    // Default constructor
    public LoginResponse() {}

    // Constructor for success response
    public LoginResponse(boolean success, String message, String email, String name) {
        this.success = success;
        this.message = message;
        this.email = email;
        this.name = name;
    }

    // Constructor for error response
    public LoginResponse(boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    // Getters and setters
    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
