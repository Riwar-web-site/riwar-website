package com.example.demo.Exception;

import javax.management.RuntimeErrorException;

public class DataNotException extends RuntimeException {

	public DataNotException(String str) {
		super(str);
		
	}

}
