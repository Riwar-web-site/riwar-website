import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../Style/EntrepreneurshipDevelopmentCell.css';

function ICTDevelopmentCell() {
  const sections = [
    {
      title: 'About Cell',
      description:
        'The Entrepreneurship Development Cell (EDC) at Rewar College is committed to fostering a culture of innovation and entrepreneurship among students. It provides mentorship, training, and resources to support student ventures.'
    },
    {
      title: 'Cell Members',
      items: [
        {
          subtitle: 'Founder Members',
          members: ['Mr. Rajesh Verma', 'Ms. Neha Sharma', 'Dr. Kiran Rao', 'Mr. Ankit Mehra']
        },
        {
          subtitle: 'Faculty Coordinators',
          members: ['Dr. Nandini Iyer', 'Prof. Arvind Patel']
        },
        {
          subtitle: 'Student Volunteers',
          members: ['Sahil Khan', 'Priya Kumari', 'Aarav Singh', 'Divya Joshi']
        }
      ]
    },
    {
      title: 'Cell Activity Report',
      description:
        'The Cell organizes entrepreneurship awareness drives, startup bootcamps, mentorship sessions, and connects students with industry experts.'
    },
    {
      title: 'Publications / Others',
      description:
        'Several research papers and project reports on startups, entrepreneurship case studies, and innovation initiatives have been published by the Cell.'
    },
    {
      title: 'Courses',
      items: ['Entrepreneurship 101', 'Startup Management', 'Business Communication', 'Venture Capital Basics', 'Marketing for Startups']
    },
    
  ];

 

  return (
    <div className="edc-section py-5 bg-light uni   ">
      <Container>
        <h1 className="text-center mb-5 display-4 fw-bold animate-glow">🚀 ICT  Development Cell</h1>

        <Row className="gy-4 gx-4 justify-content-center">
          {sections.map((section, index) => (
            <Col lg={6} md={12} key={index} className="fade-in-up">
              <Card className="edc-card p-4 border-0 shadow rounded-4 bg-white animate-scale-in h-100 card-hover">
                <Card.Body>
                  <Card.Title className="text-center fs-4 fw-bold text-primary border-bottom pb-2 mb-3">
                    {section.title}
                  </Card.Title>

                  {section.description && (
                    <Card.Text className="text-muted small-fade-in">
                      {section.description}
                    </Card.Text>
                  )}

                  {section.items && Array.isArray(section.items) && typeof section.items[0] === 'string' && (
                    <ul className="list-unstyled">
                      {section.items.map((item, i) => (
                        <li key={i} className="list-item-animate mb-2">🔹 {item}</li>
                      ))}
                    </ul>
                  )}

                  {Array.isArray(section.items) && section.items[0]?.subtitle && (
                    <>
                      {section.items.map((group, i) => (
                        <div key={i} className="mb-3">
                          <h6 className="fw-semibold text-secondary mb-2">{group.subtitle}</h6>
                          <ul className="list-unstyled">
                            {group.members.map((member, j) => (
                              <li key={j} className="list-item-animate">👤 {member}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </>
                  )}

                  
                  
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ICTDevelopmentCell;
