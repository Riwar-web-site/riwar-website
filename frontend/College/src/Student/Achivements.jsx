import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import '../Style/Achivements.css';

function Achivements() {
  const academicAchievements = [
    { text: 'High pass percentages in B.A. (Honours/General) examinations across all departments', badge: 'Academic Excellence', icon: '📊' },
    { text: 'Faculty members with NET qualifications and advanced degrees (M.Phil, Ph.D)', badge: 'Research', icon: '📚' },
    { text: 'Students successfully qualifying for higher studies and public sector opportunities', badge: 'Competitive', icon: '🎯' },
    { text: 'Implementation of comprehensive skill-based curriculum with VTC, SEC, and VAC courses', badge: 'Curriculum Innovation', icon: '🏆' }
  ];

  const coCurricularAchievements = [
    { text: 'Annual College Week featuring inter-departmental competitions in dance, music, and arts', badge: 'Cultural', icon: '🎤' },
    { text: 'Active National Service Scheme (NSS) with community outreach programs', badge: 'Service', icon: '🎨' },
    { text: 'Regular debate competitions and literary club activities fostering student engagement', badge: 'Literary', icon: '💃' },
    { text: 'Sports tournaments and fitness activities during college events and festivals', badge: 'Sports', icon: '🎭' }
  ];

  const generalAchievements = [
    { text: 'Recognition by Education Department, Government of Meghalaya and DHTE', badge: 'Institution Award', icon: '🏫' },
    { text: 'Provisional Affiliation achieved with North-Eastern Hill University (NEHU), Shillong', badge: 'Affiliation', icon: '🌍' },
    { text: 'Established Internal Quality Assurance Cell (IQAC) for academic excellence and NAAC readiness', badge: 'Quality Assurance', icon: '🧠' },
    { text: 'Successfully expanded from basic college to seven full Arts departments with qualified faculty', badge: 'Infrastructure Growth', icon: '🛠️' }
  ];

  const renderAchievementItem = (item, index) => (
    <div key={index} className="achievement-item d-flex align-items-start mb-3 p-3 rounded-3">
      <div className="achievement-icon me-3">
        <span className="icon-circle">{item.icon}</span>
      </div>
      <div className="achievement-content flex-grow-1">
        <div className="d-flex align-items-center mb-2">
          <Badge bg="primary" className="me-2 achievement-badge">{item.badge}</Badge>
        </div>
        <p className="achievement-text mb-0">{item.text}</p>
      </div>
    </div>
  );

  return (
    <div className="achievements-section py-5 bg-gradient-light" style={{marginTop:"5rem"}}>
      <Container>
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary mb-3">
            <span className="achievement-title-icon">🏅</span>
            Student Achievements
          </h1>
          <p className="lead text-muted">Celebrating excellence in academics, co-curricular activities, and institutional growth</p>
        </div>

        <Row className="g-4 justify-content-center">
          {/* General Achievements */}
          <Col lg={4} md={6}>
            <Card className="achievement-card h-100 border-0 shadow-lg">
              <Card.Header className="bg-primary text-white text-center py-3">
                <h3 className="mb-0 fw-bold">
                  <span className="me-2">🏫</span>
                  College Achievements
                </h3>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="achievement-list">
                  {generalAchievements.map((item, idx) => renderAchievementItem(item, idx))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Academic Achievements */}
          <Col lg={4} md={6}>
            <Card className="achievement-card h-100 border-0 shadow-lg">
              <Card.Header className="bg-success text-white text-center py-3">
                <h3 className="mb-0 fw-bold">
                  <span className="me-2">📖</span>
                  Academic Excellence
                </h3>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="achievement-list">
                  {academicAchievements.map((item, idx) => renderAchievementItem(item, idx))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Co-Curricular Achievements */}
          <Col lg={4} md={6}>
            <Card className="achievement-card h-100 border-0 shadow-lg">
              <Card.Header className="bg-warning text-dark text-center py-3">
                <h3 className="mb-0 fw-bold">
                  <span className="me-2">🎨</span>
                  Co-Curricular Activities
                </h3>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="achievement-list">
                  {coCurricularAchievements.map((item, idx) => renderAchievementItem(item, idx))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

       
      </Container>
    </div>
  );
}

export default Achivements;
