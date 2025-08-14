  import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../Style/Achievements.css';

const achievementsData = [
  {
    year: 2011,
    list: [
      "🏆 National Award for Best College in Research",
      "🌍 International Collaboration on Environmental Studies",
      "🎓 95% Placement Rate for Graduating Students",
      "📚 Published over 100 research papers in peer-reviewed journals",
      "🤝 Community Service Award for Rural Development Initiatives"
    ]
  },
  {
    year: 2012,
    list: [
      "🏆 Excellence in Teaching Award by State Government",
      "🌐 MoU signed with Global Tech University, Germany",
      "💼 Record-breaking internships for science stream",
      "📊 Innovation in Curriculum Design recognized by NAAC",
      "🏅 Gold Medal at State-Level Sports Meet"
    ]
  },
  {
    year: 2013,
    list: [
      "🏆 National Best Green Campus Award",
      "🎤 Hosted National Education Summit",
      "🔬 Launched Research Incubation Centre",
      "📖 Published three academic journals",
      "🎖 Students won coding hackathons at IIT Bombay"
    ]
  }
];

function Achievements() {
  return (
    <div className="achievements-section py-5 bg-gradient-soft mt-5 ">
      <Container > 
        <h1 className="text-center mb-5 display-4 fw-bold gradient-text-glow animate-title">🎖 College Achievements</h1>

        <Row className="g-4 justify-content-center ">
          {achievementsData.map((data, index) => (
            <Col lg={4} md={6} sm={12} key={index} className="animate-fade-slide animate-card">
              <Card className="achievement-card rounded-4 shadow-lg border-0 glassmorphic-bright">
                <Card.Body className="p-4">
                  <Card.Title className="text-center fw-bold fs-3 text-primary mb-3 border-bottom pb-2">Year {data.year}</Card.Title>
                  <ul className="achievement-list ps-3">
                    {data.list.map((item, i) => (
                      <li key={i} className={`achievement-item animated-item delay-${i}`}>{item}</li>
                    ))}
                  </ul>
                  <div className="text-center mt-4">
                    <a href="#" className="btn btn-outline-primary px-4 py-2 rounded-pill fw-semibold shadow-sm hover-glow">📄 View PDF</a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Achievements;
 