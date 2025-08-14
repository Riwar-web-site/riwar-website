package com.example.demo.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(UserNameDoesntExistException.class)
	public ResponseEntity<ErrorResponse> handleUserNameDosentExistsException(UserNameDoesntExistException ex)
	{
		ErrorResponse err=new ErrorResponse();
		err.setStatusCode(HttpStatus.NOT_FOUND.value());
		err.setErrorMsg(ex.getMessage());
		return new ResponseEntity<>(err,HttpStatus.NOT_FOUND);
	}
	
	public ResponseEntity<ErrorResponse>handleIllegalArgumentException(IllegalArgumentException ex)
	{
		ErrorResponse er=new ErrorResponse();
		er.setStatusCode(HttpStatus.PAYLOAD_TOO_LARGE.value());
		er.setErrorMsg(ex.getMessage());
		return new ResponseEntity<>(er,HttpStatus.PAYLOAD_TOO_LARGE);
		
	}
	
	@ExceptionHandler(DataNotException.class)
	public ResponseEntity<ErrorResponse>handleDataNotException(DataNotException ex)
	{
		ErrorResponse err=new ErrorResponse();
		err.setStatusCode(HttpStatus.NOT_FOUND.value());
		err.setErrorMsg(ex.getMessage());
		return new ResponseEntity<>(err,HttpStatus.NOT_FOUND);
		
	}
}

