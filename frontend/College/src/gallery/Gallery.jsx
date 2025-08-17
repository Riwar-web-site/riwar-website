import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// 15th Anniversary images
import anniversary1 from '../assets/15th ANNIVERSARY/15th ANNIVERSARY 1.JPG';
import anniversary2 from '../assets/15th ANNIVERSARY/15th ANNIVERSARY 2.JPG';
import anniversary3 from '../assets/15th ANNIVERSARY/15th ANNIVERSARY 3.JPG';
import anniversary4 from '../assets/15th ANNIVERSARY/15th ANNIVERSARY 4.jpg';
import anniversary from '../assets/15th ANNIVERSARY/15th ANNIVERSARY.JPG';

// 2023 AMRIT MOHATSAV images (selecting a few representative images)
import amrit1 from '../assets/2023 AMRIT MOHATSAV-75 YEARS OF INDEPENDENCE/20221013_101501.jpg';
import amrit2 from '../assets/2023 AMRIT MOHATSAV-75 YEARS OF INDEPENDENCE/IMG-20220811-WA0033.jpg';
import amrit3 from '../assets/2023 AMRIT MOHATSAV-75 YEARS OF INDEPENDENCE/IMG-20220811-WA0034.jpg';
import amrit4 from '../assets/2023 AMRIT MOHATSAV-75 YEARS OF INDEPENDENCE/IMG-20220811-WA0035.jpg';
import amrit5 from '../assets/2023 AMRIT MOHATSAV-75 YEARS OF INDEPENDENCE/IMG_20220811_113614.jpg';

// 2023 NEHU RC SPORTS images
import sports1 from '../assets/2023 NEHU RC SPORTS/IMG_20230805_150820026.jpg';
import sports2 from '../assets/2023 NEHU RC SPORTS/IMG_20230805_150823884.jpg';
import sports3 from '../assets/2023 NEHU RC SPORTS/IMG_20230805_150825885.jpg';
import sports4 from '../assets/2023 NEHU RC SPORTS/IMG_20230823_094837372.jpg';

// 2023 Runsafari Marathon images
import marathon1 from '../assets/2023 Runsafari Marathon/IMG-20230916-WA0000.jpg';
import marathon2 from '../assets/2023 Runsafari Marathon/IMG-20230916-WA0001.jpg';
import marathon3 from '../assets/2023 Runsafari Marathon/IMG-20230916-WA0002.jpg';
import marathon4 from '../assets/2023 Runsafari Marathon/IMG-20230916-WA0003.jpg';

// 2024 Republic Day images
import republic1 from '../assets/2024 Republic Day/Republic Day 1.jpg';
import republic2 from '../assets/2024 Republic Day/Republic Day 2.jpg';
import republic from '../assets/2024 Republic Day/Republic Day.jpg';

// Alumni 2023 images
import alumni1 from '../assets/ALUMNI-2023-1/IMG-20230930-WA0009.jpg';
import alumni2 from '../assets/ALUMNI-2023-1/IMG-20230930-WA0010.jpg';
import alumni3 from '../assets/ALUMNI-2023-1/IMG20230930141150.jpg';
import alumni4 from '../assets/ALUMNI-2023-1/IMG_20230930_135109.jpg';

// College Week images
import collegeWeek1 from '../assets/COLLEGE WEEK 1/COLLEGE WEEK 1.jpg';
import collegeWeek2 from '../assets/COLLEGE WEEK 1/COLLEGE WEEK 2.jpg';
import collegeWeek3 from '../assets/COLLEGE WEEK 1/COLLEGE WEEK 3.jpg';
import collegeWeek4 from '../assets/COLLEGE WEEK 1/COLLEGE WEEK 4.jpg';
import collegeWeek from '../assets/COLLEGE WEEK 1/COLLEGE WEEK.jpg';

