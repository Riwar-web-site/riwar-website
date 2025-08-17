import React, { useEffect, useState } from 'react';
import { FaFilePdf, FaEye, FaDownload, FaSpinner, FaFolder, FaFileAlt } from 'react-icons/fa';
import './PdfGallery.css';

const PdfGallery = () => {
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/doc-iqac/list")
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

  const handleView = (pdfId) => {
    window.open(`http://localhost:8080/doc-iqac/download/${pdfId}`, '_blank');
  };

  const handleDownload = async (pdfId, fileName) => {
    try {
      const response = await fetch(`http://localhost:8080/doc-iqac/download/${pdfId}`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName || `document_${pdfId}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback to opening in new tab
      window.open(`http://localhost:8080/doc-iqac/download/${pdfId}`, '_blank');
    }
  };

  const formatFileSize = (bytes) => {
    if (!bytes) return 'Unknown size';
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const truncateFileName = (fileName, maxLength = 30) => {
    if (fileName.length <= maxLength) return fileName;
    return fileName.substring(0, maxLength) + '...';
  };

  if (loading) {
    return (
      <div className="pdf-gallery-container">
        <div className="gallery-header">
          <FaFileAlt className="header-icon" />
          <h2 className="gallery-title">IQAC Document Library</h2>
        </div>
        <div className="loading-container">
          <FaSpinner className="loading-spinner" />
          <p className="loading-text">Loading documents...</p>
        </div>
      </div>
    );
  }

  if (pdfs.length === 0) {
    return (
      <div className="pdf-gallery-container">
        <div className="gallery-header">
          <FaFileAlt className="header-icon" />
          <h2 className="gallery-title">IQAC Document Library</h2>
        </div>
        <div className="empty-gallery">
          <FaFolder className="empty-icon" />
          <h3 className="empty-title">No Documents Available</h3>
          <p className="empty-description">
            IQAC documents will appear here once they are uploaded to the system.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pdf-gallery-container">
      <div className="gallery-header">
        <div className="header-content">
          <FaFileAlt className="header-icon" />
          <div className="header-text">
            <h2 className="gallery-title">IQAC Document Library</h2>
            <p className="gallery-subtitle">{pdfs.length} documents available for download</p>
          </div>
        </div>
        <div className="document-count">
          <span className="count-number">{pdfs.length}</span>
          <span className="count-label">Documents</span>
        </div>
      </div>

      <div className="pdf-grid">
        {pdfs.map((pdf, index) => (
          <div key={pdf.id} className="pdf-card">
            {/* Card Header with Actions */}
            <div className="card-header">
              <div className="pdf-icon-wrapper">
                <FaFilePdf className="pdf-icon" />
              </div>
              <div className="card-actions">
                <button
                  className="action-btn view-btn"
                  onClick={() => handleView(pdf.id)}
                  title="View Document"
                >
                  <FaEye />
                </button>
                <button
                  className="action-btn download-btn"
                  onClick={() => handleDownload(pdf.id, pdf.fileName)}
                  title="Download Document"
                >
                  <FaDownload />
                </button>
              </div>
            </div>

            {/* PDF Preview */}
            <div className="pdf-preview">
              <iframe
                src={`http://localhost:8080/doc-iqac/download/${pdf.id}#toolbar=0&navpanes=0&scrollbar=0&view=Fit&zoom=page-width&pagemode=none&statusbar=0&messages=0&printscaling=noscale`}
                title={pdf.fileName}
                className="pdf-iframe"
                scrolling="no"
              />
              <div className="preview-overlay">
                <div className="overlay-content">
                  <FaEye className="overlay-icon" />
                  <span className="overlay-text">Click to view</span>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="card-footer">
              <h3 className="pdf-title" title={pdf.fileName}>
                {truncateFileName(pdf.fileName, 25)}
              </h3>
              <div className="pdf-meta">
                <span className="doc-number">#{index + 1}</span>
                <span className="file-type">PDF</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdfGallery;
