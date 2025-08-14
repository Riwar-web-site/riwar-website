import React from 'react';
import { Container, Card } from 'react-bootstrap';
import '../Style/SupportingStaff.css';

function SupportingStaff() {
  const staffData = [
  {
    title: "List of Non-Teaching Staff Members & DOJ",
    rows: [
      ["Shri. Reward Masynting", "Deputy Librarian", "Library", ""],
      ["Shri. Khrawboklang Khongbeh", "UDA", "Administration", ""],
      ["Shri. Teinamborlang Khongjee", "Accountant", "Accounts", ""],
      ["Shri. Myllungbakhraw Nongkrot", "UDA", "Administration", ""],
      ["Shri. Jornewel Khongthohrem", "Driver", "Transport", ""],
      ["Shri. Jodskhem Mawkon", "Driver", "Transport", ""],
      ["Smt. Bashisha Khongsit", "Cleaner", "Support", ""],
      ["Smt. Ribhahun Khongthohrem", "Cleaner", "Support", ""],
      ["Shri. Kynder Khongthohrem", "Chowkidar", "Security", ""]
    ]
  },
  {
    title: "College Post",
    rows: [
      ["Dr. Sashankutlang Khongthohrem", "Principal", "Administration", "9383289871"],
      ["Smt. Andrena Lyngdoh", "Vice Principal", "Administration", "8787496278"],
      ["Mr. Wanbha Khongsdam", "IQAC Co-ordinator", "Economics/IQAC", "9774077537"]
    ]
  },
 
  {
    title: "New Employee Details",
    rows: [
      ["Smt. Indralyne Khongwet", "Asst. Professor", "English", " -"],
      ["Shri. Banshemphang Nongneng", "Asst. Professor", "Khasi", "-"],
      ["Smt. Badalin Kurbah", "Asst. Professor", "Philosophy", "-"],
      ["Smt. Babetlin Kharchandy", "Asst. Professor", "Education", "-"],
      ["Smt. Daroilin Lyngdoh", "Asst. Professor", "Economics", "-"],
      ["Smt. Lawanshai Nongrum", "Asst. Professor", "Sociology", "-"],
      ["Smt. Mantina Mawiong", "Asst. Professor", "Economics", "-"]
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

export default SupportingStaff;
