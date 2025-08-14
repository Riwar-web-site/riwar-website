import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Badge } from 'react-bootstrap';
import '../Style/Journals.css';

function Reports() {
  const annualReports = [
    {
      title: 'Riwar College Annual Report 2024-25',
      year: 2025,
      type: 'Annual Report',
      description: 'Comprehensive overview of academic achievements across all 7 departments (English, Khasi, Education, Political Science, Sociology, Philosophy, Economics), student performance, IQAC initiatives, faculty development, and institutional growth for the academic year 2024-25.',
      status: 'Published',
      fileSize: '14.8 MB',
      pages: 165,
      highlights: [
        '7 Active Academic Departments with 30+ qualified faculty members',
        'IQAC established in 2021 for quality assurance and NAAC preparation',
        'College Week 2025 successfully conducted (October 13-18, 2025)',
        'Provisional affiliation with NEHU maintained and strengthened',
        'Comprehensive Four-Year Undergraduate Programme (FYUP) aligned with NEP 2020',
        '10+ Vocational Training Courses implemented (Bee-Keeping, Desktop Publishing, etc.)',
        'Active NSS and NCC units contributing to community development',
        'Enhanced library services under Deputy Librarian Shri. Reward Masynting'
      ]
    },
    {
      title: 'Riwar College Annual Report 2023-24',
      year: 2024,
      type: 'Annual Report',
      description: 'Detailed analysis of academic performance, new faculty appointments, vocational training programs implementation, student achievements, infrastructure development, and community outreach activities during 2023-24.',
      status: 'Published',
      fileSize: '13.2 MB',
      pages: 148,
      highlights: [
        'Major faculty recruitment drive - 7 new permanent appointments in October 2022',
        'Multi-Disciplinary Courses (MDC) and Skill Enhancement Courses (SEC) successfully implemented',
        'College Foundation Day celebration marking 15 years of service (June 29, 2024)',
        'Value Added Courses (VAC) and Ability Enhancement Courses (AEC) introduced',
        'Strong Student Union promoting democratic participation and leadership',
        'Enhanced sports facilities and cultural activities during College Week',
        'Active community engagement through Seng Khasi RiwarMihngi network',
        'Anti-Ragging Committee ensuring safe campus environment'
      ]
    },
    {
      title: 'Riwar College Annual Report 2022-23',
      year: 2023,
      type: 'Annual Report',
      description: 'Comprehensive report covering leadership transition with new Principal Dr. Sashankutlang Khongthohrem, academic excellence initiatives, infrastructure projects, community outreach through NSS/NCC, and strategic development plans.',
      status: 'Published',
      fileSize: '11.9 MB',
      pages: 134,
      highlights: [
        'New Principal Dr. Sashankutlang Khongthohrem appointed (June 6, 2022)',
        'IQAC (Internal Quality Assurance Cell) established for institutional quality',
        'Book Club and literary activities promoting reading culture',
        'Comprehensive academic calendar with 49 scheduled events',
        'Governing Body restructured for 2024-2026 term',
        'S.K. RiwarMihngi Education Society oversight strengthened',
        'Departmental activities enhanced across all 7 disciplines',
        'Alumni engagement and graduation ceremonies conducted'
      ]
    }
  ];

  const academicReports = [
    {
      title: 'IQAC Annual Quality Assurance Report 2024-25',
      year: 2025,
      type: 'Quality Report',
      description: 'Internal Quality Assurance Cell comprehensive report covering academic audit, quality benchmarks establishment, best practices documentation, stakeholder feedback analysis, and systematic NAAC preparation activities.',
      status: 'Published',
      fileSize: '6.8 MB',
      pages: 102,
      highlights: [
        'Academic quality assessment across all 7 departments completed',
        'Faculty performance evaluation and development programs conducted',
        'Student feedback analysis and curriculum improvement initiatives implemented',
        'Best practices documentation for NAAC accreditation preparation',
        'Quality benchmarks establishment for institutional excellence',
        'Annual self-assessment and improvement action plans formulated',
        'Stakeholder satisfaction surveys conducted and analyzed',
        'Academic calendar implementation and monitoring completed'
      ]
    },
    {
      title: 'Academic Performance Report 2023-24',
      year: 2024,
      type: 'Academic Report',
      description: 'Detailed academic performance analysis covering examination results, student progression, faculty research activities, curriculum implementation, and departmental achievements across all programs.',
      status: 'Published',
      fileSize: '5.4 MB',
      pages: 89,
      highlights: [
        'Comprehensive B.A. (FYUP) curriculum successfully implemented',
        'Major and Minor subject combinations optimized',
        'Vocational Training Courses (VTC) showing excellent student engagement',
        'Multi-Disciplinary Courses (MDC) enhancing holistic education',
        'Skill Enhancement Courses (SEC) improving employability',
        'Value Added Courses (VAC) promoting life skills development',
        'Internship programs established for 5th semester students',
        'Project-based learning implemented for 8th semester'
      ]
    },
    {
      title: 'Faculty Development Report 2023-24',
      year: 2024,
      type: 'Faculty Report',
      description: 'Comprehensive faculty development activities report including professional development programs, research initiatives, training workshops, and capacity building measures undertaken by teaching staff.',
      status: 'Published',
      fileSize: '4.2 MB',
      pages: 67,
      highlights: [
        '30+ permanent faculty members across 7 departments',
        'NET qualified faculty members contributing to research excellence',
        'M.Phil and Ph.D qualified staff enhancing academic quality',
        'Continuous professional development programs conducted',
        'Inter-departmental collaboration initiatives implemented',
        'Faculty research publications and presentations documented',
        'Teaching methodology workshops and training sessions',
        'Mentorship programs for new faculty members'
      ]
    }
  ];

  const upcomingReports = [
    'Annual Report 2025-26 - Expected: June 2026',
    'IQAC Annual Quality Assurance Report 2025-26 - Expected: March 2026',
    'Academic Calendar Implementation Report 2025-26 - Expected: July 2026',
    'S.K. RiwarMihngi Education Society Annual Report - Expected: August 2026',
    'Departmental Activity Report 2025-26 - Expected: May 2026',
    'Student Achievement Report 2025-26 - Expected: April 2026'
  ];

  const reportCategories = [
    'Academic Performance Reports',
    'IQAC Quality Assurance Reports',
    'Departmental Annual Reports',
    'Faculty Development Reports',
    'Student Achievement Records',
    'Infrastructure Development Reports',
    'Vocational Training Assessment',
    'Community Outreach (NSS/NCC) Reports',
    'Governing Body Meeting Minutes',
    'NEHU Affiliation Documentation',
    'Curriculum Implementation Reports',
    'College Calendar Activity Reports'
  ];

  const [selectedReport, setSelectedReport] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('annual');

  const handleShowDetails = (report) => {
    setSelectedReport(report);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const renderReportCard = (report, index) => (
    <Col key={index} lg={4} md={6} className="mb-4">
      <Card className="shadow-lg border-0 rounded-4 h-100 hover-effect animate__animated animate__fadeInUp">
        <Card.Body className="d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <Badge bg="primary">{report.type}</Badge>
            <Badge bg={report.status === 'Published' ? 'success' : 'warning'}>
              {report.status}
            </Badge>
          </div>
          <Card.Title className="fw-bold text-primary mb-3">{report.title}</Card.Title>
          <Card.Text className="text-muted flex-grow-1">{report.description}</Card.Text>
          <div className="mt-auto">
            <div className="d-flex justify-content-between text-muted small mb-3">
              <span>📅 {report.year}</span>
              <span>📄 {report.pages} pages</span>
              <span>💾 {report.fileSize}</span>
            </div>
            <Button 
              variant="outline-primary" 
              size="sm" 
              className="w-100"
              onClick={() => handleShowDetails(report)}
            >
              View Details
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );

  return (
    <div className="reports-section py-5 bg-light animate__animated animate__fadeIn" style={{marginTop:"5rem"}}>
      <Container>
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold animate__fadeInDown text-primary">📊 Riwar College Reports</h1>
          <p className="lead text-muted">
            Official institutional reports, academic documentation, and quality assurance records 
            showcasing our educational excellence and organizational transparency
          </p>
          <div className="mt-3">
            <Badge bg="info" className="me-2">Founded: June 29, 2009</Badge>
            <Badge bg="success" className="me-2">NEHU Affiliated</Badge>
            <Badge bg="warning" className="me-2">IQAC Established: 2021</Badge>
            <Badge bg="secondary">7 Academic Departments</Badge>
          </div>
        </div>

        {/* Tab Navigation */}
        <Row className="justify-content-center mb-4">
          <Col md={8}>
            <div className="d-flex justify-content-center flex-wrap">
              <Button 
                variant={activeTab === 'annual' ? 'primary' : 'outline-primary'}
                className="me-3 mb-2"
                onClick={() => setActiveTab('annual')}
              >
                📋 Annual Reports
              </Button>
              <Button 
                variant={activeTab === 'academic' ? 'primary' : 'outline-primary'}
                className="mb-2"
                onClick={() => setActiveTab('academic')}
              >
                🎓 Academic Reports
              </Button>
            </div>
          </Col>
        </Row>

        {/* Annual Reports */}
        {activeTab === 'annual' && (
          <Row className="g-4 animate__animated animate__fadeIn">
            <Col md={12}>
              <h2 className="text-center fw-bold mb-4 text-primary">📋 Annual Institutional Reports</h2>
              <p className="text-center text-muted mb-4">
                Comprehensive yearly reports covering academic achievements, faculty development, 
                student performance, and institutional growth across all departments and activities
              </p>
            </Col>
            {annualReports.map((report, index) => renderReportCard(report, index))}
          </Row>
        )}

        {/* Academic Reports */}
        {activeTab === 'academic' && (
          <Row className="g-4 animate__animated animate__fadeIn">
            <Col md={12}>
              <h2 className="text-center fw-bold mb-4 text-info">🎓 Academic & Quality Reports</h2>
              <p className="text-center text-muted mb-4">
                IQAC reports, academic performance analysis, faculty development documentation, 
                and quality assurance records prepared for institutional excellence and NAAC accreditation
              </p>
            </Col>
            {academicReports.map((report, index) => renderReportCard(report, index))}
          </Row>
        )}

        {/* Modal for Report Details */}
        <Modal show={showModal} onHide={handleClose} centered size="lg" className="animate__animated animate__zoomIn">
          {selectedReport && (
            <Modal.Body className="p-4">
              <Card className="shadow-lg border-0 rounded-4">
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <Card.Title className="fw-bold text-primary">{selectedReport.title}</Card.Title>
                    <Badge bg={selectedReport.status === 'Published' ? 'success' : 'warning'}>
                      {selectedReport.status}
                    </Badge>
                  </div>
                  
                  <Row className="mb-3">
                    <Col md={6}>
                      <Card.Text><strong>Type:</strong> {selectedReport.type}</Card.Text>
                      <Card.Text><strong>Year:</strong> {selectedReport.year}</Card.Text>
                    </Col>
                    <Col md={6}>
                      <Card.Text><strong>Pages:</strong> {selectedReport.pages}</Card.Text>
                      <Card.Text><strong>File Size:</strong> {selectedReport.fileSize}</Card.Text>
                    </Col>
                  </Row>
                  
                  <Card.Text className="mb-3">
                    <strong>Description:</strong> {selectedReport.description}
                  </Card.Text>
                  
                  <div className="mt-3">
                    <h6 className="fw-bold text-primary">📊 Key Highlights:</h6>
                    <ul className="list-unstyled">
                      {selectedReport.highlights.map((highlight, index) => (
                        <li key={index} className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center mt-4">
                    
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                  </div>
                </Card.Body>
              </Card>
            </Modal.Body>
          )}
        </Modal>

        {/* Upcoming Reports */}
        <Row className="mt-5">
          <Col md={12}>
            <Card className="p-4 shadow-lg border-0 rounded-4" style={{background: 'linear-gradient(135deg, #fff3cd 0%, #fff 100%)'}}>
              <Card.Body>
                <Card.Title className="text-center fw-bold text-warning mb-4">
                  📅 Upcoming Reports & Publications
                </Card.Title>
                <Row className="g-3 justify-content-center">
                  {upcomingReports.map((report, index) => (
                    <Col md={6} lg={4} key={index}>
                      <div className="upcoming-report-box p-3 text-center border rounded-3 h-100 bg-white shadow-sm">
                        <div className="mb-2">
                          <span className="fs-3">📋</span>
                        </div>
                        <small className="fw-bold">{report}</small>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Report Categories */}
        <Row className="mt-4">
          <Col md={12}>
            <Card className="p-4 shadow-lg border-0 rounded-4">
              <Card.Body>
                <Card.Title className="text-center fw-bold mb-4" style={{color:"#2c3e50"}}>
                  📂 Available Report Categories
                </Card.Title>
                <Row className="g-3">
                  {reportCategories.map((category, index) => (
                    <Col key={index} md={4} lg={3} className="mb-2">
                      <div className="text-center p-3 border rounded-3 bg-light hover-effect">
                        <small className="fw-semibold text-dark">{category}</small>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        
      </Container>
    </div>
  );
}

export default Reports;
