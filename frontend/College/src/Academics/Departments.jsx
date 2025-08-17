import React, { useState } from 'react';
import { Container, Card, Button, Collapse, Row, Col, Badge, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Departments.css';

const departments = [
 {
  "name": "English",
  "description": "Literature, critical theory, and communication studies",
  "staff": 4,
  "courses": ["B.A. (Honours) in English", "B.A. (General) in English"],
  "color": "#3b82f6",
  "about": "The Department of English offers Honours and General B.A. courses in English literature and language. Established with a focus on literature, critical thinking, and communicative competence, the department fosters analytical skills, creative writing, and holistic language development.",
  "staffMembers": [
    "Smt. Andrena Lyngdoh - Head of Department (HOD)",
    "Smt. Ibadarilyne Khongthohrem - Assistant Professor",
    "Smt. Alka G Khongsar - Assistant Professor",
    "Smt. Indralyne Khongwet - Assistant Professor"
  ],
  "researchAreas": ["English Literature", "Language and Linguistics", "Critical Theory", "Creative Writing"],
  "activities": ["Literary Club", "Seminars", "Workshops", "Essay Competitions"]
},

  





{
  "name": "Khasi",
  "description": "Khasi literature, language, and cultural studies",
  "staff": 5,
  "courses": ["B.A. (Honours) in Khasi", "B.A. (General) in Khasi"],
  "color": "#16a34a",
  "about": "The Department of Khasi is dedicated to promoting and preserving Khasi language, literature, and cultural heritage. It offers comprehensive study of the language, its literature, and socio-cultural aspects.",
  "staffMembers": [
    "Smt. Klorida Khongjee - Head of Department (HOD)",
    "Smt. Roiparbha Khongkliam - Assistant Professor",
    "Shri. Balajied Sing Mawkon - Assistant Professor",
    "Smt. Bariland L Mawphlang - Assistant Professor",
    "Shri. Banshemphang Nongneng - Assistant Professor"
  ],
  "researchAreas": ["Khasi Literature", "Language and Folklore", "Cultural Studies"],
  "activities": ["Cultural Festivals", "Language Workshops", "Essay and Poetry Competitions"]
},




















{
  "name": "Political Science",
  "description": "Political theory, governance, and social research",
  "staff": 4,
  "courses": ["B.A. in Political Science"],
  "color": "#ef4444",
  "about": "The Department of Political Science provides comprehensive study in political theory, comparative politics, and public administration. It prepares students for critical engagement with civics and governance.",
  "staffMembers": [
    "Smt. Kyntiewlin Khongwet - Head of Department (HOD)",
    "Shri. Paulus Khongsit - Assistant Professor",
    "Smt. Evangeline Tariang - Assistant Professor",
    "Smt. Tngenhun Thabah - Assistant Professor"
  ],
  "researchAreas": ["Political Theory", "Governance", "Public Administration", "Indian Politics"],
  "activities": ["Debates", "Political Awareness Seminars", "Student Elections/Model Parliament"]
},

{
  "name": "Sociology",
  "description": "Social sciences, community, and cultural research",
  "staff": 3,
  "courses": ["B.A. in Sociology"],
  "color": "#eab308",
  "about": "The Department of Sociology focuses on social structure, community studies, and cultural analysis. It aims to impart sociological thinking and a deep understanding of society.",
  "staffMembers": [
    "Sir. Teiborlang Dkhar - Head of Department (HOD)",
    "Miss. Kriling Mawiong - Assistant Professor",
    "Miss. Lawanshai Nongrum - Assistant Professor"
  ],
  "researchAreas": ["Community Studies", "Society and Culture", "Social Change"],
  "activities": ["Community Outreach", "Field Trips", "Cultural Analysis Workshops"]
},

{
  "name": "Philosophy",
  "description": "Philosophical inquiry, ethics, and critical thinking",
  "staff": 3,
  "courses": ["B.A. in Philosophy"],
  "color": "#6366f1",
  "about": "The Department of Philosophy fosters analytical, logical, and ethical thinking. Students are introduced to fundamental philosophical problems, the history of ideas, and ethics.",
  "staffMembers": [
    "Shri. Shemphang Tynsong - Head of Department (HOD)",
    "Smt. Bashisha Khongtani - Assistant Professor",
    "Smt. Badalin Kurbah - Assistant Professor"
  ],
  "researchAreas": ["Ethics", "Logic", "History of Philosophy", "Indian and Western Philosophy"],
  "activities": ["Ethics Seminars", "Debate Forums", "Idea Discussion Sessions"]
},


{
  "name": "Economics",
  "description": "Economic theory, development, policy studies",
  "staff": 4,
  "courses": ["B.A. in Economics"],
  "color": "#22d3ee",
  "about": "The Department of Economics prepares students for critical analysis of economic systems, development policies, and applied economics, integrating theory with practical issues.",
  "staffMembers": [
    "Shri. Wanbha Khongsdam - Head of Department (HOD)",
    "Smt. Shekelda Gracia Nongrum - Assistant Professor",
    "Smt. Daroilin Lyngdoh - Assistant Professor",
    "Smt. Mantina Mawiong - Assistant Professor"
  ],
  "researchAreas": ["Development Economics", "Economic Policy", "Indian Economy", "Statistical Methods"],
  "activities": ["Seminars", "Economic Awareness Workshops", "Survey Projects"]
}
















  // {
  //   name: 'Political Science',
  //   description: 'Political systems and governance',
  //   staff: 5,
  //   courses: ['B.A Political Science', 'M.A Political Science'],
  //   color: '#1e40af',
  //   about: 'The Political Science Department studies political systems, governance, and international relations. We analyze political theories and contemporary political issues.',
  //   staffMembers: [
  //     'Dr. Suresh Kumar - Head of Department',
  //     'Prof. Anita Patel - Political Theory',
  //     'Dr. Rajesh Sharma - International Relations',
  //     'Prof. Sunita Verma - Indian Politics',
  //     'Mr. Amit Singh - Public Administration'
  //   ],
  //   researchAreas: ['Political Theory', 'International Relations', 'Indian Politics', 'Public Administration', 'Comparative Politics', 'Political Philosophy'],
  //   activities: ['Political Debates', 'Model United Nations', 'Policy Analysis', 'Government Visits', 'International Relations Seminars', 'Research Projects']
  // },
  // {
  //   name: 'History',
  //   description: 'Historical research and cultural studies',
  //   staff: 4,
  //   courses: ['B.A History', 'M.A History'],
  //   color: '#d97706',
  //   about: 'The History Department explores historical events, cultural heritage, and their impact on contemporary society. We study ancient, medieval, and modern history.',
  //   staffMembers: [
  //     'Dr. Meenakshi Kumar - Head of Department',
  //     'Prof. Rajesh Patel - Ancient History',
  //     'Dr. Sunita Sharma - Medieval History',
  //     'Mr. Amit Verma - Modern History'
  //   ],
  //   researchAreas: ['Ancient History', 'Medieval History', 'Modern History', 'Cultural Studies', 'Archaeology', 'Historical Research'],
  //   activities: ['Historical Tours', 'Archaeological Visits', 'Cultural Exhibitions', 'Documentary Screenings', 'Research Seminars', 'Heritage Walks']
  // },
  // {
  //   name: 'English',
  //   description: 'Literature and language studies',
  //   staff: 6,
  //   courses: ['B.A English', 'M.A English'],
  //   color: '#0891b2',
  //   about: 'The English Department focuses on literature, language studies, and communication skills. We explore various literary periods and contemporary literature.',
  //   staffMembers: [
  //     'Dr. Priya Sharma - Head of Department',
  //     'Prof. Rajesh Kumar - British Literature',
  //     'Dr. Sunita Patel - American Literature',
  //     'Prof. Amit Verma - Indian Writing in English',
  //     'Ms. Meera Singh - Linguistics',
  //     'Mr. Arun Kumar - Communication Skills'
  //   ],
  //   researchAreas: ['British Literature', 'American Literature', 'Indian Writing in English', 'Linguistics', 'Creative Writing', 'Literary Criticism'],
  //   activities: ['Literary Festivals', 'Creative Writing Workshops', 'Drama Productions', 'Poetry Recitations', 'Book Reviews', 'Language Labs']
  // },
  // {
  //   name: 'Hindi',
  //   description: 'Hindi literature and language',
  //   staff: 4,
  //   courses: ['B.A Hindi', 'M.A Hindi'],
  //   color: '#059669',
  //   about: 'The Hindi Department promotes Hindi literature, language, and cultural heritage. We study classical and modern Hindi literature.',
  //   staffMembers: [
  //     'Dr. Rajesh Kumar - Head of Department',
  //     'Prof. Sunita Patel - Classical Hindi',
  //     'Dr. Amit Sharma - Modern Hindi Literature',
  //     'Ms. Priya Singh - Hindi Grammar'
  //   ],
  //   researchAreas: ['Classical Hindi Literature', 'Modern Hindi Literature', 'Hindi Grammar', 'Hindi Journalism', 'Translation Studies', 'Folk Literature'],
  //   activities: ['Hindi Diwas Celebrations', 'Poetry Recitations', 'Literary Seminars', 'Cultural Programs', 'Translation Workshops', 'Folk Literature Studies']
  // },
  // {
  //   name: 'Commerce',
  //   description: 'Business and commercial studies',
  //   staff: 8,
  //   courses: ['B.Com', 'M.Com', 'BBA'],
  //   color: '#7c2d12',
  //   about: 'The Commerce Department provides comprehensive business education covering accounting, finance, marketing, and business management.',
  //   staffMembers: [
  //     'Dr. Suresh Kumar - Head of Department',
  //     'Prof. Anita Patel - Accounting',
  //     'Dr. Rajesh Sharma - Finance',
  //     'Prof. Sunita Verma - Marketing',
  //     'Dr. Amit Singh - Business Management',
  //     'Ms. Priya Kumar - Economics',
  //     'Mr. Arun Patel - Statistics',
  //     'Ms. Meera Singh - Business Law'
  //   ],
  //   researchAreas: ['Accounting', 'Finance', 'Marketing', 'Business Management', 'Economics', 'Business Law'],
  //   activities: ['Business Plan Competitions', 'Industry Visits', 'Accounting Workshops', 'Marketing Projects', 'Finance Seminars', 'Entrepreneurship Programs']
  // },
  // {
  //   name: 'Geography',
  //   description: 'Earth sciences and spatial analysis',
  //   staff: 4,
  //   courses: ['B.A Geography', 'M.A Geography'],
  //   color: '#059669',
  //   about: 'The Geography Department studies physical and human geography, environmental issues, and spatial analysis using modern technologies.',
  //   staffMembers: [
  //     'Dr. Amit Kumar - Head of Department',
  //     'Prof. Priya Sharma - Physical Geography',
  //     'Dr. Rajesh Patel - Human Geography',
  //     'Ms. Sunita Singh - GIS & Remote Sensing'
  //   ],
  //   researchAreas: ['Physical Geography', 'Human Geography', 'GIS & Remote Sensing', 'Environmental Geography', 'Urban Geography', 'Regional Planning'],
  //   activities: ['Field Trips', 'GIS Workshops', 'Environmental Surveys', 'Map Reading Sessions', 'Climate Studies', 'Urban Planning Projects']
  // },
  // {
  //   name: 'Sociology',
  //   description: 'Social structures and human behavior',
  //   staff: 3,
  //   courses: ['B.A Sociology', 'M.A Sociology'],
  //   color: '#7c3aed',
  //   about: 'The Sociology Department examines social structures, human behavior, and social issues. We analyze contemporary social problems and their solutions.',
  //   staffMembers: [
  //     'Dr. Sunita Kumar - Head of Department',
  //     'Prof. Rajesh Patel - Social Theory',
  //     'Ms. Priya Sharma - Social Research'
  //   ],
  //   researchAreas: ['Social Theory', 'Social Research', 'Rural Sociology', 'Urban Sociology', 'Gender Studies', 'Social Development'],
  //   activities: ['Social Surveys', 'Community Studies', 'Gender Awareness Programs', 'Social Research Projects', 'Field Work', 'Social Development Workshops']
  // },
  // {
  //   name: 'Psychology',
  //   description: 'Human mind and behavior studies',
  //   staff: 4,
  //   courses: ['B.A Psychology', 'M.A Psychology'],
  //   color: '#dc2626',
  //   about: 'The Psychology Department explores human behavior, mental processes, and psychological well-being. We study various aspects of human psychology.',
  //   staffMembers: [
  //     'Dr. Priya Kumar - Head of Department',
  //     'Prof. Amit Sharma - Clinical Psychology',
  //     'Dr. Sunita Patel - Social Psychology',
  //     'Ms. Rajesh Singh - Counseling Psychology'
  //   ],
  //   researchAreas: ['Clinical Psychology', 'Social Psychology', 'Counseling Psychology', 'Cognitive Psychology', 'Developmental Psychology', 'Industrial Psychology'],
  //   activities: ['Psychological Testing', 'Counseling Sessions', 'Mental Health Awareness', 'Behavioral Studies', 'Psychology Workshops', 'Research Projects']
  // },
  // {
  //   name: 'Philosophy',
  //   description: 'Critical thinking and ethical studies',
  //   staff: 3,
  //   courses: ['B.A Philosophy', 'M.A Philosophy'],
  //   color: '#1e293b',
  //   about: 'The Philosophy Department promotes critical thinking, ethical reasoning, and philosophical inquiry. We explore various philosophical traditions and contemporary issues.',
  //   staffMembers: [
  //     'Dr. Rajesh Kumar - Head of Department',
  //     'Prof. Sunita Patel - Indian Philosophy',
  //     'Mr. Amit Sharma - Western Philosophy'
  //   ],
  //   researchAreas: ['Indian Philosophy', 'Western Philosophy', 'Ethics', 'Logic', 'Metaphysics', 'Epistemology'],
  //   activities: ['Philosophical Debates', 'Ethics Workshops', 'Critical Thinking Sessions', 'Philosophical Discussions', 'Ethics Awareness', 'Research Seminars']
  // },
  // {
  //   name: 'Education',
  //   description: 'Teaching and educational sciences',
  //   staff: 5,
  //   courses: ['B.Ed', 'M.Ed'],
  //   color: '#0891b2',
  //   about: 'The Education Department prepares future educators with pedagogical skills, educational psychology, and modern teaching methodologies.',
  //   staffMembers: [
  //     'Dr. Meenakshi Patel - Head of Department',
  //     'Prof. Rajesh Kumar - Educational Psychology',
  //     'Dr. Sunita Sharma - Pedagogy',
  //     'Prof. Amit Verma - Educational Technology',
  //     'Ms. Priya Singh - Curriculum Development'
  //   ],
  //   researchAreas: ['Educational Psychology', 'Pedagogy', 'Educational Technology', 'Curriculum Development', 'Educational Assessment', 'Teacher Training'],
  //   activities: ['Teaching Practice', 'Educational Workshops', 'Technology Integration', 'Assessment Training', 'School Visits', 'Educational Research']
  // },
  // {
  //   name: 'Physical Education',
  //   description: 'Sports science and fitness studies',
  //   staff: 4,
  //   courses: ['B.P.Ed', 'M.P.Ed'],
  //   color: '#059669',
  //   about: 'The Physical Education Department promotes sports science, fitness, and physical well-being. We focus on sports training and physical fitness.',
  //   staffMembers: [
  //     'Dr. Amit Kumar - Head of Department',
  //     'Prof. Rajesh Sharma - Sports Training',
  //     'Dr. Sunita Patel - Sports Psychology',
  //     'Ms. Priya Singh - Fitness Training'
  //   ],
  //   researchAreas: ['Sports Training', 'Sports Psychology', 'Fitness Training', 'Sports Medicine', 'Physical Education', 'Sports Management'],
  //   activities: ['Sports Tournaments', 'Fitness Camps', 'Sports Psychology Workshops', 'Athletic Training', 'Health Awareness', 'Sports Competitions']
  // }
];

const departmentOptions = [
  { name: 'About Department', icon: '📚' },
  { name: 'Staff Members', icon: '👨‍🏫' },
  { name: 'Courses Offered', icon: '📖' },
  { name: 'Research Areas', icon: '🔬' },
  { name: 'Department Activities', icon: '🎯' },
  { name: 'Contact Info', icon: '📞' }
];

function Departments() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedDept, setSelectedDept] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleOptionClick = (dept, option) => {
    setSelectedDept(dept);
    setSelectedOption(option);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDept(null);
    setSelectedOption(null);
  };

  const renderModalContent = () => {
    if (!selectedDept || !selectedOption) return null;

    switch (selectedOption.name) {
      case 'About Department':
        return (
          <div>
            <h5 className="fw-bold text-primary mb-3">About {selectedDept.name} Department</h5>
            <p className="text-muted">{selectedDept.about}</p>
            <div className="mt-3">
              <Badge bg="primary" className="me-2">{selectedDept.staff} Staff Members</Badge>
              <Badge bg="success" className="me-2">{selectedDept.courses.length} Courses</Badge>
            </div>
          </div>
        );

      case 'Staff Members':
        return (
          <div>
            <h5 className="fw-bold text-primary mb-3">Faculty Members - {selectedDept.name}</h5>
            <ul className="list-unstyled">
              {selectedDept.staffMembers.map((member, index) => (
                <li key={index} className="mb-2 p-2 bg-light rounded">
                  <i className="fas fa-user-tie me-2 text-primary"></i>
                  {member}
                </li>
              ))}
            </ul>
          </div>
        );

      case 'Courses Offered':
        return (
          <div>
            <h5 className="fw-bold text-primary mb-3">Available Courses - {selectedDept.name}</h5>
            <div className="row">
              {selectedDept.courses.map((course, index) => (
                <div key={index} className="col-md-6 mb-3">
                  <div className="card border-0 bg-light">
                    <div className="card-body text-center">
                      <h6 className="fw-semibold">{course}</h6>
                      <small className="text-muted">Duration: 3 Years</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'Research Areas':
        return (
          <div>
            <h5 className="fw-bold text-primary mb-3">Research Areas - {selectedDept.name}</h5>
            <div className="row">
              {selectedDept.researchAreas.map((area, index) => (
                <div key={index} className="col-md-6 mb-2">
                  <Badge bg="info" className="w-100 p-2 text-start">
                    <i className="fas fa-microscope me-2"></i>
                    {area}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        );

      case 'Department Activities':
        return (
          <div>
            <h5 className="fw-bold text-primary mb-3">Department Activities - {selectedDept.name}</h5>
            <div className="row">
              {selectedDept.activities.map((activity, index) => (
                <div key={index} className="col-md-6 mb-2">
                  <div className="d-flex align-items-center p-2 bg-light rounded">
                    <i className="fas fa-calendar-alt text-primary me-2"></i>
                    <span>{activity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'Contact Info':
        return (
          <div>
            <h5 className="fw-bold text-primary mb-3">Contact Information - {selectedDept.name}</h5>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="card border-0 bg-light">
                  <div className="card-body">
                    <h6 className="fw-semibold">Department Head</h6>
                    <p className="mb-1">{selectedDept.staffMembers[0]}</p>
                    <small className="text-muted">Email: head.{selectedDept.name.toLowerCase().replace(' ', '')}@college.edu</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="card border-0 bg-light">
                  <div className="card-body">
                    <h6 className="fw-semibold">Office Location</h6>
                    <p className="mb-1">Block A, Room {Math.floor(Math.random() * 20) + 1}</p>
                    <small className="text-muted">Phone: +91-98765-{Math.floor(Math.random() * 90000) + 10000}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="departments-container" style={{marginTop:"5rem"}}>
      {/* Hero Section */}
      <div className="hero-section">
        <Container>
          <div className="hero-content text-center">
            <div className="hero-badge mb-4">
              <span className="badge-text">🎓 Academic Excellence</span>
            </div>
            <h1 className="hero-title mb-4">
              Our <span className="gradient-text">Departments</span>
            </h1>
            <p className="hero-subtitle mb-5">
              Discover world-class education across diverse academic disciplines with 
              dedicated faculty and cutting-edge research opportunities
            </p>
            <div className="stats-row">
              <div className="stat-item">
                <div className="stat-number">{departments.length}</div>
                <div className="stat-label">Departments</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{departments.reduce((total, dept) => total + dept.staff, 0)}</div>
                <div className="stat-label">Faculty Members</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{departments.reduce((total, dept) => total + dept.courses.length, 0)}</div>
                <div className="stat-label">Programs Offered</div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Departments Grid */}
      <Container className="departments-grid-section py-5">
        <Row className="g-4">
          {departments.map((dept, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card 
                className="dept-card modern-card"
                data-dept={dept.name}
                style={{ 
                  '--dept-color': dept.color
                }}
              >
                {/* Gradient Header */}
                <div className="card-header-gradient" style={{background: `linear-gradient(135deg, ${dept.color}15 0%, ${dept.color}25 100%)`}}>
                  <div className="dept-icon-wrapper">
                    <div className="dept-icon" style={{background: dept.color}}>
                      {dept.name.charAt(0)}
                    </div>
                  </div>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => toggleCard(index)}
                    aria-controls={`collapse-${index}`}
                    aria-expanded={openIndex === index}
                    className="explore-btn-modern"
                  >
                    {openIndex === index ? (
                      <><i className="fas fa-chevron-up me-1"></i>Hide</>
                    ) : (
                      <><i className="fas fa-plus me-1"></i>Explore</>
                    )}
                  </Button>
                </div>

                <Card.Body className="modern-card-body">
                  <div className="dept-header-info">
                    <Card.Title className="dept-title mb-2">
                      {dept.name}
                    </Card.Title>
                    <p className="dept-description">{dept.description}</p>
                    <div className="stats-badges">
                      <div className="stat-badge">
                        <i className="fas fa-users me-1"></i>
                        {dept.staff} Faculty
                      </div>
                      <div className="stat-badge">
                        <i className="fas fa-graduation-cap me-1"></i>
                        {dept.courses.length} Programs
                      </div>
                    </div>
                  </div>
                
                <Collapse in={openIndex === index}>
                  <div id={`collapse-${index}`} className="collapse-content">
                    <div className="options-grid">
                      {departmentOptions.map((opt, idx) => (
                        <div
                          key={idx}
                          className="option-card"
                          onClick={() => handleOptionClick(dept, opt)}
                        >
                          <div className="option-icon">
                            {opt.icon}
                          </div>
                          <div className="option-text">
                            {opt.name}
                          </div>
                          <div className="option-arrow">
                            <i className="fas fa-arrow-right"></i>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    
    {/* Enhanced Modal */}
    <Modal show={showModal} onHide={handleCloseModal} size="lg" centered className="modern-modal">
      <Modal.Header closeButton className="border-0 pb-0">
        <Modal.Title className="modal-title-modern d-flex align-items-center">
          <div className="modal-icon me-3">
            {selectedOption?.icon}
          </div>
          <div>
            <div className="modal-main-title">{selectedOption?.name}</div>
            <div className="modal-subtitle">{selectedDept?.name} Department</div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-4 py-3">
        <div className="modal-content-wrapper">
          {renderModalContent()}
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0 pt-0">
        <Button variant="outline-secondary" onClick={handleCloseModal} className="modern-close-btn">
          <i className="fas fa-times me-2"></i>Close
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
  );
}

export default Departments;
