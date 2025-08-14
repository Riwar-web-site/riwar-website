import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import PdfGallery from '../PDFCardList/PdfGallery';

function IQAC() {

    let [list,setList]=useState([]);
    let [pdf,setPdf]=useState([]);

    useEffect(() => {
  const fetchData = async () => {
    try {
      console.log("start fetching data");
      let response = await fetch("http://localhost:8080/doc-iqac/list");
      let listData = await response.json();
      setList(listData);
      console.log(listData);

      console.log("=======================================");
       let response1 = await fetch(`http://localhost:8080/doc-iqac/download/${1}`);
          let blob = await response1.blob();
          let url =URL.createObjectURL(blob);

          return res;
      
      
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  fetchData();
}, []);

  return (
    <div>
     
     <div style={{marginTop:"8rem"}}>
      <Container >
        <h1>Riwar collage IQAC</h1>
        <p style={{color:"black"}}>Established: 2021 at Riwar College to spearhead quality enhancement and NAAC readiness as per national higher education standards.

Purpose: To build and sustain a robust framework for academic improvement and institutional accountability, ensuring ongoing compliance with NAAC (National Assessment and Accreditation Council) requirements.
        </p>
     <div style={{marginTop:"70px"}}>
        <details>
            <summary> Establishment & Mandate</summary>
            <ul>
                <li>Established: 2021 at Riwar College to spearhead quality enhancement and NAAC readiness as per national higher education standards.</li>
                <li>Purpose: To build and sustain a robust framework for academic improvement and institutional accountability, ensuring ongoing compliance with NAAC (National Assessment and Accreditation Council) requirements.</li>
               
            </ul>
        </details>


            <details>
            <summary> Objectives</summary>
            <ul>
                <li>Develop quality benchmarks and parameters for various institutional activities (academic, administrative, extra-curricular)</li>
                <li>Facilitate a learner-centered environment with state-of-the-art teaching-learning processes.</li>
                <li>Ensure equitable academic access for all sections of students, especially from rural/tribal backgrounds.</li>
                <li>Systematically document and promote best practices, innovations, and quality achievements.</li>
               
            </ul>
        </details>

            <details>
            <summary>Planning & Implementation:</summary>
            <ul>
                <li>Act as a catalyst for initiating and coordinating quality improvement activities and reforms.</li>
                <li>Support the design and review of teaching-learning methods, evaluation procedures, and feedback mechanisms.</li>
              
            </ul>
        </details>

            <details>
            <summary>Workshops/Seminars:</summary>
            <ul>
                <li>Organize seminars, workshops, and awareness programs on quality assurance, teaching innovations, and NAAC guidelines.</li>
              
            </ul>
        </details>

            <details>
            <summary>Quality Documentation:</summary>
            <ul>
                <li>Prepare, collect, and maintain documentation relevant to quality assurance, institutional self-study, and NAAC records.</li>
            </ul>
        </details>
    </div>
                    
       <PdfGallery/>          
      </Container>
    </div>

    </div>
  )
}

export default IQAC
