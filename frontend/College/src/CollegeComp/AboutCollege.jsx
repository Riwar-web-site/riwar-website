import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Style/AboutClg.css';
import PdfGalleryTwo from '../PDFCardList/PdfGalleryTwo';

function AboutCollege() {
  return (
    <div className="about-college-section" style={{marginTop:"6rem"}}>
      <Container >
        <Card className="glass-card mb-4">
          <Card.Body>
            <h2 className="section-heading">Rewar College</h2>
            <p className="section-paragraph">
Riwar College was founded to address the pressing need for accessible quality higher education in the underserved and rural Riwar Mihngi region of Meghalaya. It operates under the sponsorship of the S.K. RiwarMihngi Education Society (SKRMES), established in 2013 by Seng Khasi RiwarMihngi (Pynursla).

The College focuses on promoting universal human values such as truth, peace-loving, righteous conduct, non-violence, and the values enshrined in the Constitution of India. Riwar College emphasizes inclusiveness, integrity, innovation, creativity, and academic quality. The institution fosters participatory global citizenship, critical thinking, and the development of scientific temperament among students.

Key highlights include:

Recognized by the Education Department, Government of Meghalaya, and the Directorate of Higher and Technical Education (DHTE), Government of Meghalaya.

Affiliated on a provisional basis to North-Eastern Hill University (NEHU), Shillong.

Operates as the only Arts College under Seng Khasi RiwarMihngi, focusing on bringing quality higher education to rural and tribal youth.

Strong commitment to community engagement, leadership development, and social responsibility.

Goals of Riwar College
Based on the official objectives and vision stated in your document, here are the core goals of Riwar College:

Deliver high quality, value-based education
To equip students with a strong academic foundation and lifelong learning skills rooted in universal human values.

Promote research, scientific temperament, and innovation
To foster a culture of inquiry, independent thinking, and scientific outlook through curriculum and extra-curricular engagement.

Foster inclusiveness and diversity
To ensure equitable access and a supportive environment for all students, regardless of their background.

Encourage active community engagement and citizenship
To inspire students to participate meaningfully in civic life, both within their local community and as responsible global citizens.

Prepare students for global leadership
To develop graduates capable of leadership roles in various fields, able to contribute positively to society at local, national, and international levels.

Provide facilities and opportunities in rural/tribal regions
Specifically aiming to bridge educational gaps in backward areas, empowering local communities through education.

If you need further details, such as a breakdown of academic programs, governance, or the mission statement verbatim from the prospectus, please specify which section you want next.

Related
How can Riwar College's goals support student engagement and departmental growth
What are the main objectives for developing Riwar College's academic programs
How does Riwar College plan to enhance its political science department in the future
What initiatives could help Riwar College attract more students to its courses
            </p>
          </Card.Body>
        </Card>

        <Card className="glass-card mb-4">
          <Card.Body>
            <h2 className="section-heading">Goals and Objectives</h2>
            <Row>
              {[1].map((goal) => (
                <Col md={6} lg={4} className="mb-3" key={goal}>
                  <Card className="neu-card goal-card " style={{backgroundColor:"#DCE9FF" ,width:"75vw"}}>
                    <Card.Body>
                      <Card.Title>Goal {goal}</Card.Title>
                      <ul>
                        <li>Deliver high-quality, value-based education rooted in universal human values such as truth, peace-loving, righteous conduct, and non-violence.</li>
                        <li>Equip students with strong academic foundations and lifelong learning skills for holistic development.</li>
                      <li>Foster critical thinking, creativity, and a scientific outlook in all learners.</li>
                       <li>Promote research, the development of scientific temperament, and innovation in the curriculum and beyond.</li>
  <li>Ensure an inclusive, supportive, and diverse learning environment for all students, regardless of background.</li>
  <li>Encourage active participation in community initiatives and civic life, enabling students to become engaged citizens both locally and globally.</li>
   <li>Prepare students for global leadership, equipping them for responsible roles in society at local, national, and international levels.</li>
  <li>Instill a sense of social responsibility and participatory global citizenship.</li>
  <li>Provide enhanced educational facilities and opportunities, particularly in rural/tribal and underserved regions, bridging educational gaps and empowering communities.</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>


        <Card className="glass-card mb-4">
          <Card.Body>
            <h2 className="section-heading">Affiliation</h2>
            <div className="section-list">
              {/* {Array.from({ length: 9 }).map((_, i) => (
                <li key={i}>Rewar College is affiliated with top universities and complies with the latest academic standards.</li>
              ))} */}
              Riwar College is recognized by the Education Department, Government of Meghalaya, and the Directorate of Higher and Technical Education (DHTE), Government of Meghalaya.

The college holds a Provisional Affiliation to North-Eastern Hill University (NEHU), Shillong.

All necessary documentation, such as NOC (No Objection Certificate), permission from NEHU, provisional affiliation, renewal of provisional affiliation, and sanctioned posts, are in place and regularly updated according to university and government requirements.

The college adheres to the latest academic standards as mandated by its affiliating bodies.
            </div>
          </Card.Body>
        </Card>

        <Card className="glass-card mb-4">
          <Card.Body>
            <h2 className="section-heading">Administration Contacts</h2>
            <Table striped bordered hover responsive className="glass-table">
              <thead>
                <tr>
                  <th>Designation</th>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Principal</td>
                  <td>Dr. Sashankutlang Khongthohrem</td>
                  <td>9876543210</td>
                  <td>principal.riwarcollege@gmail.com / riwar.college1@gmail.com</td>
                </tr>
                <tr>
                  <td>Vice Principal</td>
                  <td>Ms. Andrena Lyngdoh</td>
                  <td>8787496278</td>
                  <td>rc.v.principal@gmail.com</td>
                </tr>
                <tr>
                  <td>IQAC, Co-ordinator</td>
                  <td>Mr. Wanbha Khongsdam</td>
                  <td>9774077537</td>
                  <td>riwarcollege.iqac@gmail.com</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
        <PdfGalleryTwo/>
      </Container>
    </div>
  );
}

export default AboutCollege;
