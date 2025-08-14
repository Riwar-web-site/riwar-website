import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import '../Style/SportsFacilities.css';

function SportsFacilities() {
  const facilities = [
    { name: 'Multi-Purpose Indoor Stadium', type: 'Indoor', capacity: 'Multiple activities', status: 'Available' },
    { name: 'Football Ground', type: 'Outdoor', capacity: 'Full size field', status: 'Available' },
    { name: 'Basketball Courts', type: 'Outdoor', capacity: 'Multiple courts', status: 'Available' },
    { name: 'Cricket Ground with Pavilion', type: 'Outdoor', capacity: 'Standard pitch', status: 'Available' },
    { name: 'Table Tennis Facilities', type: 'Indoor', capacity: 'Multiple tables', status: 'Available' },
    { name: 'Modern Gymnasium', type: 'Indoor', capacity: 'Fitness equipment', status: 'Available' }
  ];

  const equipment = [
    { item: 'Football Balls', category: 'Football', condition: 'Good', quantity: 20 },
    { item: 'Cricket Bats', category: 'Cricket', condition: 'Good', quantity: 15 },
    { item: 'Basketball Equipment', category: 'Basketball', condition: 'Good', quantity: 'Multiple sets' },
    { item: 'Table Tennis Equipment', category: 'Table Tennis', condition: 'Good', quantity: 'Complete sets' },
    { item: 'Badminton Equipment', category: 'Badminton', condition: 'Good', quantity: 'Rackets & shuttlecocks' },
    { item: 'Athletic Equipment', category: 'Athletics', condition: 'Good', quantity: 'Track & field gear' }
  ];

  const activities = [
    { activity: 'College Week Sports Championship', type: 'Championship', date: 'October 2025', participants: 300 },
    { activity: 'Inter-departmental Sports Competition', type: 'Competition', date: 'Ongoing', participants: 250 },
    { activity: 'Annual Sports Day', type: 'Event', date: 'February 2025', participants: 400 },
    { activity: 'Physical Education Classes', type: 'Regular Classes', date: 'Ongoing', participants: 200 },
    { activity: 'Fitness Training Programs', type: 'Training', date: 'Ongoing', participants: 150 },
    { activity: 'Sports Club Activities', type: 'Club Activity', date: 'Regular', participants: 100 }
  ];

  const staff = [
    { name: 'Physical Education Coordinator', role: 'Sports Coordinator', department: 'Physical Education', specialization: 'MDC 167: Physical Education and Sports Science' },
    { name: 'Sports Secretary (Student Union)', role: 'Student Leader', department: 'Student Union', specialization: 'Sports event organization' },
    { name: 'Faculty Sports Advisor', role: 'Faculty Advisor', department: 'Academic', specialization: 'Sports guidance and mentoring' },
    { name: 'Equipment Manager', role: 'Support Staff', department: 'Maintenance', specialization: 'Equipment maintenance and management' },
    { name: 'Ground Maintenance Staff', role: 'Maintenance', department: 'Non-teaching Staff', specialization: 'Facility upkeep and safety' }
  ];

  const renderFacilityCard = (facility, index) => (
    <div key={index} className="facility-card d-flex align-items-center p-3 mb-3 rounded-3">
      <div className="facility-icon me-3">
        <span className="icon-circle">🏟️</span>
      </div>
      <div className="facility-info flex-grow-1">
        <h6 className="mb-1 fw-bold">{facility.name}</h6>
        <Badge bg="primary" className="me-2">{facility.type}</Badge>
        <Badge bg="secondary">{facility.capacity}</Badge>
        <Badge bg="success" className="ms-2">{facility.status}</Badge>
      </div>
    </div>
  );

  const renderEquipmentCard = (equipment, index) => (
    <div key={index} className="equipment-card p-3 mb-3 rounded-3">
      <div className="d-flex justify-content-between align-items-start mb-2">
        <Badge bg="info">{equipment.category}</Badge>
        <Badge bg={equipment.condition === 'Excellent' ? 'success' : 'warning'} text="dark">{equipment.condition}</Badge>
      </div>
      <h6 className="mb-2">{equipment.item}</h6>
      <small className="text-info">📦 Quantity: {equipment.quantity}</small>
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

  const renderStaffCard = (staff, index) => (
    <div key={index} className="staff-card d-flex align-items-center p-3 mb-3 rounded-3">
      <div className="staff-avatar me-3">
        <span className="avatar-circle">👨‍🏫</span>
      </div>
      <div className="staff-info flex-grow-1">
        <h6 className="mb-1 fw-bold">{staff.name}</h6>
        <Badge bg="primary" className="me-2">{staff.role}</Badge>
        <Badge bg="secondary">{staff.department}</Badge>
        <p className="mb-0 mt-1 small text-muted">Specialization: {staff.specialization}</p>
      </div>
    </div>
  );

  return (
    <div className="sports-facilities-section py-5 bg-gradient-light" style={{marginTop:"6rem"}}>
      <Container>
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary mb-3">
            <span className="title-icon">🏟️</span>
            Sports Facilities
          </h1>
          <p className="lead mt-5" style={{textAlign:"center"}}>State-of-the-art sports infrastructure for holistic development</p>
        </div>

        <Row className="g-4 justify-content-center">
          {/* About Sports Facilities */}
          <Col lg={6}>
            <Card className="info-card h-100 border-0 shadow-lg">
              <Card.Header className="bg-primary text-white text-center py-3">
                <h4 className="mb-0 fw-bold">About Our Facilities</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <p className="mb-3" style={{color:"black"}}>Riwar College provides comprehensive sports infrastructure for holistic student development. Our facilities promote physical fitness, sportsmanship, and competitive excellence among students through well-maintained indoor and outdoor sports venues.</p>
                <div className="d-flex align-items-center">
                  <Badge bg="primary" className="me-2">Indoor</Badge>
                  <Badge bg="primary" className="me-2">Outdoor</Badge>
                  <Badge bg="primary">Fitness</Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Facilities Overview */}
          <Col lg={6}>
            <Card className="info-card h-100 border-0 shadow-lg">
              <Card.Header className="bg-primary text-white text-center py-3">
                <h4 className="mb-0 fw-bold">Facilities Overview</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <ul className="list-unstyled">
                  <li className="mb-2">🏟️ Multi-purpose indoor stadium</li>
                  <li className="mb-2">⚽ Professional football ground</li>
                  <li className="mb-2">🏀 Basketball courts</li>
                  <li className="mb-2">🏏 Cricket ground with pavilion</li>
                  <li className="mb-2">🏓 Table tennis facilities</li>
                  <li className="mb-2">💪 Modern gymnasium</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Sports Facilities */}
          <Col lg={6}>
            <Card className="facility-card-container h-100 border-0 shadow-lg">
              <Card.Header className="bg-success text-white text-center py-3">
                <h4 className="mb-0 fw-bold">🏟️ Sports Facilities</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="facility-list">
                  {facilities.map((facility, idx) => renderFacilityCard(facility, idx))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Sports Equipment */}
          <Col lg={6}>
            <Card className="equipment-card-container h-100 border-0 shadow-lg">
              <Card.Header className="bg-info text-white text-center py-3">
                <h4 className="mb-0 fw-bold">⚽ Sports Equipment</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="equipment-list">
                  {equipment.map((equipment, idx) => renderEquipmentCard(equipment, idx))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Sports Staff */}
          <Col lg={6}>
            <Card className="staff-card-container h-100 border-0 shadow-lg">
              <Card.Header className="bg-warning text-dark text-center py-3">
                <h4 className="mb-0 fw-bold">👨‍🏫 Sports Staff</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="staff-list">
                  {staff.map((staff, idx) => renderStaffCard(staff, idx))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Sports Activities */}
          <Col lg={6}>
            <Card className="activity-card-container h-100 border-0 shadow-lg">
              <Card.Header className="bg-danger text-white text-center py-3">
                <h4 className="mb-0 fw-bold">🎯 Sports Activities</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="activity-list">
                  {activities.map((activity, idx) => renderActivityCard(activity, idx))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SportsFacilities;
