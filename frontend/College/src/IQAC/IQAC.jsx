import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import PdfGallery from '../PDFCardList/PdfGallery';
import { FaUniversity, FaAward, FaChartLine, FaUsers, FaFileAlt, FaCheckCircle } from 'react-icons/fa';
import './IQAC.css';

function IQAC() {

    let [list,setList]=useState([]);
    let [pdf,setPdf]=useState([]);

    useEffect(() => {
  const fetchData = async () => {
    try {
      console.log("start fetching data");
      let response = await fetch("http://localhost:8080/doc-iqac/list");
      let listData = await response.json();
      setList(listData);
      console.log(listData);

      console.log("=======================================");
       let response1 = await fetch(`http://localhost:8080/doc-iqac/download/${1}`);
          let blob = await response1.blob();
          let url =URL.createObjectURL(blob);

          return res;
      
      
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  fetchData();
}, []);

  return (
    <div className="iqac-page">
      {/* Hero Section */}
      <div className="iqac-hero">
        <Container>
          <div className="hero-content">
            <div className="hero-icon">
              <FaUniversity />
            </div>
            <h1 className="hero-title">Riwar College IQAC</h1>
            <div className="hero-subtitle">Internal Quality Assurance Cell</div>
            <p className="hero-description">
              Established in 2021 to spearhead quality enhancement and NAAC readiness as per national higher education standards. 
              Building and sustaining a robust framework for academic improvement and institutional accountability.
            </p>
            <div className="establishment-badge">
              <FaAward className="badge-icon" />
              <span>Established 2021</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="iqac-content">
        {/* Key Highlights */}
        <div className="highlights-section">
          <h2 className="section-title">Key Focus Areas</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <FaChartLine className="highlight-icon" />
              <h3>Quality Enhancement</h3>
              <p>Continuous improvement in academic and administrative processes</p>
            </div>
            <div className="highlight-card">
              <FaUsers className="highlight-icon" />
              <h3>Student-Centered Learning</h3>
              <p>Facilitating modern teaching-learning methodologies</p>
            </div>
            <div className="highlight-card">
              <FaAward className="highlight-icon" />
              <h3>NAAC Compliance</h3>
              <p>Ensuring adherence to accreditation standards</p>
            </div>
            <div className="highlight-card">
              <FaFileAlt className="highlight-icon" />
              <h3>Documentation</h3>
              <p>Systematic quality assurance record keeping</p>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="details-section">
          <h2 className="section-title">IQAC Framework</h2>
          <div className="details-container">
            
            <div className="detail-item">
              <div className="detail-header">
                <FaCheckCircle className="detail-icon" />
                <h3>Establishment & Mandate</h3>
              </div>
              <div className="detail-content">
                <ul>
                  <li>Established in 2021 at Riwar College to spearhead quality enhancement and NAAC readiness as per national higher education standards.</li>
                  <li>Purpose: To build and sustain a robust framework for academic improvement and institutional accountability, ensuring ongoing compliance with NAAC (National Assessment and Accreditation Council) requirements.</li>
                </ul>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-header">
                <FaCheckCircle className="detail-icon" />
                <h3>Core Objectives</h3>
              </div>
              <div className="detail-content">
                <ul>
                  <li>Develop quality benchmarks and parameters for various institutional activities (academic, administrative, extra-curricular)</li>
                  <li>Facilitate a learner-centered environment with state-of-the-art teaching-learning processes</li>
                  <li>Ensure equitable academic access for all sections of students, especially from rural/tribal backgrounds</li>
                  <li>Systematically document and promote best practices, innovations, and quality achievements</li>
                </ul>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-header">
                <FaCheckCircle className="detail-icon" />
                <h3>Planning & Implementation</h3>
              </div>
              <div className="detail-content">
                <ul>
                  <li>Act as a catalyst for initiating and coordinating quality improvement activities and reforms</li>
                  <li>Support the design and review of teaching-learning methods, evaluation procedures, and feedback mechanisms</li>
                </ul>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-header">
                <FaCheckCircle className="detail-icon" />
                <h3>Workshops & Seminars</h3>
              </div>
              <div className="detail-content">
                <ul>
                  <li>Organize seminars, workshops, and awareness programs on quality assurance, teaching innovations, and NAAC guidelines</li>
                </ul>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-header">
                <FaCheckCircle className="detail-icon" />
                <h3>Quality Documentation</h3>
              </div>
              <div className="detail-content">
                <ul>
                  <li>Prepare, collect, and maintain documentation relevant to quality assurance, institutional self-study, and NAAC records</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* PDF Gallery Section */}
        <div className="pdf-gallery-section">
          <PdfGallery />
        </div>
      </Container>
    </div>
  )
}

export default IQAC
