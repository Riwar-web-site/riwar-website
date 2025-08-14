import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import '../Style/BookClub.css';

function BookClub() {
  const members = [
    { name: 'Smt. Andrena Lyngdoh', role: 'Faculty Coordinator', department: 'English Department (HOD)', achievements: 'M.A, NET qualified, Vice Principal' },
    { name: 'Smt. Ibadarilyne Khongthohrem', role: 'Literary Mentor', department: 'English Department', achievements: 'M.A, B.Ed, M.Ed qualified' },
    { name: 'Student Representative', role: 'Student President', department: 'Final Year B.A. English', achievements: 'Elected representative from English Honours' },
    { name: 'Student Representative', role: 'Event Organizer', department: 'Second Year B.A. English', achievements: 'Active in literary activities' },
    { name: 'Student Representative', role: 'Volunteer', department: 'Third Year B.A. Khasi', achievements: 'Bilingual literary contributor' }
  ];

  const activities = [
    { activity: 'Monthly Book Reading Session – April 2024', type: 'Discussion', date: 'April 2024', participants: 45 },
    { activity: 'Author Meet & Greet – March 2024', type: 'Interaction', date: 'March 2024', participants: 80 },
    { activity: 'Literary Discussion Forum during College Week', type: 'Competition', date: 'October 2024', participants: 60 },
    { activity: 'English & Khasi Poetry Recital Evening', type: 'Performance', date: 'August 2024', participants: 35 },
    { activity: 'Book Collection Drive for Library Enhancement', type: 'Charity', date: 'December 2023', participants: 120 }
  ];

  const campaigns = [
    { campaign: 'Summer Reading Challenge', type: 'Challenge', duration: '3 Months', participants: 150 },
    { campaign: 'Book Review Contest', type: 'Competition', duration: '1 Month', participants: 75 },
    { campaign: 'Inter-College Literary Fest', type: 'Festival', duration: '2 Days', participants: 200 },
    { campaign: 'Read-a-thon for Charity', type: 'Charity', duration: '24 Hours', participants: 100 },
    { campaign: 'World Book Day Celebration', type: 'Celebration', duration: '1 Day', participants: 180 }
  ];

  const renderMemberCard = (member, index) => (
    <div key={index} className="member-card d-flex align-items-center p-3 mb-3 rounded-3">
      <div className="member-avatar me-3">
        <span className="avatar-circle">📚</span>
      </div>
      <div className="member-info flex-grow-1">
        <h6 className="mb-1 fw-bold">{member.name}</h6>
        <Badge bg="primary" className="me-2">{member.role}</Badge>
        <Badge bg="secondary">{member.department}</Badge>
        <p className="mb-0 mt-1 small text-muted">{member.achievements}</p>
      </div>
    </div>
  );

  const renderActivityCard = (activity, index) => (
    <div key={index} className="activity-card p-3 mb-3 rounded-3">
      <div className="d-flex justify-content-between align-items-start mb-2">
        <Badge bg="success">{activity.type}</Badge>
        <small className="text-muted">{activity.date}</small>
      </div>
      <h6 className="mb-2">{activity.activity}</h6>
      <small className="text-info">👥 {activity.participants} participants</small>
    </div>
  );

  const renderCampaignCard = (campaign, index) => (
    <div key={index} className="campaign-card p-3 mb-3 rounded-3">
      <div className="d-flex justify-content-between align-items-start mb-2">
        <Badge bg="warning" text="dark">{campaign.type}</Badge>
        <small className="text-muted">{campaign.duration}</small>
      </div>
      <h6 className="mb-2">{campaign.campaign}</h6>
      <small className="text-info">👥 {campaign.participants} participants</small>
    </div>
  );

  return (
    <div className="bookclub-section py-5 bg-gradient-light" style={{marginTop:"5rem"}}>
      <Container>
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary mb-3">
            <span className="title-icon">📚</span>
            Book Club
          </h1>
          <p className="lead text-muted">Fostering a love for reading, critical thinking, and literary excellence</p>
        </div>

        <Row className="g-4 justify-content-center">
          {/* About Book Club */}
          <Col lg={6}>
            <Card className="info-card h-100 border-0 shadow-lg">
              <Card.Header className="bg-primary text-white text-center py-3">
                <h4 className="mb-0 fw-bold">About the Club</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <p className="mb-3" style={{color:"black"}}>The Book Club at Riwar College is a vibrant community of readers and literature enthusiasts. The club organizes book readings, discussions, author interactions, and literary events to foster a love for reading, critical thinking, and appreciation of both English and Khasi literature among students.</p>
                <div className="d-flex align-items-center">
                  <Badge bg="primary" className="me-2">Reading</Badge>
                  <Badge bg="primary" className="me-2">Discussion</Badge>
                  <Badge bg="primary">Literature</Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Club Objectives */}
          <Col lg={6}>
            <Card className="info-card h-100 border-0 shadow-lg">
              <Card.Header className="bg-primary text-white text-center py-3">
                <h4 className="mb-0 fw-bold">Club Objectives</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <ul className="list-unstyled">
                  <li className="mb-2">📖 Promote reading culture among students</li>
                  <li className="mb-2">💭 Encourage critical thinking and analysis</li>
                  <li className="mb-2">🎭 Organize literary events and performances</li>
                  <li className="mb-2">🤝 Build a community of book lovers</li>
                  <li className="mb-2">🌍 Celebrate both English and Khasi literature</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Members */}
          <Col lg={6}>
            <Card className="member-card-container h-100 border-0 shadow-lg">
              <Card.Header className="bg-success text-white text-center py-3">
                <h4 className="mb-0 fw-bold">📚 Club Members</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="member-list">
                  {members.map((member, idx) => renderMemberCard(member, idx))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Activities */}
          <Col lg={6}>
            <Card className="activity-card-container h-100 border-0 shadow-lg">
              <Card.Header className="bg-info text-white text-center py-3">
                <h4 className="mb-0 fw-bold">📋 Club Activities</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="activity-list">
                  {activities.map((activity, idx) => renderActivityCard(activity, idx))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Campaigns */}
          <Col lg={12}>
            <Card className="campaign-card-container border-0 shadow-lg">
              <Card.Header className="bg-warning text-dark text-center py-3">
                <h4 className="mb-0 fw-bold">🎯 Literary Campaigns</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <Row>
                  {campaigns.map((campaign, idx) => (
                    <Col md={6} lg={4} key={idx}>
                      {renderCampaignCard(campaign, idx)}
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

export default BookClub;
