import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import '../Style/StudentsUnion.css';

function StudentsUnion() {
  const members = [
    { name: 'Student Representative', position: 'President', department: 'Final Year B.A.', achievements: 'Elected student leader from Arts stream' },
    { name: 'Student Representative', position: 'Vice President', department: 'Third Year B.A.', achievements: 'Active in departmental activities' },
    { name: 'Student Representative', position: 'General Secretary', department: 'Second Year B.A.', achievements: 'Communication and coordination skills' },
    { name: 'Student Representative', position: 'Cultural Secretary', department: 'Final Year B.A.', achievements: 'Organizes College Week events' },
    { name: 'Student Representative', position: 'Sports Secretary', department: 'Third Year B.A.', achievements: 'Athletic leadership and coordination' },
    { name: 'Student Representative', position: 'Treasurer', department: 'Second Year B.A.', achievements: 'Financial management and planning' }
  ];

  const responsibilities = [
    { responsibility: 'Represent student interests in college council meetings', type: 'Representation', priority: 'High' },
    { responsibility: 'Coordinate College Week and departmental cultural events', type: 'Coordination', priority: 'High' },
    { responsibility: 'Maintain discipline and decorum in campus activities', type: 'Discipline', priority: 'Medium' },
    { responsibility: 'Facilitate communication between administration and students', type: 'Communication', priority: 'High' },
    { responsibility: 'Organize student welfare initiatives and awareness programs', type: 'Welfare', priority: 'Medium' }
  ];

  const activities = [
    { activity: 'College Week 2025 - Cultural and Sports Events', type: 'Cultural', date: 'October 2025', participants: 500 },
    { activity: 'Orientation for New B.A. Students', type: 'Academic', date: 'July 2024', participants: 150 },
    { activity: 'Blood Donation Camp organized with NSS', type: 'Social Service', date: 'March 2024', participants: 150 },
    { activity: 'Anti-Ragging Awareness Campaign', type: 'Awareness', date: 'August 2024', participants: 200 },
    { activity: 'Student Feedback Collection for IQAC', type: 'Feedback', date: 'Ongoing', participants: 300 },
    { activity: 'Inter-departmental Sports Championship', type: 'Sports', date: 'February 2024', participants: 250 }
  ];

  const renderMemberCard = (member, index) => (
    <div key={index} className="member-card d-flex align-items-center p-3 mb-3 rounded-3">
      <div className="member-avatar me-3">
        <span className="avatar-circle">🎓</span>
      </div>
      <div className="member-info flex-grow-1">
        <h6 className="mb-1 fw-bold">{member.name}</h6>
        <Badge bg="primary" className="me-2">{member.position}</Badge>
        <Badge bg="secondary">{member.department}</Badge>
        <p className="mb-0 mt-1 small text-muted">{member.achievements}</p>
      </div>
    </div>
  );

  const renderResponsibilityCard = (responsibility, index) => (
    <div key={index} className="responsibility-card p-3 mb-3 rounded-3">
      <div className="d-flex justify-content-between align-items-start mb-2">
        <Badge bg="success">{responsibility.type}</Badge>
        <Badge bg={responsibility.priority === 'High' ? 'danger' : 'warning'} text="dark">{responsibility.priority}</Badge>
      </div>
      <h6 className="mb-0">{responsibility.responsibility}</h6>
    </div>
  );

  const renderActivityCard = (activity, index) => (
    <div key={index} className="activity-card p-3 mb-3 rounded-3" style={{backgroundColor:"white"}}>
      <div className="d-flex justify-content-between align-items-start mb-2">
        <Badge bg="info">{activity.type}</Badge>
        <small className="text-muted">{activity.date}</small>
      </div>
      <h6 className="mb-2">{activity.activity}</h6>
      <small className="text-info">👥 {activity.participants} participants</small>
    </div>
  );

  return (
    <div className="students-union-section py-5 bg-gradient-light" style={{marginTop:"5rem"}}>
      <Container>
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary mb-3">
            <span className="title-icon">🎓</span>
            Student Union
          </h1>
          <p className="lead text-muted">Empowering student leadership and fostering campus community</p>
        </div>

        <Row className="g-4 justify-content-center">
          {/* About Student Union */}
          <Col lg={6}>
            <Card className="info-card h-100 border-0 shadow-lg">
              <Card.Header className="bg-primary text-white text-center py-3">
                <h4 className="mb-0 fw-bold">About the Union</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <p className="mb-3" style={{color:"black"}}>The Student Union of Riwar College serves as the voice of the student body. Elected annually, the union works to promote leadership, responsibility, and a sense of community among students while ensuring their concerns are addressed by the administration.</p>
                <div className="d-flex align-items-center">
                  <Badge bg="primary" className="me-2">Leadership</Badge>
                  <Badge bg="primary" className="me-2">Representation</Badge>
                  <Badge bg="primary">Community</Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Election Process */}
          <Col lg={6}>
            <Card className="info-card h-100 border-0 shadow-lg">
              <Card.Header className="bg-primary text-white text-center py-3">
                <h4 className="mb-0 fw-bold">Election Process</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <p className="mb-3" style={{color:"black"}}>The Student Union elections are conducted at the beginning of each academic year following a transparent and democratic process. Nominations undergo a screening process by faculty and student panels, and voting is conducted through a secure electronic ballot system.</p>
                <div className="d-flex align-items-center">
                  <Badge bg="success" className="me-2">Democratic</Badge>
                  <Badge bg="success" className="me-2">Transparent</Badge>
                  <Badge bg="success">Secure</Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Members */}
          <Col lg={6}>
            <Card className="member-card-container h-100 border-0 shadow-lg">
              <Card.Header className="bg-success text-white text-center py-3">
                <h4 className="mb-0 fw-bold">🎓 Union Members</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="member-list">
                  {members.map((member, idx) => renderMemberCard(member, idx))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Responsibilities */}
          <Col lg={6}>
            <Card className="responsibility-card-container h-100 border-0 shadow-lg">
              <Card.Header className="bg-info text-white text-center py-3">
                <h4 className="mb-0 fw-bold">📋 Key Responsibilities</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="responsibility-list">
                  {responsibilities.map((responsibility, idx) => renderResponsibilityCard(responsibility, idx))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Activities */}
          <Col lg={12}>
            <Card className="activity-card-container border-0 shadow-lg">
              <Card.Header className="bg-warning text-dark text-center py-3">
                <h4 className="mb-0 fw-bold">🎯 Recent Activities</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <Row>
                  {activities.map((activity, idx) => (
                    <Col md={6} lg={4} key={idx}>
                      {renderActivityCard(activity, idx)}
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default StudentsUnion;
