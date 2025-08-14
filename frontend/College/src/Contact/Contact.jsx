import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaGlobe } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Home.css';

function Contact() {
  return (
    <div className="bg-light py-5" style={{marginTop:"5rem"}}>
      <Container>
        <h2 className="text-center mb-5 fw-bold">📞 Contact Rewar College</h2>

        <Row className="g-4 justify-content-center">
          <Col md={6} className="scroll-animate">
            <Card className="shadow-lg border-0 rounded-4 p-4 hover-card">
              <Card.Body>
                <h4 className="fw-bold mb-4 text-primary">College Contact Details</h4>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <FaMapMarkerAlt className="me-2 text-danger" />
                  Riwar College

Rangthylliang

P.O.Pynursla

District: East Khasi Hills

Meghalaya

Pin Code: 793110
                  </li>
                  <li className="mb-3">
                    <FaPhoneAlt className="me-2 text-success" />
                    9863303894
                  </li>
                  <li className="mb-3">
                    <FaEnvelope className="me-2 text-info" />
                   riwar.college1@gmail.com
                  </li>
                  
                  <li className="mb-3">
                    <FaClock className="me-2 text-secondary" />
                    Office Hours: Mon - Fri, 9:00 AM to 5:00 PM
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="scroll-animate">
            <Card className="shadow-lg border-0 rounded-4 p-4 hover-card">
              <Card.Body>
                <h4 className="fw-bold mb-4 text-success">Reach Us</h4>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.776730585315!2d75.78984477538449!3d26.84890247671689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5ef3ae30895%3A0x30d891cc7b7f2d33!2sSample%20College!5e0!3m2!1sen!2sin!4v1719391637555!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="college-map"
                  className="rounded"
                ></iframe>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

     

    </div>
  );
}

export default Contact;
