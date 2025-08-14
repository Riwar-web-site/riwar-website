import React from 'react'
import { Container } from 'react-bootstrap'
import '../Style/NACC.css'; // Assuming you have a CSS file for styling
function NACC() {
  return (
    <div style={{marginTop:"8rem"}}>
      <Container >
        <h1>Riwar collage NAAC</h1>
        <p  style={{color:'black'}}> Riwar College’s Internal Quality Assurance Cell (IQAC) was established in 2021 to spearhead the college’s progress towards NAAC accreditation, enhance quality benchmarks, and facilitate self-study, academic audits, and annual quality assurance reporting. As of July 2025, the college is engaged in NAAC readiness and documentation but is not yet NAAC accredited or in possession of a Peer Team Report. For quality initiatives, reports, and further details, the IQAC office at Riwar College may be contacted directly.
        </p>
     <div style={{marginTop:"70px"}}>
        <details>
            <summary>NAAC Readiness</summary>
            <ul>
                <li>Contact Point: For queries related to quality assurance, self-study reports, or upcoming NAAC activities, contact the IQAC Co-ordinator (details above).</li>
                <li>Current Status: RIWAR College is in the preparatory stage for its first NAAC cycle, focusing on internal quality audits, data compilation, and AQAR submission. As of July 2025, no peer team visit or accreditation outcome has yet occurred.</li>
      
            </ul>
        </details>


            <details>
            <summary>Recent Quality Initiatives</summary>
            <ul>
                <li>Development of detailed academic and administrative procedural manuals.

</li>
                <li>Regular organization of orientation, quality awareness, and staff upgrading workshops.

</li>
                <li>Self-evaluation of all processes and outcomes in preparation for first NAAC assessment.

</li>
                <li>Encouragement of innovative teaching, mentoring, and student support mechanisms.

</li>
                <li>Enhancement of documentation and periodic reporting for all institutional processes.

</li>
               
            </ul>
        </details>

            <details>
            <summary>Peer Team Preparation:</summary>
            <ul>
                <li>Guide the college in the process of NAAC accreditation, including compilation of Self-Study Reports (SSR).</li>
               
            </ul>
        </details>

            <details>
            <summary>Stakeholder Interface:</summary>
            <ul>
                <li>Collect feedback from stakeholders (students, parents, staff) to assess strengths and opportunities for improvement.</li>
               
            </ul>
        </details>

            <details>
            <summary>Quality Documentation:</summary>
            <ul>
                <li>Prepare, collect, and maintain documentation relevant to quality assurance, institutional self-study, and NAAC records.</li>
                <li>Prepare and submit the Annual Quality Assurance Report (AQAR) to NAAC as required.</li>
               
            </ul>
        </details>

        
    </div>
      </Container>
    </div>
  )
}

export default NACC
