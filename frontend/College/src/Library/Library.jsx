import React from 'react';
import { Container, Nav, Navbar, Row, Col, Card, Image } from 'react-bootstrap';
import '../Style/Library.css';
import  myPhoto from "../assets/Screenshot 2025-06-22 214533.png";
import image1 from '../assets/img1.jpg';
import image2 from '../assets/img2.jpg';

function Library() {
  const libraryStaff = [
    { name: 'Shri. Reward Masynting', role: 'Deputy Librarian', img: image1 },
    { name: 'Library Assistant', role: 'Library Support Staff', img: image2 },
    { name: 'Student Helper', role: 'Student Assistant', img: image1 },
  ];

  const carouselImages = [
    image1,
    image2,
    image1,
    image2,
    image1,
    image2,
    image1,
    image2,
    image1,
    image2,
  ];

  const services = [
    {
      title: 'Book Lending Service',
      description: 'Borrow books and academic resources for study and research purposes.'
    },
    {
      title: 'Reference Section',
      description: 'Access reference books, dictionaries, and encyclopedias for quick consultation.'
    },
    {
      title: 'Reading Room Facilities',
      description: 'Quiet study spaces for individual and group study sessions.'
    },
    {
      title: 'Circulation Service',
      description: 'Efficient book issuing and returning system for all library users.'
    },
    {
      title: 'Academic Resource Support',
      description: 'Specialized collections supporting all seven academic departments.'
    },
    {
      title: 'Research Assistance',
      description: 'Help with finding academic materials and research resources.'
    },
    {
      title: 'Inter-Library Cooperation',
      description: 'Access to resources from other academic libraries when needed.'
    },
    {
      title: 'Student Support Services',
      description: 'Orientation programs and library usage training for new students.'
    }
  ];

  const resources = [
    {
      title: 'English Literature',
      description: 'Comprehensive collection of English literature, linguistics, and language studies.'
    },
    {
      title: 'Khasi Literature & Culture',
      description: 'Extensive collection of Khasi language books, literature, and cultural studies.'
    },
    {
      title: 'Education Resources',
      description: 'Books on pedagogy, educational psychology, and teaching methodologies.'
    },
    {
      title: 'Political Science Collection',
      description: 'Resources on political theory, governance, and public administration.'
    },
    {
      title: 'Sociology Materials',
      description: 'Books on social sciences, community studies, and sociological research.'
    },
    {
      title: 'Philosophy Section',
      description: 'Collections on ethics, logic, Indian and Western philosophical traditions.'
    },
    {
      title: 'Economics Resources',
      description: 'Materials on economic theory, development studies, and policy analysis.'
    },
    {
      title: 'Multi-Disciplinary Collection',
      description: 'Resources supporting MDC, SEC, VAC, and VTC courses across all semesters.'
    }
  ];

  return (
    <div className="library-section bg-light" style={{marginTop:"6rem"}}>
      {/* Horizontal Carousel */}
      <Container className="mb-5 zin">
        <div className="horizontal-carousel">
          <div className="horizontal-scroll">
            {carouselImages.map((src, i) => (
              <img key={i} src={src} alt={`Library ${i}`} className="carousel-image mx-2 shadow rounded" style={{ maxHeight: '350px', height: '350px', width: '450px', objectFit: 'cover' }} />
            ))}
          </div>
        </div>
      </Container>

      {/* About Section */}
      <Container id="about" className="mb-5">
        <h2 className="fw-bold text-center mb-4">About the Library</h2>
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <div style={{background: 'rgba(255,255,255,0.7)', borderRadius: '18px', boxShadow: '0 4px 24px #b0c4d6', padding: '1.5rem'}}>
              <img className="img-fluid rounded shadow alt" src={image1} alt="Library" style={{objectFit:'cover', width:'100%', minHeight:'220px', maxHeight:'320px'}} />
            </div>
          </Col>
          <Col md={6}>
            <div style={{background: 'rgba(255,255,255,0.7)', borderRadius: '18px', boxShadow: '0 4px 24px #b0c4d6', padding: '2rem 1.5rem',height: '50vh'}}>
              <p className="text-muted mb-0" style={{fontSize:'1.1rem', lineHeight:'1.7', marginTop:"2rem"}}>The Riwar College Library serves as the academic heart of the institution, supporting all seven departments with comprehensive collections in Arts subjects. Managed by qualified library professionals, it provides essential resources for undergraduate studies, research, and faculty development.</p>
            </div>
          </Col>
        </Row>

        <Row className="g-4 text-center mb-4">
          <Col md={4}>
            <Card className="p-4 shadow-lg border-0 rounded-4 vision-card" style={{background: 'linear-gradient(135deg, #e0f7fa 60%, #fff 100%)'}}>
              <Card.Body>
                <Card.Title className="fw-bold text-success fs-4 mb-2">🎯 Vision</Card.Title>
                <Card.Text style={{fontSize:'1.08rem'}}>To be a modern academic library supporting excellence in Arts education and research at Riwar College.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4}>
            <Card className="p-4 shadow-lg border-0 rounded-4 goals-card" style={{background: 'linear-gradient(135deg, #fffbe7 60%, #fff 100%)'}}>
              <Card.Body>
                <Card.Title className="fw-bold text-warning fs-4 mb-2">🎯 Mission</Card.Title>
                <Card.Text style={{fontSize:'1.08rem'}}>To provide comprehensive library services and resources supporting the academic curriculum and fostering a culture of reading and research.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="p-4 shadow-lg border-0 rounded-4 goals-card" style={{background: 'linear-gradient(135deg, #fffbe7 60%, #fff 100%)'}}>
              <Card.Body>
                <Card.Title className="fw-bold text-warning fs-4 mb-2">🏆 Goals</Card.Title>
                <Card.Text style={{fontSize:'1.08rem'}}>To continuously expand collections, improve services, and enhance the library experience for all users.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Library Timing */}
        <div className="text-center mb-5">
          <Card className="p-4 shadow-lg border-0 rounded-4 w-100" style={{background: 'rgba(0, 123, 255, 0.08)', border: '1.5px solid #b6d4fe'}}>
            <Card.Body>
              <Card.Title className="fs-4 fw-bold text-primary mb-2">Library Timings</Card.Title>
              <Card.Text className="p-3 mb-0" style={{textAlign:"center", fontSize:'1.1rem', color:'#222'}}>Monday - Saturday: <b>9:00 AM to 5:00 PM</b><br />Sunday: <b>Closed</b><br />During Examinations: <b>Extended Hours</b></Card.Text>
            </Card.Body>
          </Card>
        </div>

        {/* Types of Books */}
        <Row className="g-4 mb-4">
          <Col md={6}>
            <Card className="p-4 shadow-lg border-0 rounded-4">
              <Card.Body>
                <Card.Title className="fw-bold text-center">📗 Types of Books Available</Card.Title>
                <ul className="ps-3">
                  <li>B.A. Course Textbooks (all 7 departments)</li>
                  <li>Reference Books and Dictionaries</li>
                  <li>English and Khasi Literature</li>
                  <li>Academic Journals and Periodicals</li>
                  <li>Research Publications and Thesis</li>
                  <li>General Knowledge and Competitive Exam Books</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="p-4 shadow-lg border-0 rounded-4" style={{height:"100%"}}>
              <Card.Body>
                <Card.Title className="fw-bold text-center">📚 Collection Overview</Card.Title>
                <Card.Text className="text-center mt-4" style={{textAlign:"center"}}>
                  <strong>Departmental Collections:</strong><br />
                  English • Khasi • Education<br />
                  Political Science • Sociology<br />
                  Philosophy • Economics<br /><br />
                  <strong>Special Collections:</strong><br />
                  MDC, SEC, VAC & VTC Resources
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Library Rules */}
        <Card className="p-4 shadow-lg border-0 rounded-4 mb-4">
          <Card.Body>
            <Card.Title className="fw-bold text-center text-danger">📌 Library Rules</Card.Title>
            <ul className="ps-3">
              <li>Maintain complete silence inside the library premises.</li>
              <li>Mobile phones must be kept on silent mode.</li>
              <li>Return books on or before the due date to avoid fines.</li>
              <li>Handle all library materials with care and respect.</li>
              <li>Present your student ID card for book borrowing.</li>
              <li>No food or beverages allowed inside the library.</li>
            </ul>
          </Card.Body>
        </Card>

        {/* Library Staff */}
        <Row className="g-4 mt-5 scroll-animate">
          <Col md={12}>
            <h2 className="text-center fw-bold mb-4">👨‍🏫 Library Staff</h2>
            <Row>
              <Col md={4} className="mb-4 hover-animate">
                <Card className="shadow border-0 rounded-4 text-center p-3 fade-in-up hover-animate faculty-card">
                  <Card.Img variant="top" src={image1} className="rounded-circle mx-auto mt-3" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title>Shri. Reward Masynting</Card.Title>
                    <Card.Text style={{textAlign:"center"}}>Deputy Librarian<br />M.COM & M.Lib</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4 hover-animate">
                <Card className="shadow border-0 rounded-4 text-center p-3 fade-in-up delay-1 hover-animate faculty-card">
                  <Card.Img variant="top" src={image2} className="rounded-circle mx-auto mt-3" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title>Library Assistant</Card.Title>
                    <Card.Text style={{textAlign:"center"}}>Library Support Staff<br />Administrative Support</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4 hover-animate">
                <Card className="shadow border-0 rounded-4 text-center p-3 fade-in-up delay-2 faculty-card">
                  <Card.Img variant="top" src={image1} className="rounded-circle mx-auto mt-3" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title>Student Helper</Card.Title>
                    <Card.Text style={{textAlign:"center"}}>Student Assistant<br />Library Operations</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Services Section */}
      <Container id="services" className="mb-5">
        <h3 className="fw-bold text-center mb-4">📘 Library Services</h3>
        <Row className="g-4">
          {services.map((service, i) => (
            <Col md={4} key={i}>
              <Card className="shadow-lg border-0 rounded-4 hover-scale">
                <Card.Body>
                  <Card.Title className="fw-bold text-center">{service.title}</Card.Title>
                  <Card.Text className="text-muted small text-center">{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Resources Section */}
      <Container id="resources" className="mb-5">
        <h3 className="fw-bold text-center mb-4">📚 Departmental Collections</h3>
        <Row className="g-4">
          {resources.map((resource, i) => (
            <Col md={4} key={i}>
              <Card className="shadow-lg border-0 rounded-4 hover-scale">
                <Card.Body>
                  <Card.Title className="fw-bold text-center">{resource.title}</Card.Title>
                  <Card.Text className="text-muted small text-center">{resource.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Digital Library */}
      <Container id="digital" className="mb-5">
        <h3 className="fw-bold text-center mb-4">🌐 Library Enhancement Initiatives</h3>
        <p className="text-center text-muted">The library continuously works on expanding its collection and improving services. Recent initiatives include book collection drives organized by student clubs and ongoing efforts to enhance digital resources for better academic support.</p>
      </Container>
    </div>
  );
}

export default Library;
