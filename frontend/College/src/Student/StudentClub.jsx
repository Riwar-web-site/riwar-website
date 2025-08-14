import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../Style/StudentClub.css'; // Make sure to create this CSS file

function StudentClub() {
  const clubs = [
    {
      name: 'Cultural Club',
      description: 'Encourages artistic talents by organizing dance, music, and drama performances throughout the year.',
      coordinators: ['Ms. Riya Kapoor', 'Mr. Aman Joshi']
    },
    {
      name: 'Literary Club',
      description: 'Promotes reading, writing, and debate by hosting poetry slams, essay competitions, and book discussions.',
      coordinators: ['Dr. Kavita Mehra', 'Mr. Satyam Sen']
    },
    {
      name: 'Technical Club',
      description: 'Fosters innovation through coding challenges, robotics workshops, and hackathons.',
      coordinators: ['Prof. Deepak Verma', 'Ms. Neha Roy']
    },
    {
      name: 'Eco Club',
      description: 'Focuses on environmental awareness and sustainability initiatives like tree plantations and clean-up drives.',
      coordinators: ['Dr. Ananya Das', 'Mr. Kunal Arora']
    },
    {
      name: 'Photography Club',
      description: 'Provides a platform for budding photographers to learn and showcase their creativity through campus events.',
      coordinators: ['Mr. Harsh Sharma', 'Ms. Tanya Singh']
    },
    {
      name: 'Entrepreneurship Club',
      description: 'Encourages innovation and business acumen through idea pitching, mentorship, and startup expos.',
      coordinators: ['Dr. Manish Khatri', 'Ms. Simran Jain']
    }
  ];

  return (
    <div className="student-club-section py-5 bg-light animate__animated animate__fadeIn " style={{marginTop:"5rem"}}>
      <Container>
        <h1 className="text-center mb-5 display-5 fw-bold text-primary soft-glow">🎯 Student Clubs</h1>

        {/* About */}
        <Row className="mb-4 justify-content-center">
          <Col lg={10}>
            <Card className="p-4 shadow-lg border-0 rounded-4 bg-white hover-effect">
              <Card.Body>
                <Card.Title className="text-center text-info fw-bold">About Student Clubs</Card.Title>
                <Card.Text>
                  At Rewar College, student clubs provide an energetic platform for holistic development. These clubs are managed by students under faculty mentorship and cover a wide spectrum of interests including culture, technology, environment, entrepreneurship, literature, and the arts.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Clubs List */}
        <Row className="g-4">
          {clubs.map((club, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="p-4 shadow-lg border-0 rounded-4 bg-white hover-effect">
                <Card.Body>
                  <Card.Title className="text-center fw-bold text-primary">{club.name}</Card.Title>
                  <Card.Text className="text-muted">{club.description}</Card.Text>
                  <h6 className="mt-3 text-secondary">Coordinators:</h6>
                  <ul className="ps-3 mb-0">
                    {club.coordinators.map((member, idx) => (
                      <li key={idx}>👤 {member}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default StudentClub;
