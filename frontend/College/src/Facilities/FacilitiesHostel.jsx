import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../Style/FacilitiesHostel.css'; // Ensure this CSS file exists and is linked

export default function FacilitiesHostel() {
  const facilities = [
    'Spacious and ventilated rooms (single/double/triple occupancy)',
    '24/7 security with CCTV surveillance',
    'Nutritious vegetarian and non-vegetarian meals in hygienic mess',
    'Wi-Fi and LAN internet connectivity in rooms and common areas',
    'Common study room and reading zone',
    'TV lounge and indoor games (carrom, chess, etc.)',
    'Laundry service and ironing facility',
    'Clean washrooms with regular housekeeping',
    'Water purifiers and hot water supply',
    'Emergency medical assistance and first aid center',
  ];

  const support = [
    'Dedicated hostel warden and caretakers for student safety',
    'Separate hostels for boys and girls with secure premises',
    'Visitor entry system with time-restricted access',
    'Power backup system for uninterrupted supply',
    'Night-time security patrols and biometric entry (optional)',
  ];

  return (
    <div className="hostel-section py-5 bg-light animate__animated animate__fadeIn uni">
      <Container>
        <h1 className="text-center mb-5 display-5 fw-bold text-success soft-glow">🏡 Hostel Facilities</h1>

        {/* About Hostel */}
        <Row className="justify-content-center mb-4">
          <Col md={10}>
            <Card className="p-4 shadow-lg border-0 rounded-4 bg-white hover-effect">
              <Card.Body>
                <Card.Title className="text-success fw-bold text-center">About the Hostel</Card.Title>
                <Card.Text>
                  The hostels at Rewar College are designed to provide a safe, comfortable, and inclusive environment where students can thrive academically and socially. Equipped with modern infrastructure and attentive support staff, the hostels ensure that residents feel at home throughout their stay on campus.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Facilities Offered */}
        <Row className="mb-4 justify-content-center">
          <Col md={6}>
            <Card className="p-4 shadow border-0 rounded-4 bg-white hover-effect">
              <Card.Body>
                <Card.Title className="text-success fw-bold text-center">Facilities Offered</Card.Title>
                <ul className="ps-3">
                  {facilities.map((item, i) => (
                    <li key={i} className="hover-effect">🛏️ {item}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Support Services */}
          <Col md={6}>
            <Card className="p-4 shadow border-0 rounded-4 bg-white hover-effect">
              <Card.Body>
                <Card.Title className="text-success fw-bold text-center">Support & Safety Services</Card.Title>
                <ul className="ps-3">
                  {support.map((item, i) => (
                    <li key={i} className="hover-effect">🛡️ {item}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
