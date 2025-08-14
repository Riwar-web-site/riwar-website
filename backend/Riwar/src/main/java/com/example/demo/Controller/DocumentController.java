package com.example.demo.Controller;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.DTO.PdfFileResponse;
import com.example.demo.Entity.Document;
import com.example.demo.Service.DocumentService;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class DocumentController {

@Autowired
private  DocumentService ds;
	
@PostMapping("/upload")
public ResponseEntity<String>uploadDocument(@RequestParam("files") MultipartFile[] files)
{
		try {
			ds.uploadDocuments(files);
			return ResponseEntity.status(HttpStatus.OK).body("Files Uploaded Successfully");
		}
		catch(IOException ex)
		{
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving files: " + ex.getMessage());

		}
}
	
	
	
	
@GetMapping("/list")
public ResponseEntity<List<PdfFileResponse>> listAllFiles() {
    List<PdfFileResponse> files = ds.getAllFiles().stream()
            .map(file -> new PdfFileResponse(
                    file.getId(),
                    file.getName(),
                    file.getContentType(),
                    null 
           ))
            .collect(Collectors.toList());

	    return ResponseEntity.ok(files); 
	}
	
	
@GetMapping("/download/{id}")
public ResponseEntity<byte[]> downloadPdf(@PathVariable Long id) {
	    Document file = ds.getPdfById(id);
	    

//	    Map<String, Object> response = new HashMap<>();
//	    response.put("fileName", file.getName());
//	    response.put("contentType", file.getContentType());
//	    response.put("data", Base64.getEncoder().encodeToString(file.getData()));
//
//	    return ResponseEntity.ok(response);
	
	    
	    
	    
    return ResponseEntity.ok()
	            .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + file.getName() + "\"")
	            .contentType(MediaType.APPLICATION_PDF)
	            .body(file.getData()); 
}


	


@PostMapping("/deletePdf/{id}")
public ResponseEntity<String>deletePdf(@PathVariable Long id)
{
	return ResponseEntity.ok(ds.deletePdf(id));
}
	

	
}
