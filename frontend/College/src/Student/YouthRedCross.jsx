import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../Style/YouthRedCross.css'; // Make sure to create this file

function YouthRedCross() {
  const members = [
    'Dr. Meenakshi Sharma – Faculty Coordinator',
    'Mr. Ritesh Agarwal – Assistant Coordinator',
    'Ms. Aanya Bhatt – Student Leader',
    'Mr. Aman Verma – Volunteer',
    'Ms. Kriti Malhotra – Volunteer',
  ];

  const activities = [
    'Blood donation drive organized in collaboration with local hospitals.',
    'First aid training workshop for students and faculty.',
    'COVID-19 vaccination awareness campaign.',
    'Disaster management and emergency response drill.',
    'Clothing and food donation during flood relief efforts.',
    'World Health Day celebration and awareness seminar.',
  ];

  return (
    <div className="yrc-section py-5 bg-light animate__animated animate__fadeIn uni">
      <Container>
        <h1 className="text-center mb-5 display-5 fw-bold text-danger soft-glow">🩸 Youth Red Cross (YRC)</h1>

        {/* About Section */}
        <Row className="mb-4 justify-content-center">
          <Col lg={10}>
            <Card className="p-4 shadow-lg border-0 rounded-4 bg-white hover-effect">
              <Card.Body>
                <Card.Title className="text-center text-danger fw-bold">About the Indian Red Cross Society (IRCS)</Card.Title>
                <Card.Text>
                  The Indian Red Cross Society (IRCS) is a voluntary humanitarian organization providing relief in times of disasters/emergencies and promoting health & care for vulnerable people and communities. It is part of the world’s largest humanitarian network and supports activities in line with the principles of impartiality, neutrality, and voluntary service. <br /><br />
                  The Youth Red Cross unit in colleges aims to instill in students the spirit of selfless service and empathy. It empowers them with knowledge and skills for humanitarian service, health promotion, and disaster response.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Members */}
        <Row className="mb-4 justify-content-center">
          <Col md={8}>
            <Card className="p-4 shadow-lg border-0 rounded-4 bg-white hover-effect">
              <Card.Body>
                <Card.Title className="text-center text-danger fw-bold">Members</Card.Title>
                <ul className="ps-3">
                  {members.map((member, index) => (
                    <li key={index} className="hover-effect">👤 {member}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Activities */}
        <Row className="justify-content-center">
          <Col md={10}>
            <Card className="p-4 shadow-lg border-0 rounded-4 bg-white hover-effect">
              <Card.Body>
                <Card.Title className="text-center text-danger fw-bold">Activities Reported</Card.Title>
                <ul className="ps-3">
                  {activities.map((activity, index) => (
                    <li key={index} className="hover-effect">📌 {activity}</li>
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

export default YouthRedCross;
