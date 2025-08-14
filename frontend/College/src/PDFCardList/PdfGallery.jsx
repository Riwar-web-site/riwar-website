import React, { useEffect, useState } from 'react';

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

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Uploaded PDFs</h2>
      {loading ? (
        <div style={{textAlign:"center", marginTop:"20%"}}>
          <div style={styles.message}>Loading PDFs...</div>

        </div>
      ) : pdfs.length === 0 ? (
        <div style={{textAlign:"center", marginTop:"20%"}}>
          
          <div style={styles.message}>No PDFs available.</div>
        </div>
      ) : (
        <div style={styles.grid}>
          {pdfs.map((pdf) => (
            <div key={pdf.id} style={styles.card}>
              <div style={styles.title} title={pdf.fileName}>
                {pdf.fileName}
              </div>
              <embed
                src={`http://localhost:8080/doc-iqac/download/${pdf.id}`}
                type="application/pdf"
                style={styles.preview}
              />
              <div style={styles.buttonGroup}>
                <button
                  style={buttonStyle('#007bff', '#0056b3')}
                  onClick={() =>
                    window.open(`http://localhost:8080/doc-iqac/download/${pdf.id}`, '_blank')
                  }
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// --- Styles ---
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f7fa',
    minHeight: '100vh',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  },
  message: {
    fontSize: '18px',
    color: '#555',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
  card: {
    background: '#fff',
    borderRadius: '16px',
    padding: '16px',
    width: '280px', // 👈 Fixed smaller width
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
    transition: 'transform 0.2s ease-in-out',
    overflow: 'hidden',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#222',
    marginBottom: '10px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  preview: {
    width: '100%',
    height: '200px',
    border: '1px solid #ddd',
    borderRadius: '8px',
  },
  buttonGroup: {
    marginTop: '12px',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
  },
};

// --- Button styling with hover ---
const buttonStyle = (bgColor, hoverColor) => ({
  padding: '8px 14px',
  backgroundColor: bgColor,
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '14px',
  transition: 'background-color 0.3s ease',
});

export default PdfGallery;
