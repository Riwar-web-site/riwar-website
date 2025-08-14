import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Style/NavbarStyles.css'; // Import the CSS file for styles
import {useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import img3 from '../assets/img3.webp'

// import { searchItems } from '../data/searchItems';
// import { Link } from 'react-router-dom';

const searchItems = [
  { label: "Home", path: "/" },
  { label: "Library", path: "/library" },
  { label: "IQAC", path: "/iqac" },
  { label: "About College", path: "/aboutcollege" },
  { label: "Administration", path: "/administration" },
  { label: "NACC", path: "/nacc" },
  { label: "Admissions", path: "/admission123" },
  { label: "Departments", path: "/departments" },
  { label: "Courses", path: "/courses" },
  { label: "Supporting Staff", path: "/supportingstaff" },
  { label: "Publication", path: "/publication" },
  { label: "Research And Innovation", path: "/researchandinnovationpublicationcell" },
  { label: "Achievements", path: "/achievements" },
  { label: "Achievements (Alt)", path: "/achivements" },
  { label: "Women Cell", path: "/womencell" },
  { label: "Entrepreneurship Cell", path: "/entrepreneurshipdevelopmentcell" },
  { label: "ICGC", path: "/informationcareerguidenceandplacementcell" },
  { label: "Gender Equity", path: "/genderequitymonitoringcell" },
  { label: "ICT Development", path: "/ictdevelopmentcell" },
  { label: "Equal Opportunity", path: "/equaloppertunity" },
  { label: "Sports Cell", path: "/sportdevelopmentcell" },
  { label: "Anti-Ragging Committee", path: "/antiraggingcommittee" },
  { label: "Grievance Cell", path: "/grievancecell" },
  { label: "Internal Complaint Committee", path: "/internalcomplaintcommittee" },
  { label: "Art & Culture Committee", path: "/artandculturecommittee" },
  { label: "Green Campus", path: "/greencampus" },
  { label: "Health Care Committee", path: "/healthcarecommittee" },
  { label: "Awards & Scholarship", path: "/awardsandscholarship" },
  { label: "NCC", path: "/ncc" },
  { label: "NSS", path: "/nss" },
  { label: "Red Ribbon Club", path: "/redribbonclub" },
  { label: "Students Union", path: "/studentsunion" },
  { label: "Ranger & Rover", path: "/rangerandrover" },
  { label: "Student Club", path: "/studentclub" },
  { label: "Youth Red Cross", path: "/youthredcross" },
  { label: "Hostel & Facilities", path: "/facilitieshostel" },
  { label: "Gymnasium", path: "/gymnasium" },
  { label: "R College", path: "/rcollege" },
  { label: "Journals", path: "/journals" },
  { label: "Contact", path: "/contact" },
  { label: "Login Up", path: "/login" }
  
];


function NavScrollExample() {












  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();

  
  const handleSearch = (e) => {
    const val = e.target.value;
    setQuery(val);
    if (val.length > 0) {
      const matches = searchItems.filter(item =>
        item.label.toLowerCase().includes(val.toLowerCase())
      );
      setFiltered(matches);
    } else {
      setFiltered([]);
    }
  };

  const handleSelect = (path) => {
    navigate(path);
    setQuery('');
    setFiltered([]);
  };



  function findOnclick(e)
  {
    
   console.log(filtered);
   filtered.filter((e)=>{
    if(e.label.toLowerCase() === query.toLowerCase())
      {
        navigate(e.path);
      }
   })
   


    setQuery('');
    setFiltered([]);
  }


  return (
  <div className="product" >
    <Navbar expand="lg" className="glass-navbar" justify variant="tabs">
      <Container fluid>
        <Navbar.Brand href="/" className="brand-text">
          <img src={img3} alt="" style={{width:"80px" ,height:"70px"}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"  className="custom-collapse">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to="/" as={NavLink} className="nav-item-link"  >Home</Nav.Link>




            <NavDropdown title="College" id="navbarScrollingDropdown">
              <NavDropdown.Item to="/aboutcollege" as={NavLink} className="nav-item-link" >About</NavDropdown.Item>
              <NavDropdown.Item to="/administration" as={NavLink} className="nav-item-link" >Administration</NavDropdown.Item>

              <NavDropdown.Item to="/nacc" as={NavLink} className="nav-item-link" >NAAC</NavDropdown.Item>
           </NavDropdown>


            <Nav.Link to="/iqac" as={NavLink} className="nav-item-link" >IAQC</Nav.Link>





            <NavDropdown title="Academics" id="navbarScrollingDropdown" >
              <NavDropdown.Item to="/admission123" as={NavLink} className="nav-item-link" >Admission</NavDropdown.Item>
              <NavDropdown.Item to="/courses" as={NavLink} className="nav-item-link" >Course</NavDropdown.Item>
              <NavDropdown.Item to="/departments" as={NavLink} className="nav-item-link" >Department</NavDropdown.Item>

              <NavDropdown.Item to="/supportingstaff" as={NavLink} className="nav-item-link" >Faculty Staff</NavDropdown.Item>
              <NavDropdown.Item to="/publication" as={NavLink} className="nav-item-link" >Adminstrative staff</NavDropdown.Item>



              {/* <NavDropdown.Item to="/researchandinnovationpublicationcell" as={NavLink} className="nav-item-link" >Research And Innovation Publication Cell</NavDropdown.Item> */}
              {/* <NavDropdown.Item to="/achievements" as={NavLink} className="nav-item-link" >Achievements</NavDropdown.Item> */}

            </NavDropdown>




{/* 
            <NavDropdown title="Cell" id="navbarScrollingDropdown">
              <NavDropdown.Item to="/womencell" as={NavLink} className="nav-item-link" >Women Cell</NavDropdown.Item>
              <NavDropdown.Item to="/entrepreneurshipdevelopmentcell" as={NavLink} className="nav-item-link" >Entrepreneurship Development Cell</NavDropdown.Item>
              <NavDropdown.Item to="/informationcareerguidenceandplacementcell" as={NavLink} className="nav-item-link" >Information Career Guidence And Placement Cell</NavDropdown.Item>
              <NavDropdown.Item to="/genderequitymonitoringcell" as={NavLink} className="nav-item-link" >Gender Equity Monitoring Cell</NavDropdown.Item>
              <NavDropdown.Item to="/equaloppertunity" as={NavLink} className="nav-item-link" >Equal Opportunity Cell</NavDropdown.Item>
              <NavDropdown.Item to="/ictdevelopmentcell" as={NavLink} className="nav-item-link" >ICT Development Cell</NavDropdown.Item>
              <NavDropdown.Item to="/sportdevelopmentcell" as={NavLink} className="nav-item-link" >Sports Development Cell</NavDropdown.Item>
            
            </NavDropdown> */}






            <NavDropdown title="Committee" id="navbarScrollingDropdown">
              <NavDropdown.Item to="/antiraggingcommittee" as={NavLink} className="nav-item-link" >Anti Ragging Committee</NavDropdown.Item>
              {/* <NavDropdown.Item to="/grievancecell" as={NavLink} className="nav-item-link" >Grievance Redressal Committee</NavDropdown.Item>
              <NavDropdown.Item to="/internalcomplaintcommittee" as={NavLink} className="nav-item-link" >Internal Complaint Committee</NavDropdown.Item>
              <NavDropdown.Item to="/artandculturecommittee" as={NavLink} className="nav-item-link" >Art & Culture Committee</NavDropdown.Item>
              <NavDropdown.Item to="/healthcarecommittee" as={NavLink} className="nav-item-link" >Health Care Committee</NavDropdown.Item>
              <NavDropdown.Item to="/greencampus" as={NavLink} className="nav-item-link" >Green Campus Development Committee</NavDropdown.Item> */}
             
             
            </NavDropdown>




            <NavDropdown title="Students Life" id="navbarScrollingDropdown" >
              {/* <NavDropdown.Item to="/awardsandscholarship" as={NavLink} className="nav-item-link" >Awards</NavDropdown.Item> */}
              <NavDropdown.Item to="/achivements" as={NavLink} className="nav-item-link" > Award & Achievement</NavDropdown.Item>
              <NavDropdown.Item to="/ncc" as={NavLink} className="nav-item-link" >NCC / NSS</NavDropdown.Item>
              {/* <NavDropdown.Item to="/nss" as={NavLink} className="nav-item-link" >NSS</NavDropdown.Item> */}
              <NavDropdown.Item to="/redribbonclub" as={NavLink} className="nav-item-link" >Book Club</NavDropdown.Item>
              <NavDropdown.Item to="/studentsunion" as={NavLink} className="nav-item-link" >Student's Union</NavDropdown.Item>
              <NavDropdown.Item to="/rangerandrover" as={NavLink} className="nav-item-link" >Sport facalities</NavDropdown.Item>
            
           
              {/* <NavDropdown.Item href="#action5"></NavDropdown.Item> */}
            </NavDropdown>

            <Nav.Link to="/library" as={NavLink} className="nav-item-link" >Library</Nav.Link>
            <Nav.Link to="/journals" as={NavLink} className="nav-item-link" >College Report</Nav.Link>



            {/* <NavDropdown title="Facilities" id="navbarScrollingDropdown">
              <NavDropdown.Item to="/facilitieshostel" as={NavLink} className="nav-item-link" >Hostel & Facilities</NavDropdown.Item>
              <NavDropdown.Item to="/gymnasium" as={NavLink} className="nav-item-link" >Gymnasium</NavDropdown.Item>             
              <NavDropdown.Item to="#action5" as={NavLink} className="nav-item-link" ></NavDropdown.Item>
            </NavDropdown> */}


            <NavDropdown title="Society" id="navbarScrollingDropdown">
              <NavDropdown.Item to="/rcollege" as={NavLink} className="nav-item-link" >Riwar College</NavDropdown.Item>
            </NavDropdown>





            <Nav.Link to="/gallery" as={NavLink} className="nav-item-link" >Gallery</Nav.Link>
            <Nav.Link to="/contact" as={NavLink} className="nav-item-link" >Contact</Nav.Link>



              {/* <Nav.Link href="#" disabled>
                Coming Soon
              </Nav.Link> */}
              
          </Nav>
          



<div className="position-relative w-90">
      <Form className="d-flex position-relative" onSubmit={findOnclick} >
        <Form.Control
          type="search"
          value={query}
          onChange={handleSearch}
          placeholder="Search..."
          className="me-2 neu-input"
          aria-label="Search"
          style={{fontStyle:"normal", fontWeight:"500"}}
        />
        <Button type="submit" variant="outline-success" className="neu-button" >Search</Button>
      </Form>

      {filtered.length > 0 && (
        <ul className="position-absolute bg-white list-group shadow" style={{
    zIndex: 999,
    top: '100%',
    left: 0,
    right: 0,
    maxHeight: '450px',     // ✅ Limit height
    overflowY: 'auto',       // ✅ Add scroll if needed
    overflowX: 'hidden'      // ✅ Avoid horizontal scroll
  }}>
          {filtered.map((item, idx) => (
            <li key={idx} className="list-group-item list-group-item-action text-center" onClick={() => handleSelect(item.path)}>
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
































        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
  );
}

export default NavScrollExample;
