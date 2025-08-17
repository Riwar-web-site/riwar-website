import React, { useEffect, useState } from 'react';
import Choose from './Choose';
import { FaUpload, FaTrash, FaFilePdf, FaFileWord, FaFileExcel, FaFile, FaCloudUploadAlt, FaCheckCircle, FaExclamationCircle, FaUniversity, FaBookOpen } from 'react-icons/fa';
import './Upload.css';

//Uploading College Documents
function Upload() {
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
      fetch("http://localhost:8080/api/list")
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
      const response = await fetch("http://localhost:8080/api/upload", {
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

  const handleDelete = async (id) => {
    try {
      let r = await fetch(`http://localhost:8080/api/deletePdf/${id}`, {
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
    <div className="college-upload-container">
      {/* Header Section */}
      <div className="college-upload-header">
        <div className="header-content">
          <FaUniversity className="header-icon" />
          <div className="header-text">
            <h1>College Document Upload</h1>
            <p>Upload important college documents and resources</p>
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <div className="college-upload-section">
        <div className="college-upload-card">
          <div className="upload-card-header">
            <FaBookOpen className="card-icon" />
            <h2>Document Upload Portal</h2>
          </div>

          <div 
            className={`college-file-drop-area ${dragOver ? 'drag-over' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <FaCloudUploadAlt className="college-upload-icon" />
            <h3>Drop Your Documents Here</h3>
            <p>or click to browse</p>
            <label className="college-file-input-label">
              <input
                type="file"
                accept=".pdf,.doc,.docx,.xls,.xlsx"
                multiple
                onChange={handleFileChange}
                className="college-file-input"
              />
              <span>Choose Files</span>
            </label>
            <div className="college-file-types">
              <small>Supported: PDF, DOC, DOCX, XLS, XLSX (Max 10MB each)</small>
            </div>
          </div>

          {/* Selected Files Preview */}
          {selectedFiles.length > 0 && (
            <div className="college-selected-files">
              <h4>
                <FaFile className="section-icon" />
                Ready to Upload ({selectedFiles.length} files)
              </h4>
              <div className="college-files-list">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="college-file-item">
                    {getFileIcon(file.name)}
                    <div className="college-file-info">
                      <span className="college-file-name">{file.name}</span>
                      <span className="college-file-size">{formatFileSize(file.size)}</span>
                    </div>
                    <div className="file-status">
                      <span className="status-ready">Ready</span>
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
            className={`college-upload-button ${loading ? 'loading' : ''}`}
          >
            {loading ? (
              <>
                <div className="college-spinner"></div>
                Uploading Documents...
              </>
            ) : (
              <>
                <FaUpload />
                Upload to College Portal
              </>
            )}
          </button>

          {/* Status Messages */}
          {uploadStatus && (
            <div className={`college-status-message ${uploadStatus.includes('successfully') ? 'success' : 'error'}`}>
              {uploadStatus.includes('successfully') ? <FaCheckCircle /> : <FaExclamationCircle />}
              {uploadStatus}
            </div>
          )}

          {deleteMsg && (
            <div className="college-status-message success">
              <FaCheckCircle />
              {deleteMsg}
            </div>
          )}
        </div>
      </div>

      {/* Uploaded Files Section */}
      <div className="college-uploaded-files-section">
        <div className="college-section-header">
          <div className="section-title">
            <FaBookOpen className="section-icon" />
            <h2>College Document Library</h2>
          </div>
          <div className="files-stats">
            <span className="college-file-count">{pdfList.length} Documents</span>
          </div>
        </div>

        <div className="college-documents-grid">
          {pdfList.map((file, i) => (
            <div key={file.id} className="college-document-card">
              <div className="college-document-header">
                <div className="document-icon-wrapper">
                  {getFileIcon(file.fileName)}
                </div>
                <div className="college-document-info">
                  <div className="document-number">Document #{i + 1}</div>
                  <h3 className="college-document-name">{file.fileName}</h3>
                  <div className="document-meta">
                    <span className="upload-date">Recently uploaded</span>
                  </div>
                </div>
              </div>
              
              <div className="college-document-actions">
                <button 
                  className="college-delete-button"
                  onClick={() => handleDelete(file.id)}
                  title="Remove Document"
                >
                  <FaTrash />
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {pdfList.length === 0 && (
          <div className="college-empty-state">
            <FaBookOpen className="college-empty-icon" />
            <h3>No documents in the library yet</h3>
            <p>Upload your first college document to get started</p>
          </div>
        )}
      </div>

      <Choose />
    </div>
  );
}

export default Upload;
