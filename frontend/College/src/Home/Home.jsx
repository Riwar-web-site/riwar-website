import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import image1 from '../assets/img1.jpg';
import image2 from '../assets/img2.jpg';
import myPhoto from "../assets/Screenshot 2025-06-22 214533.png";
import { Outlet} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Home.css';
// import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Home() {
  const [index, setIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    setFadeIn(true);
    const elements = document.querySelectorAll('.scroll-animate');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className={`home-landing bg-light ${fadeIn ? 'fade-in' : ''}`} style={{marginTop:"6rem"}}>
      <Container className="py-5">
        <Carousel activeIndex={index} onSelect={handleSelect} className="mb-5 shadow rounded overflow-hidden scroll-animate">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image1}
              alt="First slide"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Welcome to Rewar College</h3>
              <p>Empowering education with excellence and opportunity.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image2}
              alt="Second slide"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Explore Learning</h3>
              <p>Engaging knowledge with state-of-the-art infrastructure.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

{/* ////////////////////////////// */}

<div className="boxes">
        <Row className="g-4">
          <Col md={6} className="scroll-animate">
            <Card className="shadow-lg border-0 rounded-4 p-3 fade-in-up h-100">
              <Card.Body>
                <Card.Title className="fw-bold text-primary">📚 About Rewar College</Card.Title>
                <Card.Text>
                  Rewar College is a prestigious institution offering excellence in academics, research, and community development. With modern facilities and dedicated faculty, we aim to foster a vibrant learning environment.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="scroll-animate">
            <Card className="shadow-lg border-0 rounded-4 p-3 fade-in-up delay-1 h-100">
              <Card.Body>
                <Card.Title className="fw-bold text-success">🎓 Principal's Message</Card.Title>
                <Card.Text>
                  “Our vision is to nurture holistic education, critical thinking, and responsible citizenship in every student. Rewar College stands for discipline, commitment, and quality learning.”
— Dr. Sashankutlang Khongthohrem, Principal
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="g-4 mt-4">
          <Col md={4} className="scroll-animate">
            <Card className="shadow-lg border-0 rounded-4 p-3 bg-warning-subtle fade-in-up delay-2 h-100">
              <Card.Body>
                <Card.Title className="fw-bold text-dark">📢 Important Notices</Card.Title>
                <Card.Text>
All latest circulars, holiday announcements, examination schedules, and urgent student alerts are displayed on the college notice board and the college website as per the guidelines in the prospectus.                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="scroll-animate">
            <Card className="shadow-lg border-0 rounded-4 p-3 bg-info-subtle fade-in-up delay-3 h-100">
              <Card.Body>
                <Card.Title className="fw-bold text-dark">💼 Recruitment</Card.Title>
                <Card.Text>
The college periodically announces openings for teaching and administrative positions. Current and upcoming vacancies are notified on the official notice board/website. Applicants must check the latest circulars and follow specified application procedures.                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="scroll-animate">
            <Card className="shadow-lg border-0 rounded-4 p-3 bg-light-subtle fade-in-up delay-4 h-100">
              <Card.Body>
                <Card.Title className="fw-bold text-dark">🎓 Admission 2025</Card.Title>
                <Card.Text>
Admissions for Undergraduate (UG) and Postgraduate (PG) programs are open post-announcement of HSSLC results.

Eligibility: Must have passed HSSLC (Class XII) or equivalent; forms available online/offline after result declaration. Required documents: filled application, three passport-size photographs, and relevant certificates.                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="g-4 mt-4">
          <Col md={6} className="scroll-animate">
            <Card className="shadow-lg border-0 rounded-4 p-4 fade-in-up delay-1 h-100">
              <Card.Body>
                <Card.Title className="fw-bold text-info">🌍 Campus Life</Card.Title>
                <Card.Text>
The college campus is vibrant, with cultural festivals, sports events, clubs, and student-led societies that ensure an engaging educational experience for all students.

Facilities foster inclusiveness, creativity, and participation in co-curricular activities.                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="scroll-animate">
            <Card className="shadow-lg border-0 rounded-4 p-4 fade-in-up delay-2 h-100">
              <Card.Body>
                <Card.Title className="fw-bold text-secondary">🏛️ Infrastructure</Card.Title>
                <Card.Text>
The college is equipped with modern classrooms, smart labs, seminar halls, and campus-wide Wi-Fi.

Library and digital centers provide a resourceful environment for guided and independent study.                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        </div>

        {/* /////////////////////////////////////////////////////////////////////// */}

        <Row className="g-4 mt-5 scroll-animate">
          <Col md={12}>
            <Card className="shadow-lg border-0 rounded-4 p-4 fade-in-up delay-3">
              <Card.Body>
                <Card.Title className="fw-bold text-warning">📊 Placement Cell</Card.Title>
                <Card.Text>
The Placement Cell assists students with career planning, development, internships, and facilitating final job placements.

Alumni are placed in reputed firms and institutions in India and abroad.

Support includes skill training, resume-building workshops, and interview preparation.


                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="g-4 mt-5 scroll-animate">
          <Col md={12}>
            <h2 className="text-center fw-bold mb-4">👨‍🏫 Our Esteemed Faculty</h2>
            <Row>
              <Col md={4} className="mb-4 hover-animate">
                <Card className="shadow border-0 rounded-4 text-center p-3 fade-in-up hover-animate faculty-card">
                  <Card.Img variant="top" src={image1} className="rounded-circle mx-auto mt-3" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title>Dr. Kavita Sharma</Card.Title>
                    <Card.Text style={{textAlign:"center"}}>Department of English</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4 hover-animate">
                <Card className="shadow border-0 rounded-4 text-center p-3 fade-in-up delay-1 hover-animate faculty-card">
                  <Card.Img variant="top" src={image2} className="rounded-circle mx-auto mt-3" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title>Prof. Rajesh Verma</Card.Title>
                    <Card.Text style={{textAlign:"center"}}>Department of Physics</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4 hover-animate">
                <Card className="shadow border-0 rounded-4 text-center p-3 fade-in-up delay-2 faculty-card">
                  <Card.Img variant="top" src={image1} className="rounded-circle mx-auto mt-3" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
                  <Card.Body >
                    <Card.Title>Ms. Anjali Rao</Card.Title>
                    <Card.Text style={{textAlign:"center"}}>Department of Computer</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

































      </Container>
       <Outlet /> 

</div>


    
  );
}

export default Home;
