import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserPlus, FaUpload, FaUniversity, FaSignOutAlt } from 'react-icons/fa';
import LogoutButton from './LogoutButton';
import authUtils from '../utils/auth';

function Choose() {
  const user = authUtils.getUser();

  return (
    <div style={{marginTop:"8rem", display:"flex", justifyContent: "center"}}>
      <div style={styles.card}>
        {/* User Info Header */}
        {user && (
          <div style={styles.userHeader}>
            <div style={styles.welcomeText}>
              <h3>Welcome back!</h3>
              <p>Logged in as: <strong>{user.email}</strong></p>
            </div>
            <LogoutButton 
              className="logout-header-btn"
              style={styles.logoutButton}
            >
              <FaSignOutAlt /> Logout
            </LogoutButton>
          </div>
        )}
        
        <h2 style={styles.title}>What would you like to do?</h2>
        <div style={styles.buttonContainer}>
          <NavLink to="/register" style={styles.navButton} activeStyle={styles.activeButton}>
            <FaUserPlus style={styles.buttonIcon} /> Register New User
          </NavLink>
          <NavLink to="/api/auth/upload" style={styles.navButton} activeStyle={styles.activeButton}>
            <FaUpload style={styles.buttonIcon} /> Upload About College
          </NavLink>
          <NavLink to="/api/auth/upload/iqac" style={styles.navButton} activeStyle={styles.activeButton}>
            <FaUpload style={styles.buttonIcon} /> Upload to IQAC
          </NavLink>
        </div>
        <p style={styles.note}>Choose your preferred action from the options above</p>
      </div>
    </div>
  );
}

// --- Styles ---
const styles = {
  card: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '600px',
    textAlign: 'center'
  },
  userHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
    padding: '1rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    border: '1px solid #dee2e6'
  },
  welcomeText: {
    textAlign: 'left'
  },
  logoutButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    fontSize: '0.9rem'
  },
  title: {
    color: '#333',
    marginBottom: '1.5rem',
    fontSize: '1.8rem'
  },
  buttonContainer: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '1.5rem'
  },
  navButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    border: '2px solid #007bff',
    padding: '12px 20px',
    textDecoration: 'none',
    color: '#007bff',
    borderRadius: '6px',
    transition: 'all 0.3s ease',
    fontWeight: '500',
    backgroundColor: 'white'
  },
  buttonIcon: {
    fontSize: '1.1rem'
  },
  activeButton: {
    backgroundColor: '#007bff',
    color: 'white'
  },
  note: {
    color: '#666',
    fontSize: '0.9rem',
    fontStyle: 'italic',
    margin: 0
  }
};

export default Choose;
