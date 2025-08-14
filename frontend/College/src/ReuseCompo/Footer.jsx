import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaGraduationCap, FaUsers, FaBook, FaCalendarAlt } from 'react-icons/fa';
import '../Style/Footer.css';

function Footer() {
  return (
    <footer className="footer-section modern-footer position-relative" style={{overflow: 'hidden'}}>
      <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(90deg, rgba(15,32,39,0.95) 0%, rgba(44,83,100,0.95) 100%)', zIndex: 0}}></div>
      <Container style={{position: 'relative', zIndex: 1}}>
        <Row className="gy-4 align-items-stretch justify-content-between text-center" style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}>
          {/* College Info */}
          <Col lg={3} md={6} className="mb-4 flex-grow-1 d-flex flex-column align-items-center justify-content-center border-end border-light-subtle">
            <div className="footer-brand">
              <h5 className="text-warning mb-2" style={{position:"relative",bottom:"2rem"}}>About Us</h5>
              <p style={{position:"relative",bottom:"1rem" }}>Empowering the college with various emphasis and metamorphic </p>
              <div className="footer-stats d-flex flex-row flex-wrap justify-content-center gap-3">
                <div className="stat-item">
                  <span className="stat-number">5000+</span>
                  <span className="stat-label">Students</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">150+</span>
                  <span className="stat-label">faculties</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">25+</span>
                  <span className="stat-label">Programs</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">150+</span>
                  <span className="stat-label">Faculty</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">25+</span>
                  <span className="stat-label">Programs</span>
                </div>
              </div>
            </div>
          </Col>
          {/* Quick Links */}
          <Col lg={2} md={6} className="mb-4 flex-grow-1 d-flex flex-column align-items-center justify-content-center border-end border-light-subtle">
            <h5 className="text-warning mb-3" style={{position:"relative",top:"0rem"}}>Quick Links</h5>
            <ul className="footer-links p-0" style={{listStyle: 'none' ,marginTop:"9px"}}>
              <li  className="contact-item justify-content-center " style={{position:"relative",width:"10rem"}}><a href="/aboutcollege"><span>About Us</span></a></li>
              <li  className="contact-item justify-content-center " style={{position:"relative",top:"7px"}}><a href="/admission123"  style={{position:"relative",left:"5px"}}><span>Admissions</span></a></li>
              <li  className="contact-item justify-content-center " style={{position:"relative",top:"17px"}}><a href="/courses" style={{position:"relative",right:"7px"}}><span>Courses</span></a></li>
              <li className="contact-item justify-content-center " style={{position:"relative",top:"25px"}}><a href="/contact" style={{position:"relative",right:"7px"}}><span>Contact</span></a></li>
            </ul>
          </Col>
          {/* Contact Info */}
          <Col lg={4} md={6} className="mb-4 flex-grow-1 d-flex flex-column align-items-center justify-content-center border-end border-light-subtle">
            <h5 className="text-warning mb-3">Contact Info</h5>
            <div className="contact-info w-100 align-items-center">
              <div className="contact-item justify-content-center w-100"><FaMapMarkerAlt className="contact-icon me-2" /><span>Riwar College

Rangthylliang

P.O.Pynursla

District: East Khasi Hills

Meghalaya

Pin Code: 793110</span></div>
              <div className="contact-item justify-content-center w-100"><FaEnvelope className="contact-icon me-2" /><span>riwar.college1@gmail.com</span></div>
              <div className="contact-item justify-content-center w-100"><FaPhoneAlt className="contact-icon me-2" /><span>9863303894</span></div>
              <div className="contact-item justify-content-center w-100"><FaCalendarAlt className="contact-icon me-2" /><span>Mon-Sat: 9:00 AM - 7:00 PM</span></div>
            </div>
          </Col>
          {/* Social Media */}
          <Col lg={3} md={6} className="mb-4 flex-grow-1 d-flex flex-column align-items-center justify-content-center">
              <h5 className="text-warning mb-2" style={{letterSpacing: '0.5px', position:"relative", left:"40px" ,bottom:"1.3rem"}}>Connect With Us</h5>
            <div style={{background: 'rgba(255,255,255,0.06)', borderRadius: '15px', boxShadow: '0 2px 12px rgba(0,0,0,0.10)', width: '200%', maxWidth: 350, display: 'flex', flexDirection: 'column', alignItems: 'center',padding:"3rem", position:"relative",left:"3rem", height:"17rem"}}>
              <div className="mb-3" style={{color: '#fff', fontSize: '1rem', opacity: 0.85}}>Follow us for updates, events, and more!</div>
              <div className="social-icons gap-4 justify-content-center" style={{fontSize: '1.7rem', marginTop: '0.5rem'}}>
                <a href="#" aria-label="Facebook" className="social-icon facebook mx-2 glow-hover"><FaFacebookF /></a>
                <a href="#" aria-label="Instagram" className="social-icon instagram mx-2 glow-hover"><FaInstagram /></a>
                <a href="#" aria-label="Twitter" className="social-icon twitter mx-2 glow-hover"><FaTwitter /></a>
                <a href="#" aria-label="LinkedIn" className="social-icon linkedin mx-2 glow-hover"><FaLinkedin /></a>
              </div>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom mt-4">
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <p className="footer-copyright mb-0">
                © {new Date().getFullYear()} Rewar College. All rights reserved.
              </p>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <div className="footer-bottom-links">
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
                <a href="/sitemap">Sitemap</a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
