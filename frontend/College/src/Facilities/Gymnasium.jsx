import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../Style/Gymnasium.css'; // Create this CSS file for styles and animations

function Gymnasium() {
  const galleryImages = [
    'https://source.unsplash.com/400x300/?gym',
    'https://source.unsplash.com/400x300/?fitness',
    'https://source.unsplash.com/400x300/?exercise',
    'https://source.unsplash.com/400x300/?gym-equipment',
    'https://source.unsplash.com/400x300/?workout',
    'https://source.unsplash.com/400x300/?training',
    'https://source.unsplash.com/400x300/?bodybuilding',
    'https://source.unsplash.com/400x300/?weightlifting'
  ];

  return (
    <div className="gymnasium-section py-5 bg-light animate__animated animate__fadeIn">
      <Container>
        <h1 className="text-center mb-5 display-4 fw-bold glow animate__animated animate__fadeInDown">
          🏋️‍♂️ College Gymnasium
        </h1>

        <Row className="g-4 mb-5">
          <Col md={6} className="animate__animated animate__fadeInLeft hover-effect">
            <Card className="p-4 border-0 shadow-lg rounded-4">
              <Card.Body>
                <Card.Title className="fw-bold text-center text-info mb-3">About Our Gym</Card.Title>
                <Card.Text>
                  Our state-of-the-art gymnasium at Rewar College provides students and staff with a complete fitness
                  solution. Equipped with the latest cardio and strength training machines, our gym is open throughout the
                  week, fostering physical wellness and mental health.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="animate__animated animate__fadeInRight hover-effect">
            <Card className="p-4 border-0 shadow-lg rounded-4">
              <Card.Body>
                <Card.Title className="fw-bold text-center text-info mb-3">Facilities & Equipment</Card.Title>
                <ul>
                  <li>Treadmills, ellipticals, and stationary bikes</li>
                  <li>Free weights and resistance machines</li>
                  <li>Dedicated yoga & meditation corner</li>
                  <li>Stretching and warm-up zone</li>
                  <li>Certified trainers during peak hours</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="g-4 mb-5">
          <Col xs={12} className="animate__animated animate__fadeInUp">
            <h2 className="text-center mb-4 fw-bold text-secondary">🏞️ Gallery</h2>
            <Row className="g-3 justify-content-center">
              {galleryImages.map((src, i) => (
                <Col xs={6} md={3} key={i} className="animate__animated animate__zoomIn">
                  <img
                    src={src}
                    alt={`Gym ${i + 1}`}
                    className="img-fluid rounded shadow-sm gallery-img hover-zoom"
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={12} className="animate__animated animate__zoomIn">
            <Card className="p-4 border-0 shadow-lg rounded-4 hover-effect">
              <Card.Body>
                <Card.Title className="fw-bold text-center text-info mb-3">💪 Fitness Tips</Card.Title>
                <ul>
                  <li>Warm up before every session to avoid injury</li>
                  <li>Stay hydrated throughout your workout</li>
                  <li>Mix cardio with strength training for best results</li>
                  <li>Use correct posture while lifting weights</li>
                  <li>Consult trainers for personalized routines</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Gymnasium;