// Corn Awareness images
import corn1 from '../assets/CORN AWARNESS (CAU) 1/CORN AWARNESS (CAU) 1.jpg';
import corn2 from '../assets/CORN AWARNESS (CAU) 1/CORN AWARNESS (CAU) 2.jpg';
import corn from '../assets/CORN AWARNESS (CAU) 1/CORN AWARNESS (CAU).jpg';

// Disaster Management images
import disaster1 from '../assets/DISASTER MANAGEMENT 1/DISASTER MANAGEMENT 1.jpg';
import disaster2 from '../assets/DISASTER MANAGEMENT 1/DISASTER MANAGEMENT 2.jpg';
import disaster3 from '../assets/DISASTER MANAGEMENT 1/DISASTER MANAGEMENT 3.jpg';
import disaster from '../assets/DISASTER MANAGEMENT 1/DISASTER MANAGEMENT.jpg';

// Graduation Day images
import graduation1 from '../assets/GRADUATION DAY 1/GRADUATION DAY 1.jpg';
import graduation2 from '../assets/GRADUATION DAY 1/GRADUATION DAY 2.jpg';
import graduation3 from '../assets/GRADUATION DAY 1/GRADUATION DAY 3.jpg';
import graduation from '../assets/GRADUATION DAY 1/GRADUATION DAY.jpg';

// ICC images
import icc1 from '../assets/ICC 1/ICC 1.jpg';
import icc2 from '../assets/ICC 1/ICC 2.jpg';
import icc3 from '../assets/ICC 1/ICC 3.jpg';
import icc from '../assets/ICC 1/ICC.jpg';

// Independence Day images
import independence1 from '../assets/INDEPENDENCE DAY 1/INDEPENDENCE DAY 1.jpg';
import independence2 from '../assets/INDEPENDENCE DAY 1/INDEPENDENCE DAY 2.jpg';
import independence3 from '../assets/INDEPENDENCE DAY 1/INDEPENDENCE DAY 3.jpg';
import independence from '../assets/INDEPENDENCE DAY 1/INDEPENDENCE DAY.jpg';

// Inauguration images
import inauguration1 from '../assets/INUGUARATION OF RIWAR COLLEGE N HALL/2022/IMG-20220225-WA0038.jpg';
import inauguration2 from '../assets/INUGUARATION OF RIWAR COLLEGE N HALL/2022/IMG-20220607-WA0010.jpg';
import inauguration3 from '../assets/INUGUARATION OF RIWAR COLLEGE N HALL/2022/IMG-20220607-WA0011.jpg';
import inauguration4 from '../assets/INUGUARATION OF RIWAR COLLEGE N HALL/2022/IMG-20220607-WA0012.jpg';

// Library images
import library1 from '../assets/LIBRARY PHOTO 1/LIBRARY PHOTO 1.jpg';
import library from '../assets/LIBRARY PHOTO 1/LIBRARY PHOTO.jpg';

// NTCP images
import ntcp1 from '../assets/NTCP(National Tobacco Controll Programme) 1/NTCP(National Tobacco Controll Programme) 1.jpg';
import ntcp2 from '../assets/NTCP(National Tobacco Controll Programme) 1/NTCP(National Tobacco Controll Programme) 2.jpg';
import ntcp3 from '../assets/NTCP(National Tobacco Controll Programme) 1/NTCP(National Tobacco Controll Programme) 3.jpg';
import ntcp from '../assets/NTCP(National Tobacco Controll Programme) 1/NTCP(National Tobacco Controll Programme).jpg';

