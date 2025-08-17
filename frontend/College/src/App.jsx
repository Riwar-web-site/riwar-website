import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Routes, Route } from 'react-router-dom';
import NavScrollExample from './ReuseCompo/NavScrollExample';
import AboutCollege from './CollegeComp/AboutCollege';
import Administration from './CollegeComp/Administration';
import NACC from './CollegeComp/NACC';
import Admission from './Academics/Admission';
import Departments from './Academics/Departments';
import Courses from './Academics/Courses';
import SupportingStaff from './Academics/SupportingStaff';
import Publication from './Academics/Publication';
import ResearchandInnovationPublicationCell from './Academics/ResearchandInnovationPublicationCell';
import Achievements from './Academics/Achivements';
import WomenCell from './Cell/WomenCell';
import EntrepreneurshipDevelopmentCell from './Cell/EntrepreneurshipDevelopmentCell';
import ICGC from './Cell/ICGC';
import GenderEquityMonitoringCell from './Cell/GenderEquityMonitoringCell';
import ICTDevelopmentCell from './Cell/ICTDevelopmentCell';
import EqualOppertunity from './Cell/EqualOppertunity';
import SportDevelopmentCell from './Cell/SportDevelopmentCell';
import AntiRaggingCommittee from './Commitee/AntiRaggingCommittee';
import GrievanceCell from './Commitee/GrievanceCell';
import InternalComplaintCommittee from './Commitee/InternalComplaintCommittee';
import ArtandCultureCommittee from './Commitee/ArtandCultureCommittee';
import GreenCampus from './Commitee/GreenCampus';
import HealthCareCommittee from './Commitee/HealthCareCommittee';
import AwardsandScholarship from './Student/AwardsandScholarship';
import Achivements from './Student/Achivements';
import NCC from './Student/NCC';
import NSS from './Student/NSS';
import RedRibbonClub from './Student/RedRibbonClub';
import StudentsUnion from './Student/StudentsUnion';
import RangerAndRover from './Student/RangerAndRover';
import StudentClub from './Student/StudentClub';
import YouthRedCross from './Student/YouthRedCross';
import FacilitiesHostel from './Facilities/FacilitiesHostel';
import Gymnasium from './Facilities/Gymnasium';
import RCollege from './Society/RCollege';
import Journals from './Journal/Journals';
import Library from './Library/Library';
import Home from './Home/Home';
import IQAC from './IQAC/IQAC';
import Contact from './Contact/Contact';
import Footer from './ReuseCompo/Footer';
import SignUp from './AdminControl/SignUp';
import Login from './AdminControl/Login';
import Register from './AdminControl/Register';
import Logout from './AdminControl/Logout';
import Choose from './AdminControl/Choose';
import Upload from './AdminControl/Upload';
import UploadTwo from './AdminControl/UploadTwo';
import Gallery from './gallery/Gallery';

import Protected from './utils/Protected';
import PageNotFound from './utils/PageNotFound';

export default function App() {
  return (
    <div>
    <NavScrollExample/>
  
<Routes>

  <Route path='/' element={<Home/>}>
      <Route index element={<Footer/>}/>
  </Route>
  <Route path="/library" element={<Library />} />
  <Route path="/iqac" element={<IQAC />} />
  <Route path="/aboutcollege" element={<AboutCollege />} />
  <Route path="/administration" element={<Administration />} />
  <Route path="/nacc" element={<NACC />} />
  <Route path="/admission123" element={<Admission />} />

  <Route path="/departments" element={<Departments />} />
  <Route path="/courses" element={<Courses />} />
  <Route path="/supportingstaff" element={<SupportingStaff />} />
  <Route path="/publication" element={<Publication />} />
  <Route path="/researchandinnovationpublicationcell" element={<ResearchandInnovationPublicationCell />}/>
  <Route path="/achievements" element={<Achievements />} />
  <Route path="/womencell" element={<WomenCell />} />

  <Route path="/entrepreneurshipdevelopmentcell" element={<EntrepreneurshipDevelopmentCell />}/>
  <Route path="/informationcareerguidenceandplacementcell" element={<ICGC />} />
  <Route path="/genderequitymonitoringcell" element={<GenderEquityMonitoringCell />} />
  <Route path="/ictdevelopmentcell" element={<ICTDevelopmentCell />} />
  <Route path="/equaloppertunity" element={<EqualOppertunity />} />
  <Route path="/sportdevelopmentcell" element={<SportDevelopmentCell />} />

  <Route path="/antiraggingcommittee" element={<AntiRaggingCommittee />} />
  <Route path="/grievancecell" element={<GrievanceCell />} />
  <Route path="/internalcomplaintcommittee" element={<InternalComplaintCommittee />} />
  <Route path="/artandculturecommittee" element={<ArtandCultureCommittee />} />
  <Route path="/greencampus" element={<GreenCampus />} />
  <Route path="/healthcarecommittee" element={<HealthCareCommittee />} />


  <Route path="/awardsandscholarship" element={<AwardsandScholarship />}/>
  <Route path="/achivements" element={<Achivements />} />
  <Route path="/ncc" element={<NCC />} />
  <Route path="/nss" element={<NSS />} />
  <Route path="/redribbonclub" element={<RedRibbonClub />} />
  <Route path="/studentsunion" element={<StudentsUnion />} />
  <Route path="/rangerandrover" element={<RangerAndRover />} />
  <Route path="/studentclub" element={<StudentClub />} />
  <Route path="/youthredcross" element={<YouthRedCross />} />

  <Route path="/facilitieshostel" element={<FacilitiesHostel />} />
  <Route path="/gymnasium" element={<Gymnasium />} />

  <Route path="/rcollege" element={<RCollege />} />
  <Route path="/journals" element={<Journals />} />

  <Route path="/contact" element={<Contact />} />

  <Route path="/login" element={<Login/>} />
  <Route path="/logout" element={<Logout/>} />
  
  {/* Protected Routes */}
  <Route element={<Protected />}>
    <Route path="/choose" element={<Choose />} />
    <Route path="/register" element={<Register />} />
    <Route path="/api/auth/upload" element={<Upload />} />
    <Route path="/api/auth/upload/iqac" element={<UploadTwo />} />
  </Route>
  
  <Route path='/gallery' element={<Gallery/>}/>
  <Route path="*" element={<PageNotFound/>} />
  
  
</Routes>














    </div>
  )
}
