package com.example.demo.DTO;

public class PdfFileResponse {
    private Long id;
    private String fileName;
    private String contentType;
    private String base64Data;

    public PdfFileResponse(Long id, String fileName, String contentType, String base64Data) {
        this.id = id;
        this.fileName = fileName;
        this.contentType = contentType;
        this.base64Data = base64Data;
    }

    public PdfFileResponse()
    {
    	
    }
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getContentType() {
		return contentType;
	}

	public void setContentType(String contentType) {
		this.contentType = contentType;
	}

	public String getBase64Data() {
		return base64Data;
	}

	public void setBase64Data(String base64Data) {
		this.base64Data = base64Data;
	}


}