function Gallery() {
  const [activeSection, setActiveSection] = useState('anniversary');

  // Define photo collections for each section
  const photoSections = {
    anniversary: {
      title: "15th Anniversary",
      icon: "🎉",
      photos: [
        { id: 1, image: anniversary1, title: "Anniversary Celebration 1" },
        { id: 2, image: anniversary2, title: "Anniversary Celebration 2" },
        { id: 3, image: anniversary3, title: "Anniversary Celebration 3" },
        { id: 4, image: anniversary4, title: "Anniversary Celebration 4" },
        { id: 5, image: anniversary, title: "Anniversary Main Event" }
      ]
    },
    amrit: {
      title: "Amrit Mohatsav - 75 Years Independence",
      icon: "🇮🇳",
      photos: [
        { id: 1, image: amrit1, title: "Independence Day Celebration 1" },
        { id: 2, image: amrit2, title: "Independence Day Celebration 2" },
        { id: 3, image: amrit3, title: "Independence Day Celebration 3" },
        { id: 4, image: amrit4, title: "Independence Day Celebration 4" },
        { id: 5, image: amrit5, title: "Independence Day Celebration 5" }
      ]
    },
    sports: {
      title: "NEHU RC Sports",
      icon: "🏃‍♂️",
      photos: [
        { id: 1, image: sports1, title: "Sports Event 1" },
        { id: 2, image: sports2, title: "Sports Event 2" },
        { id: 3, image: sports3, title: "Sports Event 3" },
        { id: 4, image: sports4, title: "Sports Event 4" }
      ]
    },
    marathon: {
      title: "Runsafari Marathon 2023",
      icon: "🏃‍♀️",
      photos: [
        { id: 1, image: marathon1, title: "Marathon Event 1" },
        { id: 2, image: marathon2, title: "Marathon Event 2" },
        { id: 3, image: marathon3, title: "Marathon Event 3" },
        { id: 4, image: marathon4, title: "Marathon Event 4" }
      ]
    },
    republic: {
      title: "Republic Day 2024",
      icon: "🎌",
      photos: [
        { id: 1, image: republic1, title: "Republic Day Celebration 1" },
        { id: 2, image: republic2, title: "Republic Day Celebration 2" },
        { id: 3, image: republic, title: "Republic Day Main Event" }
      ]
    },
    alumni: {
      title: "Alumni Meet 2023",
      icon: "👥",
      photos: [
        { id: 1, image: alumni1, title: "Alumni Gathering 1" },
        { id: 2, image: alumni2, title: "Alumni Gathering 2" },
        { id: 3, image: alumni3, title: "Alumni Gathering 3" },
        { id: 4, image: alumni4, title: "Alumni Gathering 4" }
      ]
    },
    collegeWeek: {
      title: "College Week",
      icon: "🎭",
      photos: [
        { id: 1, image: collegeWeek1, title: "College Week Event 1" },
        { id: 2, image: collegeWeek2, title: "College Week Event 2" },
        { id: 3, image: collegeWeek3, title: "College Week Event 3" },
        { id: 4, image: collegeWeek4, title: "College Week Event 4" },
        { id: 5, image: collegeWeek, title: "College Week Main Event" }
      ]
    },
    corn: {
      title: "Corn Awareness Program",
      icon: "🌽",
      photos: [
        { id: 1, image: corn1, title: "Corn Awareness 1" },
        { id: 2, image: corn2, title: "Corn Awareness 2" },
        { id: 3, image: corn, title: "Corn Awareness Main" }
      ]
    },
    disaster: {
      title: "Disaster Management",
      icon: "🚨",
      photos: [
        { id: 1, image: disaster1, title: "Disaster Management 1" },
        { id: 2, image: disaster2, title: "Disaster Management 2" },
        { id: 3, image: disaster3, title: "Disaster Management 3" },
        { id: 4, image: disaster, title: "Disaster Management Main" }
      ]
    },
    graduation: {
      title: "Graduation Day",
      icon: "🎓",
      photos: [
        { id: 1, image: graduation1, title: "Graduation Ceremony 1" },
        { id: 2, image: graduation2, title: "Graduation Ceremony 2" },
        { id: 3, image: graduation3, title: "Graduation Ceremony 3" },
        { id: 4, image: graduation, title: "Graduation Main Event" }
      ]
    },
    icc: {
      title: "ICC Committee",
      icon: "⚖️",
      photos: [
        { id: 1, image: icc1, title: "ICC Meeting 1" },
        { id: 2, image: icc2, title: "ICC Meeting 2" },
        { id: 3, image: icc3, title: "ICC Meeting 3" },
        { id: 4, image: icc, title: "ICC Main Event" }
      ]
    },
    independence: {
      title: "Independence Day",
      icon: "🎆",
      photos: [
        { id: 1, image: independence1, title: "Independence Day 1" },
        { id: 2, image: independence2, title: "Independence Day 2" },
        { id: 3, image: independence3, title: "Independence Day 3" },
        { id: 4, image: independence, title: "Independence Day Main" }
      ]
    },
    inauguration: {
      title: "College Inauguration",
      icon: "🏛️",
      photos: [
        { id: 1, image: inauguration1, title: "College Inauguration 1" },
        { id: 2, image: inauguration2, title: "College Inauguration 2" },
        { id: 3, image: inauguration3, title: "College Inauguration 3" },
        { id: 4, image: inauguration4, title: "College Inauguration 4" }
      ]
    },
    library: {
      title: "Library",
      icon: "📚",
      photos: [
        { id: 1, image: library1, title: "Library Photo 1" },
        { id: 2, image: library, title: "Library Main Photo" }
      ]
    },
    ntcp: {
      title: "NTCP - Tobacco Control Programme",
      icon: "🚭",
      photos: [
        { id: 1, image: ntcp1, title: "NTCP Program 1" },
        { id: 2, image: ntcp2, title: "NTCP Program 2" },
        { id: 3, image: ntcp3, title: "NTCP Program 3" },
        { id: 4, image: ntcp, title: "NTCP Main Program" }
      ]
    }
  };

  const sectionKeys = Object.keys(photoSections);
  const currentPhotos = photoSections[activeSection]?.photos || [];

  return (
    <div className="gallery-section py-5 bg-light mt-5">
      <Container>
        <h1 className="text-center mb-5 display-4 fw-bold">📸 College Gallery</h1>

        {/* Section Navigation */}
        <Row className="mb-4">
          <Col md={12} className="text-center">
            <div className="d-flex flex-wrap justify-content-center gap-2" style={{ maxHeight: '200px', overflowY: 'auto' }}>
              {sectionKeys.map((key) => (
                <button
                  key={key}
                  className={`btn btn-sm ${activeSection === key ? 'btn-primary' : 'btn-outline-primary'} mb-2`}
                  onClick={() => setActiveSection(key)}
                  style={{ minWidth: '120px', fontSize: '0.85rem' }}
                >
                  {photoSections[key].icon} {photoSections[key].title}
                </button>
              ))}
            </div>
          </Col>
        </Row>

        {/* Current Section Title */}
        <Row className="mb-4">
          <Col md={12} className="text-center">
            <h2 className="h3 text-primary fw-bold">
              {photoSections[activeSection]?.icon} {photoSections[activeSection]?.title}
            </h2>
            <div className="bg-primary" style={{ height: '3px', width: '100px', margin: '10px auto' }}></div>
          </Col>
        </Row>

        {/* Photo Grid */}
        <Row className="g-3">
          {currentPhotos.map((photo) => (
            <Col key={photo.id} xl={3} lg={4} md={6} sm={6} className="mb-3">
              <div className="gallery-item position-relative">
                <img 
                  src={photo.image} 
                  alt={photo.title}
                  loading='lazy'
                  decoding='async'
                  className="img-fluid rounded shadow-sm w-100"
                  style={{
                    height: '200px',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                  }}
                />
                <div className="position-absolute bottom-0 left-0 right-0 bg-dark bg-opacity-75 text-white p-2 rounded-bottom">
                  <small className="fw-semibold">{photo.title}</small>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {currentPhotos.length === 0 && (
          <Row>
            <Col md={12} className="text-center">
              <p className="text-muted">No photos available for this section.</p>
            </Col>
          </Row>
        )}

      </Container>
    </div>
  );
}

export default Gallery;