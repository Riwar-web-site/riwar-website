import React from 'react';
import { Container, Card } from 'react-bootstrap';
import '../Style/Courses.css';

function Courses() {
  return (
    <div className="course-bg py-5 animate-bg" style={{marginTop:"6rem"}}>
      <Container>
        <h2 className="mb-5 text-center fw-bold display-4 slide-down-fade rainbow-glow">Courses Offered</h2>

        <h3 className="mb-3 text-primary fw-semibold fade-in scale-up underline">General Course UG</h3>

        <Card className="mb-4 glass-card enhanced-card hover-glow bounce-in tilt-card">
          <Card.Body>
            <p style={{color:"black", marginTop:""}}>Riwar College offers a Bachelor of Arts (B.A.) degree under Choice Based Credit System (CBCS) with a range of Honours and General/Core courses and a robust set of skill and value-added papers.</p>
          </Card.Body>
        </Card>

        <Card className="mb-4 glass-card enhanced-card hover-glow bounce-in tilt-card">
          <Card.Body>
            <table className="styled-table zoom-in">
               <thead>
              <tr>
                <th>Category</th>
                <th>Description</th>
                <th>Examples</th>
              </tr>
               </thead>
              <tbody>
    <tr>
      <td>Major (Honours) Subject</td>
      <td>Main specialization (core papers)</td>
      <td>English, Khasi, Education, etc.</td>
    </tr>
    <tr>
      <td>Minor Subject(s)</td>
      <td>Additional supporting discipline(s)</td>
      <td>Varies by student’s selection</td>
    </tr>
    <tr>
      <td>Multi-Disciplinary Courses (MDC)</td>
      <td>Broader knowledge across fields</td>
      <td>Culture &amp; Society, Educational Psychology, Financial Literacy, etc.</td>
    </tr>
    <tr>
      <td>AEC/SEC</td>
      <td>Language, communication, personal/professional skills</td>
      <td>Alternative English, Communication Skills, Critical Reading, Personality Development, etc.</td>
    </tr>
    <tr>
      <td>Value Added Courses (VAC)</td>
      <td>Awareness and life enrichment</td>
      <td>Environment Studies, Life Skills Education</td>
    </tr>
    <tr>
      <td>Vocational Training Courses (VTC)</td>
      <td>Practical, hands-on, skill-based electives (from 3rd semester onward)</td>
      <td>Bee-Keeping, Mushroom Cultivation, Food Services, Beauty Care, etc.</td>
    </tr>
  </tbody>
            </table>
          </Card.Body>
        </Card>

        <h3 className="mt-5 mb-3 text-primary fw-semibold fade-in scale-up underline">Professional Courses</h3>

        <Card className="mb-4 glass-card enhanced-card hover-glow bounce-in tilt-card">
          <Card.Body>
 
            <p className="text-muted fade-in-delay rise-text">Riwar College’s focus is on B.A. (Arts) degree programs. As of 2024-2025, the college does not offer BCA, BBA, or Mass Communication as standalone degree programs. All offerings are within the Bachelor of Arts curriculum, with various Honours/General subjects, skill, and value-added courses. Information in your screenshot about BCA, BBA, or Mass Communication is not present in the official document provided and thus should not be listed unless newly introduced or planned for future years.</p></Card.Body>
        </Card>

        <Card className="mb-4 glass-card enhanced-card hover-glow bounce-in tilt-card">
          <Card.Body>
            <h4 className="fw-bold text-dark">Multi-Disciplinary Courses (MDC)</h4>
            <p className="text-muted fade-in-delay rise-text">Culture and Society</p>
<p className="text-muted fade-in-delay rise-text">Fundamental of Lifelong Learning</p>
<p className="text-muted fade-in-delay rise-text">Financial Literacy</p>
<p className="text-muted fade-in-delay rise-text">National Service Scheme</p>
<p className="text-muted fade-in-delay rise-text">Physical Education and Sports Science</p>
          </Card.Body>
        </Card>

        <Card className="mb-4 glass-card enhanced-card hover-glow bounce-in tilt-card">
          <Card.Body>
            <h4 className="fw-bold text-dark">Ability Enhancement Courses (AEC) </h4>
            <p className="text-muted fade-in-delay rise-text">Alternative English</p>
<p className="text-muted fade-in-delay rise-text">MIL (Khasi)</p>
<p className="text-muted fade-in-delay rise-text">Communicative English</p>
<p className="text-muted fade-in-delay rise-text">Critical Reading</p>
          </Card.Body>
        </Card>



        <Card className="mb-4 glass-card enhanced-card hover-glow bounce-in tilt-card">
          <Card.Body>
            <h4 className="fw-bold text-dark">Vocational Training Courses (Elective from 3rd Semester Onward)</h4>
           <p className="text-muted fade-in-delay rise-text">Bee-Keeping</p>
<p className="text-muted fade-in-delay rise-text">Mushroom Cultivation</p>
<p className="text-muted fade-in-delay rise-text">Automobile Repairing</p>
<p className="text-muted fade-in-delay rise-text">Desktop Publishing</p>
<p className="text-muted fade-in-delay rise-text">Food and Beverage Services</p>
<p className="text-muted fade-in-delay rise-text">Khasi Traditional Music</p>
<p className="text-muted fade-in-delay rise-text">Food Processing</p>
<p className="text-muted fade-in-delay rise-text">Beauty Care</p>
<p className="text-muted fade-in-delay rise-text">Organic Farming</p>
<p className="text-muted fade-in-delay rise-text">Carpentry</p>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Courses;
