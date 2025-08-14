import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../Style/AwardsandScholarship.css'; // Make sure to create & link this CSS

function AwardsandScholarship() {
  const scholarships = [
    { title: 'Merit-Based Scholarship', description: 'Awarded to students who have consistently performed at the top of their class across semesters.' },
    { title: 'Need-Based Financial Aid', description: 'Offered to students from economically disadvantaged backgrounds based on income criteria.' },
    { title: 'Sports Scholarship', description: 'Provided to students excelling in district, state, or national level sports competitions.' },
    { title: 'Cultural Achievement Award', description: 'Awarded for excellence in cultural fields like music, dance, and drama.' },
    { title: 'Research Excellence Grant', description: 'Given to students who publish papers or contribute to significant research projects.' },
  ];

  const awardWinners = [
    { name: 'Riya Mehta', award: 'Best Academic Performer - 2024' },
    { name: 'Arjun Sharma', award: 'National Level Sports Scholarship - 2023' },
    { name: 'Sana Iqbal', award: 'Cultural Talent Award - 2023' },
    { name: 'Mohit Rawal', award: 'Research Fellowship Award - 2022' }
  ];

  return (
    <div className="awards-section py-5 bg-light animate__animated animate__fadeIn ">
      <Container>
        <h1 className="text-center mb-5 display-5 fw-bold text-primary soft-glow">🎓 Awards & Scholarships</h1>
        <Row className="g-4 justify-content-center">

  {/* About + Scholarships */}
  <Col lg={5} md={6} sm={12}>
    <Card className="p-4 shadow-lg border-0 rounded-4 h-100 hover-effect">
      <Card.Body>
        <Card.Title className="fw-bold text-info text-center">About the Cell</Card.Title>
        <Card.Text>
          The Awards and Scholarship Cell at Rewar College is dedicated to encouraging and recognizing student excellence in academics, research, sports, and extracurricular activities. The cell facilitates applications, organizes ceremonies, and ensures transparent disbursement of aid.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>

  <Col lg={5} md={6} sm={12}>
    <Card className="p-4 shadow-lg border-0 rounded-4 h-100 hover-effect">
      <Card.Body>
        <Card.Title className="fw-bold text-info text-center">Types of Scholarships</Card.Title>
        <ul className="ps-3">
          {scholarships.map((s, idx) => (
            <li key={idx}><strong>{s.title}:</strong> {s.description}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  </Col>

  {/* Awardees + Eligibility */}
  <Col lg={5} md={6} sm={12}>
    <Card className="p-4 shadow-lg border-0 rounded-4 h-100 hover-effect">
      <Card.Body>
        <Card.Title className="fw-bold text-info text-center">Recent Awardees</Card.Title>
        <ul className="ps-3">
          {awardWinners.map((winner, idx) => (
            <li key={idx}>🏅 <strong>{winner.name}</strong> - {winner.award}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  </Col>

  <Col lg={5} md={6} sm={12}>
    <Card className="p-4 shadow-lg border-0 rounded-4 h-100 hover-effect">
      <Card.Body>
        <Card.Title className="fw-bold text-info text-center">Eligibility & Application</Card.Title>
        <Card.Text>
          Eligibility varies by scholarship and typically considers academic performance, income, or talent in extracurricular areas. Applications can be submitted online via the student portal during the start of each academic year.
        </Card.Text>
        <ul className="ps-3">
          <li>Mark sheets</li>
          <li>Income certificate (if applicable)</li>
          <li>Letter of recommendation</li>
          <li>Proof of achievements (sports/culture/research)</li>
        </ul>
      </Card.Body>
    </Card>
  </Col>
</Row>

      </Container>
    </div>
  );
}

export default AwardsandScholarship;
