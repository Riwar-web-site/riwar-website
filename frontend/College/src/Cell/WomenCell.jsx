import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../Style/WomenCell.css';

function EntrepreneurshipDevelopmentCell() {
  const sections = [
    {
      title: 'About Cell',
      description: 'The Women\'s Cell of Rewar College is dedicated to promoting a safe, inclusive, and empowering environment for women. It organizes awareness programs, workshops, and activities to support gender equality and women\'s development.',
      items: ['Promote safety and inclusivity', 'Organize workshops', 'Support women\'s rights', 'Conduct awareness programs', 'Provide counseling support']
    },
    {
      title: 'Cell Members',
      description: 'Our Women\'s Cell consists of dedicated faculty and student representatives who actively work towards creating a positive environment for all women on campus.',
      items: ['Dr. Priya Sharma', 'Ms. Anjali Verma', 'Mr. Rohit Patel', 'Ms. Sneha Kapoor', 'Student Representatives']
    },
    {
      title: 'Cell Activities',
      description: 'The Cell conducts a range of impactful activities throughout the year to promote women empowerment and address gender issues effectively.',
      items: ['Self-defense workshops', 'Health and wellness camps', 'Seminars on gender equality', 'Anti-harassment awareness drives', 'Community outreach programs']
    }
  ];

  return (
    <div className="women-cell-section py-5 bg-light-gradient uni">
      <Container>
        <h1 className="text-center mb-5 display-4 fw-bold subtle-glow-text animate-pop">🌟 Women's Cell</h1>

        <Row className="g-5 justify-content-center">
          {sections.map((section, index) => (
            <Col lg={4} md={6} sm={12} key={index} className="fade-in-up">
              <Card className="women-cell-card p-3 rounded-4 border-0 shadow-sm bg-white card-hover-effect">
                <Card.Body>
                  <Card.Title className="text-center fw-bold fs-4 text-dark mb-3 border-bottom pb-2">{section.title}</Card.Title>
                  <Card.Text className="mb-3 text-secondary small-fade-in">{section.description}</Card.Text>
                  <ul className="list-unstyled">
                    {section.items.map((item, i) => (
                      <li key={i} className="list-item-animate mb-2">🔹 {item}</li>
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

export default EntrepreneurshipDevelopmentCell;
