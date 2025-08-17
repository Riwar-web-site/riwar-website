import React, { useEffect, useState } from 'react';
import { FaFilePdf, FaDownload, FaEye, FaSpinner, FaFileAlt, FaFolderOpen } from 'react-icons/fa';
import './PdfGalleryTwo.css';

const PdfGalleryTwo = () => {
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/list")
      .then((res) => res.json())
      .then((data) => {
        setPdfs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading PDFs:", error);
        setLoading(false);
      });
  }, []);

  const formatFileName = (fileName) => {
    return fileName.length > 30 ? fileName.substring(0, 30) + '...' : fileName;
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="pdf-gallery-two-container">
      {/* Header Section */}
      <div className="gallery-two-header">
        <div className="header-two-content">
          <FaFileAlt className="header-two-icon" />
          <div className="header-two-text">
            <h2 className="gallery-two-title">College Documents Library</h2>
            <p className="gallery-two-subtitle">Official documents and resources</p>
          </div>
        </div>
        <div className="document-two-count">
          <div className="count-two-number">{pdfs.length}</div>
          <div className="count-two-label">Documents</div>
        </div>
      </div>

      {/* Content Section */}
      {loading ? (
        <div className="loading-two-container">
          <FaSpinner className="loading-two-spinner" />
          <h3 className="loading-two-text">Loading Documents...</h3>
          <p className="loading-two-subtitle">Please wait while we fetch the documents</p>
        </div>
      ) : pdfs.length === 0 ? (
        <div className="empty-two-gallery">
          <FaFolderOpen className="empty-two-icon" />
          <h3 className="empty-two-title">No Documents Found</h3>
          <p className="empty-two-description">
            There are currently no documents available in the library. 
            Documents will appear here once they are uploaded by the administration.
          </p>
        </div>
      ) : (
        <div className="pdf-two-grid">
          {pdfs.map((pdf, index) => (
            <div key={pdf.id} className="pdf-two-card">
              {/* Card Header */}
              <div className="card-two-header">
                <div className="pdf-two-icon-wrapper">
                  <FaFilePdf className="pdf-two-icon" />
                </div>
                <div className="card-two-number">#{index + 1}</div>
              </div>

              {/* Card Content */}
              <div className="card-two-content">
                <h4 className="pdf-two-title" title={pdf.fileName}>
                  {formatFileName(pdf.fileName)}
                </h4>
                
                <div className="pdf-two-meta">
                  <div className="file-two-type">PDF Document</div>
                  <div className="upload-two-date">
                    {formatDate(pdf.uploadDate)}
                  </div>
                </div>

                {/* PDF Preview */}
                <div className="pdf-two-preview">
                  <iframe
                    src={`http://localhost:8080/api/download/${pdf.id}#toolbar=0&navpanes=0&scrollbar=0`}
                    className="pdf-two-iframe"
                    title={`Preview of ${pdf.fileName}`}
                  />
                  <div 
                    className="preview-two-overlay"
                    onClick={() => window.open(`http://localhost:8080/api/download/${pdf.id}`, '_blank')}
                  >
                    <FaEye className="preview-two-icon" />
                    <span>Click to view full document</span>
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="card-two-actions">
                <button
                  className="action-two-button view-two-button"
                  onClick={() => window.open(`http://localhost:8080/api/download/${pdf.id}`, '_blank')}
                  title="View document"
                >
                  <FaEye />
                  <span>View</span>
                </button>
                <a
                  href={`http://localhost:8080/api/download/${pdf.id}`}
                  download={pdf.fileName}
                  className="action-two-button download-two-button"
                  title="Download document"
                >
                  <FaDownload />
                  <span>Download</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PdfGalleryTwo;
