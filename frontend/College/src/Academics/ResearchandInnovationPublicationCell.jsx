import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../Style/ResearchandInnovationPublicationCell.css';

function ResearchandInnovationPublicationCell() {
  return (
    <div className="research-section py-5 mt-5">
      <Container>
        <h1 className="text-center mb-4 display-4 fw-bold text-animated-gradient flicker-effect">
          🔬 Research & Innovation Cell
        </h1>
        <p className="text-center mb-5 lead text-muted fade-in-delay">
          The Research and Innovation Cell at Rewar College is dedicated to fostering a vibrant culture of scientific inquiry, creativity, and scholarly collaboration.
        </p>

        <Row className="g-4">
          <Col md={6} className="slide-up zoom-in">
            <Card className="research-card animate-hover glass-card">
              <Card.Body>
                <Card.Title>📖 About the Cell</Card.Title>
                <Card.Text>
                  Established to encourage interdisciplinary research and academic excellence, the cell facilitates grants, organizes seminars, and supports innovation-driven projects.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="slide-up zoom-in">
            <Card className="research-card animate-hover glass-card">
              <Card.Body>
                <Card.Title>👨‍🔬 Cell Members</Card.Title>
                <Card.Text>
                  Chaired by the Dean of Research and comprised of senior faculty, the cell includes coordinators from each department to ensure active participation.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="slide-up zoom-in">
            <Card className="research-card animate-hover glass-card">
              <Card.Body>
                <Card.Title>🔬 Minor Research Projects</Card.Title>
                <Card.Text>
                  Recent initiatives include studies in environmental science, AI-based education systems, and rural development strategies under university and state funding.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="slide-up zoom-in">
            <Card className="research-card animate-hover glass-card">
              <Card.Body>
                <Card.Title>🎓 UGC Sponsored Projects</Card.Title>
                <Card.Text>
                  Faculty-led research projects funded by the UGC have included fields such as gender studies, bioengineering, and ICT in education.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="slide-up zoom-in">
            <Card className="research-card animate-hover glass-card">
              <Card.Body>
                <Card.Title>📊 Sponsored Project Stats</Card.Title>
                <Card.Text>
                  Total Projects: 38<br />
                  Funding Agencies: UGC, DST, ICSSR<br />
                  Total Funding: ₹75+ Lakhs
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="slide-up zoom-in">
            <Card className="research-card animate-hover glass-card">
              <Card.Body>
                <Card.Title>🚀 Activities & Workshops</Card.Title>
                <Card.Text>
                  Annual innovation fair, research paper writing workshops, patent filing training, and national-level research conventions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResearchandInnovationPublicationCell;
