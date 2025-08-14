package com.example.demo.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.Entity.Document;
import com.example.demo.Entity.DocumentIqac;
import com.example.demo.Exception.DataNotException;
import com.example.demo.Repository.DocumentRepository;

@Service
public class DocumentService {

	@Autowired
	private DocumentRepository doc;
	
	public List<Document> uploadDocuments(MultipartFile[] files) throws IOException
	{
		List<Document>savedFiles=new ArrayList<>();
		for(MultipartFile file:files)
		{
			long maxFileSizeInBytes = 10 * 1024 * 1024;
		    if (file.getSize() > maxFileSizeInBytes) {
		        throw new IllegalArgumentException("File too large: " + file.getOriginalFilename());
		    }
		    if (file.getSize() < 1000) {
		        throw new IllegalArgumentException("File too small: " + file.getOriginalFilename());
		    }
			Document d=new Document();
			d.setName(file.getOriginalFilename());
			d.setContentType(file.getContentType());
			d.setData(file.getBytes());
			savedFiles.add(d);
		}
		doc.saveAll(savedFiles);
		return savedFiles;
	}
	

		

	 public List<Document> getAllFiles() {
	        return doc.findAll();
	    }

	 
	 
	 public Document getPdfById(Long id)
	 {
		Optional<Document>op=doc.findById(id);
		if(!op.isPresent())
		{
			throw new DataNotException ("File with id : "+id+ " is not present");
		}
		Document d=op.get();
		return d;
			
	 }
	 
	 
	 
	 
	 public String deletePdf(Long id)
	 {	Document op=doc.findById(id).orElse(null);
	 	if(op==null)
	 	{
	 		return "document with id "+ id +"does not exists";
	 	}
	 	 doc.deleteById(id);
	 	 return "Document deleted Successfully";
	 }
}


