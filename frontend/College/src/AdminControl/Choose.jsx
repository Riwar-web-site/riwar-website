import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserPlus, FaUpload, FaUniversity } from 'react-icons/fa';

function Choose() {
  return (
    <div style={{marginTop:"8rem", display:"flex"}}>
      <div style={styles.card}>
        
        <h2 style={styles.title}>What would you like to do?</h2>
        <div style={styles.buttonContainer}>
         
          <NavLink to="/api/auth/upload" style={{border:"2px solid blue", padding:"5px " }} activeStyle={styles.activeButton}>
            <FaUpload style={styles.buttonIcon} /> Upload About College
          </NavLink>
          <NavLink to="/api/auth/upload/iqac" style={{border:"2px solid blue", padding:"5px ", marginLeft:"2rem"}} activeStyle={styles.activeButton}>
            <FaUpload style={styles.buttonIcon} /> Upload to IQAC
          </NavLink>
        </div>
        <p style={styles.note}>This is the Choose page</p>
      </div>
    </div>
  );
}

// --- Styles ---
const styles = {
 };

export default Choose;
