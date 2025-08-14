import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../Style/GrievanceCell.css';

function ArtandCultureCommittee() {
  const meetingMinutes = {
    2024: [
      'Reviewed and addressed 12 student complaints related to hostel facilities.',
      'Decided to install additional CCTV cameras near campus entrances.',
      'Appointed new student representatives for better grievance redressal.'
    ],
    2023: [
      'Implemented online grievance submission system for transparency.',
      'Organized awareness workshop for students about redressal mechanisms.',
      'Resolved 95% of registered complaints within 10 working days.'
    ],
    2022: [
      'Conducted departmental feedback survey across all semesters.',
      'Reviewed complaint trends and suggested proactive improvements.',
      'Created guidelines for anonymous reporting.'
    ]
  };

  return (
    <div className="grievance-section py-5 bg-light animate__animated animate__fadeIn uni">
      <Container>
        <h1 className="text-center mb-5 display-5 fw-bold text-primary soft-glow">🌟 Art & Culture Committee Cell</h1>
        <Row className="g-4 justify-content-center">

          {/* About Cell */}
          <Col md={6} className="animate__animated animate__zoomIn hover-effect">
            <Card className="grievance-card p-4 border-0 shadow-lg rounded-4 bg-white">
              <Card.Body>
                <Card.Title className="text-center text-info fw-bold hover-effect">About the Cell</Card.Title>
                <Card.Text>
                  The Grievance Redressal Cell at Rewar College ensures a fair and impartial resolution to complaints and issues raised by students or staff. The cell operates with transparency and confidentiality, aiming to maintain harmony and respect on campus.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Cell Members */}
          <Col md={6} className="animate__animated animate__zoomIn hover-effect">
            <Card className="grievance-card p-4 border-0 shadow-lg rounded-4 bg-white">
              <Card.Body>
                <Card.Title className="text-center text-info fw-bold hover-effect">Cell Members</Card.Title>
                <ul className="ps-3">
                  <li className="hover-effect">Dr. Anjali Kapoor – Chairperson</li>
                  <li className="hover-effect">Mr. Raghav Mehta – Faculty Member</li>
                  <li className="hover-effect">Ms. Pooja Batra – Administrative Representative</li>
                  <li className="hover-effect">Mr. Sahil Arora – Student Member</li>
                  <li className="hover-effect">Ms. Isha Jain – Student Member</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Activities */}
          <Col md={6} className="animate__animated animate__fadeInUp hover-effect">
            <Card className="grievance-card p-4 border-0 shadow-lg rounded-4 bg-white">
              <Card.Body>
                <Card.Title className="text-center text-info fw-bold hover-effect">Activities</Card.Title>
                <ul className="ps-3">
                  <li className="hover-effect">Quarterly grievance redressal review meetings.</li>
                  <li className="hover-effect">Orientation sessions on student rights.</li>
                  <li className="hover-effect">Anonymous drop-box installed for complaints.</li>
                  <li className="hover-effect">Online grievance form on college portal.</li>
                  <li className="hover-effect">Workshops with legal experts on rights and redressal.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

        

        </Row>
      </Container>
    </div>
  );
}

export default ArtandCultureCommittee;
