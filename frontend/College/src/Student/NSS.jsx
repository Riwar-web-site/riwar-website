import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../Style/NSS.css'; // Make sure this CSS exists

function NSS() {
  const members = [
    'Dr. Rekha Sharma – NSS Coordinator',
    'Prof. Deepak Rao – Faculty Member',
    'Ms. Simran Kaur – Student Leader',
    'Mr. Aman Verma – Student Volunteer',
    'Ms. Priyanka Joshi – Student Volunteer'
  ];

  const activities = [
    'Blood Donation Camp – March 2024',
    'Clean India Drive – October 2023',
    'Tree Plantation – July 2023',
    'Digital Literacy Workshop – December 2023',
    'Road Safety Awareness Week – Jan 2024'
  ];

  const awards = [
    'State NSS Best Unit Award – 2023',
    'Best Volunteer (Female) – Simran Kaur – 2023',
    'District Social Impact Award – 2022',
    'Clean Campus Campaign Champion – 2021'
  ];

  const archives = [
    'Annual Report 2023 – PDF',
    'Activity Log 2022 – PDF',
    'Volunteer Recognition List – 2021',
    'Tree Plantation Photo Journal – 2020'
  ];

  return (
    <div className="nss-section py-5 bg-light animate__animated animate__fadeIn uni">
      <Container>
        <h1 className="text-center mb-5 display-5 fw-bold text-danger soft-glow">🤝 National Service Scheme (NSS)</h1>

        <Row className="g-4 justify-content-center">

          {/* About NSS */}
          <Col md={6}>
            <Card className="p-4 shadow-lg border-0 rounded-4 bg-white hover-effect">
              <Card.Body>
                <Card.Title className="text-center text-danger fw-bold">About NSS</Card.Title>
                <Card.Text>
                  The NSS unit at Rewar College is a platform for youth development through community service. It empowers students to contribute meaningfully to society while building leadership, empathy, and civic responsibility.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* NSS Members */}
          <Col md={6}>
            <Card className="p-4 shadow-lg border-0 rounded-4 bg-white hover-effect">
              <Card.Body>
                <Card.Title className="text-center text-danger fw-bold">NSS Members</Card.Title>
                <ul className="ps-3">
                  {members.map((name, idx) => (
                    <li key={idx}>👤 {name}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Activities */}
          <Col md={6}>
            <Card className="p-4 shadow-lg border-0 rounded-4 bg-white hover-effect">
              <Card.Body>
                <Card.Title className="text-center text-danger fw-bold">Activities</Card.Title>
                <ul className="ps-3">
                  {activities.map((act, idx) => (
                    <li key={idx}>✅ {act}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Awards */}
          <Col md={6}>
            <Card className="p-4 shadow-lg border-0 rounded-4 bg-white hover-effect">
              <Card.Body>
                <Card.Title className="text-center text-danger fw-bold">Awards</Card.Title>
                <ul className="ps-3">
                  {awards.map((award, idx) => (
                    <li key={idx}>🏅 {award}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Archive */}
          <Col md={10}>
            <Card className="p-4 shadow-lg border-0 rounded-4 bg-white hover-effect">
              <Card.Body>
                <Card.Title className="text-center text-danger fw-bold">📂 Archive</Card.Title>
                <ul className="ps-3">
                  {archives.map((doc, idx) => (
                    <li key={idx}>📄 {doc}</li>
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

export default NSS;
