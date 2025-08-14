import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import '../Style/AntiRaggingCommittee.css';

function AntiRaggingCommittee() {
  const sections = [
    {
      title: 'About Committee',
      description: 
        "The Anti-Ragging Committee at Riwar College is constituted to ensure a ragging-free campus environment. It promotes awareness about anti-ragging policies, investigates complaints, and takes preventive measures to uphold student safety and dignity.",
      icon: '🛡️'
    },
    {
      title: 'Committee Members',
      items: [
        {
          subtitle: 'Chairperson',
          members: ['Dr. Sashankutlang Khongthohrem (Principal)'],
          color: 'primary'
        },
        {
          subtitle: 'Faculty Representatives',
          members: [
            'Prof. Sanjay Kulkarni', 
            'Prof. Kavita Rao'
          ],
          color: 'success'
        },
        {
          subtitle: 'Student Representatives',
          members: [
            'Rohan Gupta', 
            'Sneha Patil', 
            'Amit Joshi', 
            'Neha Bansal'
          ],
          color: 'info'
        }
      ],
      icon: '👥'
    },
    {
      title: 'Committee Activities',
      description: (
        <>
          <span>The Committee conducts orientation programs, awareness campaigns, surprise checks in hostels, and grievance redressal sessions. It also ensures all students sign an anti-ragging affidavit.</span>
          <ul className="mt-3">
            <li>Orientation programs for new students on anti-ragging rules and reporting mechanisms</li>
            <li>Regular awareness campaigns and distribution of UGC/NEHU guidelines across campus</li>
            <li>Surprise checks in hostels and common areas during session</li>
            <li>Periodic review meetings to monitor campus climate and handle complaints</li>
            <li>Grievance redressal and counseling for affected students</li>
            <li>Ensuring all admitted students and parents sign anti-ragging affidavits</li>
          </ul>
        </>
      ),
      icon: '📋'
    },
    {
      title: 'Anti-Ragging Policies',
      description: 
        "Our college strictly follows UGC guidelines on anti-ragging. All students must sign an anti-ragging affidavit, and any violation is dealt with severe consequences including suspension or expulsion.",
      icon: '📜'
    }
  ];

  return (
    <div className="arc-section py-5 bg-light" style={{marginTop:"5rem"}}>
      <Container>
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary mb-3">
            Anti-Ragging Committee
          </h1>
          <p className="lead text-muted">
            Ensuring a safe and respectful learning environment for all students
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {sections.map((section, index) => (
            <Col key={index} lg={6} md={6} className="mb-4">
              <Card className="arc-card h-100 border-0 shadow-lg rounded-4">
                <Card.Body className="p-4">
                  <div className="text-center mb-4">
                    <div className="icon-circle mb-3">
                      <span className="fs-1">{section.icon}</span>
                    </div>
                    <Card.Title className="fw-bold text-primary fs-4 mb-3">
                      {section.title}
                    </Card.Title>
                  </div>

                  {section.description && (
                    <Card.Text className="text-muted mb-4 text-justify">
                      {section.description}
                    </Card.Text>
                  )}

                  {Array.isArray(section.items) && section.items[0]?.subtitle && (
                    <div className="committee-members">
                      {section.items.map((group, i) => (
                        <div key={i} className="member-group mb-4">
                          <div className="d-flex align-items-center mb-3">
                            <Badge bg={group.color} className="me-2 px-3 py-2">
                              {group.subtitle}
                            </Badge>
                          </div>
                          <div className="member-list">
                            {group.members.map((member, j) => (
                              <div key={j} className="member-item p-2 mb-2 bg-light rounded">
                                <i className="fas fa-user-tie me-2 text-primary"></i>
                                {member}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Additional Information Section */}
        <Row className="mt-5">
          <Col md={12}>
            <Card className="border-0 shadow-lg rounded-4" style={{ background: '#e3f0fc', color: '#222' }}>
              <Card.Body className="p-4 text-center">
                <h3 className="fw-bold mb-3">Report Ragging Incidents</h3>
                <p className="mb-4" style={{ fontSize: '1.1rem', color:"black"}}>
                  If you witness or experience any form of ragging, please report immediately to the committee. 
                  Your identity will be kept confidential, and swift action will be taken.
                </p>
                <div className="row text-center">
                  <div className="col-md-4 mb-3">
                    <div className="contact-item">
                      <h6 className="fw-bold">📧 Email</h6>
                      <small>riwarcollege.iqac@gmail.com</small>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="contact-item">
                      <h6 className="fw-bold">📞 Helpline</h6>
                      <small>+91-97740-77537</small>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="contact-item">
                      <h6 className="fw-bold">🏢 Office</h6>
                      <small>Room 101, Admin Block</small>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AntiRaggingCommittee;
