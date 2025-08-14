import React from 'react'
import { Container } from 'react-bootstrap'
import '../Style/Admission.css'; // Assuming you have a CSS file for styling

function Admission() {
  return (
    <div className="admission-section" style={{marginTop:"5rem"}}>
  <Container>
    <h1 className="admission-heading">Under Graduate Degree</h1>
    
    <div className="admission-card" style={{ marginTop: '40px' }}>
      <p className="admission-paragraph">The College offers Bachelor of Arts (B.A.) degree programs. The undergraduate curriculum is designed to provide holistic and value-based education to the students of the Riwar region and beyond.</p>
    </div>

    <div className="admission-card">
      <h2 className="admission-subheading">Courses Offered:</h2>
      <p className="admission-info">English (Honours & General)</p>
      <p className="admission-info">Political Science</p>
      <p className="admission-info">Sociology</p>
      <p className="admission-info">Philosophy</p>
      <p className="admission-info">Economics</p>
    </div>
    <div className="admission-card">
      <h2 className="admission-subheading">Details Needed to be filled</h2>
      <p className="admission-info">List of details needed to be filled:</p>
      <ul>
  <li>Duly filled application form (available online/offline after HSSLC/12th results).</li>
  <li>3 recent passport-size photographs (one affixed to the form).</li>
  <li>Copy of HSSLC (Class XII) or equivalent marksheet.</li>
  <li>Copy of Class X certificate or birth certificate.</li>
  <li>Caste certificate (if applicable).</li>
  <li>Migration certificate (for boards other than MBOSE).</li>
  <li>Supporting documents for differently-abled/EWS/other categories (where applicable).</li>
  <li>Address and contact details.</li>
  <li>Admission fee payment receipt.</li>
</ul>

     
    </div>

    <div className="admission-card">
      <h4 className="admission-subheading">Additional Information</h4>
      <p className="admission-info">The B.A. (Honours) in English was introduced in 2016.

      </p>
      <p className="admission-info">The B.A. curriculum includes major and minor subjects, as well as value-added and skill-based papers (MDC, AEC, SEC, VAC, VTC).

      </p>
      <p className="admission-info">The list of selected candidates will be displayed on the College Notice Board/Online.

</p>
      <p className="admission-info">Admission must be completed within the specified deadline, or the seat will be forfeited.

</p>
      <p className="admission-info">Further updates are to be checked regularly on the College Notice Board or by contacting the College Office</p>
      <p className="admission-info">Incomplete applications will not be considered.

</p>
    </div>

    {/* link to student registration */}
  </Container>
</div>

  )
}

export default Admission
