import React, { useEffect, useState } from 'react';
import Choose from './Choose';
import { FaUpload, FaTrash, FaFilePdf, FaFileWord, FaFileExcel, FaFile, FaCloudUploadAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import './UploadTwo.css';

//Uploading on IQAC
function UploadTwo() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("");
  const [deleteMsg, setDeleteMsg] = useState(null);
  const [pdfList, setPdfList] = useState([]);
  const [rePdf, setRePdf] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFiles([...e.target.files]);
    setUploadStatus("");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const files = [...e.dataTransfer.files];
    setSelectedFiles(files);
    setUploadStatus("");
  };

  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    switch (extension) {
      case 'pdf':
        return <FaFilePdf className="file-icon pdf" />;
      case 'doc':
      case 'docx':
        return <FaFileWord className="file-icon word" />;
      case 'xls':
      case 'xlsx':
        return <FaFileExcel className="file-icon excel" />;
      default:
        return <FaFile className="file-icon default" />;
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  function showPdf() {
    useEffect(() => {
      fetch("http://localhost:8080/doc-iqac/list")
        .then((res) => res.json()).then((data) => {
          setPdfList(data);
        })
        .catch((error) => {
          console.error("Error fetching files:", error);
        });
    }, [rePdf])
  }

  showPdf();

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      setUploadStatus("Please select at least one file.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await fetch("http://localhost:8080/doc-iqac/upload", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setUploadStatus("Files uploaded successfully.");
        setSelectedFiles([]); // Clear selected files
        setTimeout(() => setUploadStatus(""), 3000);
      } else {
        setUploadStatus("Upload failed.");
      }
    } catch (error) {
      console.error("Upload error:", error);
      setUploadStatus("Error occurred during upload.");
    } finally {
      setLoading(false);
      setRePdf(!rePdf);
    }
  };

  let handleDelete = async (id) => {
    try {
      let r = await fetch(`http://localhost:8080/doc-iqac/deletePdf/${id}`, {
        method: "POST"
      });
      let text = await r.text();
      setDeleteMsg(text);

      let newArr = pdfList.filter((e) => e.id !== id)
      setPdfList(newArr);
      setTimeout(() => {
        setDeleteMsg(null);
      }, 3000);
    } catch (error) {
      console.error("Delete error:", error);
      setDeleteMsg("Error deleting file.");
    }
  }

  return (
    <div className="upload-container">
      {/* Header Section */}
      <div className="upload-header">
        <h1>IQAC Document Upload</h1>
        <p>Upload important documents to the IQAC portal</p>
      </div>

      {/* Upload Section */}
      <div className="upload-section">
        <div className="upload-card">
          <div 
            className={`file-drop-area ${dragOver ? 'drag-over' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <FaCloudUploadAlt className="upload-icon" />
            <h3>Drag & Drop Files Here</h3>
            <p>or</p>
            <label className="file-input-label">
              <input
                type="file"
                accept=".pdf,.doc,.docx,.xls,.xlsx"
                multiple
                onChange={handleFileChange}
                className="file-input"
              />
              <span>Browse Files</span>
            </label>
            <div className="file-types">
              <small>Supported formats: PDF, DOC, DOCX, XLS, XLSX</small>
            </div>
          </div>

          {/* Selected Files Preview */}
          {selectedFiles.length > 0 && (
            <div className="selected-files">
              <h4>Selected Files ({selectedFiles.length})</h4>
              <div className="files-list">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="file-item">
                    {getFileIcon(file.name)}
                    <div className="file-info">
                      <span className="file-name">{file.name}</span>
                      <span className="file-size">{formatFileSize(file.size)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Upload Button */}
          <button
            onClick={handleUpload}
            disabled={selectedFiles.length === 0 || loading}
            className={`upload-button ${loading ? 'loading' : ''}`}
          >
            {loading ? (
              <>
                <div className="spinner"></div>
                Uploading...
              </>
            ) : (
              <>
                <FaUpload />
                Upload Files
              </>
            )}
          </button>

          {/* Status Messages */}
          {uploadStatus && (
            <div className={`status-message ${uploadStatus.includes('successfully') ? 'success' : 'error'}`}>
              {uploadStatus.includes('successfully') ? <FaCheckCircle /> : <FaExclamationCircle />}
              {uploadStatus}
            </div>
          )}

          {deleteMsg && (
            <div className="status-message success">
              <FaCheckCircle />
              {deleteMsg}
            </div>
          )}
        </div>
      </div>

      {/* Uploaded Files Section */}
      <div className="uploaded-files-section">
        <div className="section-header">
          <h2>Uploaded Documents</h2>
          <span className="file-count">{pdfList.length} files</span>
        </div>

        <div className="documents-grid">
          {pdfList.map((file, i) => (
            <div key={file.id} className="document-card">
              <div className="document-header">
                {getFileIcon(file.fileName)}
                <div className="document-info">
                  <h3>Document #{i + 1}</h3>
                  <p className="document-name">{file.fileName}</p>
                </div>
              </div>
              
              <div className="document-actions">
                <button 
                  className="delete-button"
                  onClick={() => handleDelete(file.id)}
                  title="Delete Document"
                >
                  <FaTrash />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {pdfList.length === 0 && (
          <div className="empty-state">
            <FaFile className="empty-icon" />
            <h3>No documents uploaded yet</h3>
            <p>Upload your first document to get started</p>
          </div>
        )}
      </div>

      <Choose />
    </div>
  );
}

export default UploadTwo;
