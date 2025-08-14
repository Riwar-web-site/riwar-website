import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../Style/GenderEquityMonitoringCell.css';

function GenderEquityMonitoringCell() {
  const sections = [
    {
      title: 'About Cell',
      description:
        'The Gender Equity Monitoring Cell at Rewar College works to ensure equal opportunities and a safe, inclusive environment for all students and staff. The cell monitors gender-related issues and promotes gender sensitivity through workshops, talks, and awareness campaigns.'
    },
    {
      title: 'Cell Members',
      items: [
        {
          subtitle: 'Faculty Coordinators',
          members: ['Dr. Poonam Sharma', 'Prof. Vikram Chauhan']
        },
        {
          subtitle: 'Student Representatives',
          members: ['Riya Mehta', 'Arjun Saini', 'Fatima Sheikh', 'Rahul Nair']
        }
      ]
    },
    {
      title: 'Cell Activities',
      description:
        'The Cell organizes gender sensitization programs, self-defense workshops, seminars on legal rights, and awareness drives to promote equity and respect across campus.'
    }
  ];

  return (
    <div className="gender-cell-section py-5 bg-light uni">
      <Container>
        <h1 className="text-center mb-5 display-5 fw-bold soft-glow-title">
          ⚖️ Gender Equity Monitoring Cell
        </h1>

        <Row className="gy-4 gx-4 justify-content-center">
          {sections.map((section, index) => (
            <Col lg={6} md={12} key={index} className="fade-in-up">
              <Card className="gender-cell-card p-4 border-0 shadow rounded-4 bg-white animate-scale-in card-hover">
                <Card.Body>
                  <Card.Title className="text-center fs-4 fw-bold text-primary border-bottom pb-2 mb-3">
                    {section.title}
                  </Card.Title>

                  {section.description && (
                    <Card.Text className="text-muted">
                      {section.description}
                    </Card.Text>
                  )}

                  {Array.isArray(section.items) && section.items[0]?.subtitle && (
                    <>
                      {section.items.map((group, i) => (
                        <div key={i} className="mb-3">
                          <h6 className="fw-semibold text-secondary mb-2">
                            {group.subtitle}
                          </h6>
                          <ul className="list-unstyled">
                            {group.members.map((member, j) => (
                              <li key={j} className="list-item-animate">
                                👤 {member}
                              </li>
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

export default GenderEquityMonitoringCell;
