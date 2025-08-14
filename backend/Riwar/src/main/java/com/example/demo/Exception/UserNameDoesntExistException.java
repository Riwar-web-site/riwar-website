package com.example.demo.Exception;

public class UserNameDoesntExistException extends RuntimeException {

	public UserNameDoesntExistException(String str) {
		super(str);
	}

	
}
