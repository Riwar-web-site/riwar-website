import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import '../Style/Publication.css';

function Publication() {
  const staffData = [
  // ... (other tables)
  {
    title: "Administrative Staff",
    rows: [
      ["Dr. Sashankutlang Khongthohrem", "Principal", "Administration", "9383289871 / principal.riwarcollege@gmail.com"],
      ["Ms. Andrena Lyngdoh", "Vice Principal", "Administration", "8787496278 / rc.v.principal@gmail.com"],
      ["Mr. Wanbha Khongsdam", "IQAC Co-ordinator", "IQAC/Economics", "9774077537 / riwarcollege.iqac@gmail.com"],
      ["Shri. Teinamborlang Khongjee", "Accountant", "Accounts", ""],
      ["Shri. Khrawboklang Khongbeh", "UDA", "Administration", ""],
      ["Shri. Myllungbakhraw Nongkrot", "UDA", "Administration", ""]
    ]
  }
];

    

  return (
    <div className="supporting-staff-bg py-5 animate-bg mt-5">
      <Container>
        {staffData.map((section, index) => (
          <Card key={index} className="mb-5 glass-card enhanced-card hover-glow fade-in scale-up">
            <Card.Body>
              <h2 className="text-center mb-4 text-primary fw-bold slide-down-fade subtle-glow-light">{section.title}</h2>
              <div className="table-responsive">
                <table className="styled-table w-100">
                  <thead>
                    <tr>
                      <th>Staff Name</th>
                      <th>Designation</th>
                      <th>Department</th>
                      <th>Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows.map((row, idx) => (
                      <tr key={idx} className="row-animate">
                        {row.map((col, i) => (
                          <td key={i}>{col}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
}

export default Publication;
