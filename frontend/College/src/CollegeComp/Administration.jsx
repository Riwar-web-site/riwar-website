import React, { useState } from 'react';

function Administration() {
  const [tab, setTab] = useState('principals');

  const tabStyle = (isActive) => ({
    background: isActive ? "#f5f5f5" : "#fff",
    border: "1px solid #ddd",
    borderBottom: isActive ? "2px solid #007BFF" : "1px solid #ddd",
    padding: "12px 24px",
    cursor: "pointer",
    fontWeight: isActive ? "600" : "500",
    color: isActive ? "#007BFF" : "#333",
    borderRadius: "6px 6px 0 0",
    marginRight: 8,
    outline: "none"
  });

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: 32,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
  };

  const thTdStyle = {
    border: "1px solid #ddd",
    padding: "12px",
    textAlign: "left"
  };

  const thStyle = {
    ...thTdStyle,
    backgroundColor: "#f1f1f1",
    fontWeight: 600
  };

  return (
    <div style={{ marginTop: "7rem", fontFamily: "'Segoe UI', sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh", paddingBottom: 50 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: 24, backgroundColor: "#fff", borderRadius: 8, boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
        <div style={{ borderBottom: "1px solid #ddd", marginBottom: 24, display: "flex" }}>
          <button style={tabStyle(tab === 'principals')} onClick={() => setTab('principals')}>List of Principals & Governing Body</button>
          {/* <button style={tabStyle(tab === 'vicePrincipals')} onClick={() => setTab('vicePrincipals')}>List of Vice Principals</button> */}
          {/* <button style={tabStyle(tab === 'governingBody')} onClick={() => setTab('governingBody')}>Present Governing Body</button> */}
        </div>

        {tab === 'principals' && (
          <div style={{ width: '100%', overflowX: 'auto', maxWidth: '100%' }}>
            <table style={{ ...tableStyle, minWidth: 700 }}>
              <thead>
                <tr>
                  <th style={thStyle}>#</th>
                  <th style={thStyle}>Name</th>
                  <th style={thStyle}>Qualification</th>
                  <th style={thStyle}>Designation</th>
                  <th style={thStyle}>Date of Appointment</th>
                  <th style={thStyle}>Mobile</th>
                  <th style={thStyle}>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: "#fafafa" }}>
                  <td style={thTdStyle}>1</td>
                  <td style={thTdStyle}>Dr. Sashankutlang Khongthohrem</td>
                  <td style={thTdStyle}>M.A, M. Phil, Ph.D</td>
                  <td style={thTdStyle}>Principal</td>
                  <td style={thTdStyle}>04/06/2022</td>
                  <td style={thTdStyle}>9383289871</td>
                  <td style={thTdStyle}>principal.riwarcollege@gmail.com / riwar.college1@gmail.com</td>
                </tr>
                <tr>
                  <td style={thTdStyle}>2</td>
                  <td style={thTdStyle}>Ms. Andrena Lyngdoh</td>
                  <td style={thTdStyle}>M.A, NET</td>
                  <td style={thTdStyle}>Vice Principal</td>
                  <td style={thTdStyle}>25/05/2018</td>
                  <td style={thTdStyle}>8787496278</td>
                  <td style={thTdStyle}>rc.v.principal@gmail.com</td>
                </tr>
                <tr>
                  <td style={thTdStyle}>3</td>
                  <td style={thTdStyle}>Mr. Wanbha Khongsdam</td>
                  <td style={thTdStyle}>M.A, NET</td>
                  <td style={thTdStyle}>IQAC, Co-ordinator</td>
                  <td style={thTdStyle}>01/09/2021</td>
                  <td style={thTdStyle}>9774077537</td>
                  <td style={thTdStyle}>riwarcollege.iqac@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* {tab === 'vicePrincipals' && (
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>#</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Tenure</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: "#fafafa" }}>
                <td style={thTdStyle}>1</td>
                <td style={thTdStyle}>Dr. ABC</td>
                <td style={thTdStyle}>2010 - 2015</td>
              </tr>
            </tbody>
          </table>
        )} */}

        {/* {tab === 'governingBody' && (
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>#</th>
                <th style={thStyle}>Member</th>
                <th style={thStyle}>Position</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: "#fafafa" }}>
                <td style={thTdStyle}>1</td>
                <td style={thTdStyle}>Prof. XYZ</td>
                <td style={thTdStyle}>Chairman</td>
              </tr>
            </tbody>
          </table>
        )} */}
      </div>
    </div>
  );
}

export default Administration;
