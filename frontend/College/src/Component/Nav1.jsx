import React, { useState } from 'react';
import '../Style/Nav1.css'; // Ensure you have this CSS file for styling

const Nav1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleDropdownToggle = (item) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  return (
    <nav className="navbar navbar-expand-lg glassy-navbar">
      <div className="container-fluid d-flex flex-wrap align-items-center justify-content-between">
        <div className="logo fw-bold fs-4 text-dark">🔥College</div>

        <div className="search-bar ms-auto me-3">
          <input className="form-control" type="text" placeholder="Search..." />
        </div>

        <button className="navbar-toggler toggle-btn" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon">☰</span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <div className="navbar-nav w-100 overflow-auto flex-row flex-lg-wrap menu-scroll">
            <div className="nav-item menu-item">Home</div>
            <div className="nav-item menu-item">IAQC</div>

            <div className="nav-item menu-item" onClick={() => handleDropdownToggle('college')}>
              College
              {openDropdown === 'college' && (
                <div className="dropdown">
                  <a href="#">About </a>
                  <a href="#">Administration</a>
                  <a href="#">NAAC</a>
                </div>
              )}
            </div>

            <div className="nav-item menu-item" onClick={() => handleDropdownToggle('academics')}>
              Academics
              {openDropdown === 'academics' && (
                <div className="dropdown">
                  <a href="#">Admission</a>
                  <a href="#">Department</a>
                  <a href="#">Course</a>
                  <a href="#">Supporting Staff</a>
                  <a href="#">Publication</a>
                  <a href="#">Research And Innovation Publication Cell</a>
                  <a href="#">Achievements</a>
                </div>
              )}
            </div>

            <div className="nav-item menu-item" onClick={() => handleDropdownToggle('cell')}>
              Cell
              {openDropdown === 'cell' && (
                <div className="dropdown">
                  <a href="#">Women Cell</a>
                  <a href="#">Entrepreneurship Development Cell</a>
                  <a href="#">Information Career Guidence And Placement Cell</a>
                  <a href="#">Gender Equity Monitoring Cell</a>
                  <a href="#">Equal Opportunity Cell</a>
                  <a href="#">ICT Development Cell</a>
                  <a href="#">Sports Development Cell</a>
                </div>
              )}
            </div>

            <div className="nav-item menu-item" onClick={() => handleDropdownToggle('committee')}>
              Committee
              {openDropdown === 'committee' && (
                <div className="dropdown">
                  <a href="#">Anti Ragging Committee</a>
                  <a href="#">Grievance Redressal Committee</a>
                  <a href="#">Internal Complaint Committee</a>
                  <a href="#">Art & Culture Committee</a>
                  <a href="#">Green Campus Development Committee</a>
                  <a href="#">Disaster Risk Management Committee</a>
                  <a href="#">Health Care Committee</a>
                  <a href="#">Co-curricular Committee</a>
                </div>
              )}
            </div>

            <div className="nav-item menu-item" onClick={() => handleDropdownToggle('students')}>
              Students
              {openDropdown === 'students' && (
                <div className="dropdown">
                  <a href="#">Awards and Scholarship</a>
                  <a href="#">Achievement</a>
                  <a href="#">NCC</a>
                  <a href="#">NSS</a>
                  <a href="#">Red Ribbion Club</a>
                  <a href="#">Student's Union</a>
                  <a href="#">Ranger & Rover</a>
                  <a href="#">Student's Club</a>
                  <a href="#">Youth Red Cross</a>
                </div>
              )}
            </div>

            <div className="nav-item menu-item" onClick={() => handleDropdownToggle('facilities')}>
              Facilities
              {openDropdown === 'facilities' && (
                <div className="dropdown">
                  <a href="#">Hostel</a>
                  <a href="#">Art & Cultural Gallery</a>
                  <a href="#">Gymnasium</a>
                </div>
              )}
            </div>

            <div className="nav-item menu-item" onClick={() => handleDropdownToggle('society')}>
              Society
              {openDropdown === 'society' && (
                <div className="dropdown">
                  <a href="#">Riwar College</a>
                  <a href="#">Cooperative Society</a>
                </div>
              )}
            </div>

            <div className="nav-item menu-item">Infrasturcture</div>
            <div className="nav-item menu-item">Library</div>
            <div className="nav-item menu-item">Contact</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav1;
