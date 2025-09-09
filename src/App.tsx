import './App.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import NavbarComponent from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import LiveBalanced from './pages/livebalanced/LiveBalanced';
import PhysicalWellness from './pages/livebalanced/PhysicalWellness';
import MentalWellness from './pages/livebalanced/MentalWellness';
import FinancialWellness from './pages/livebalanced/FinancialWellness';
import SocialWellness from './pages/livebalanced/SocialWellness';
import HealthProductivity from './pages/health/HealthProductivity';
import Footer from './components/Footer/Footer';
import Copyright from './components/Footer/Copyright';
import ChildReads from './pages/resources/ChildReads';
import Publications from './pages/livebalanced/Publications';
import StoryOfUs from './pages/about/ourstory/StoryOfUs';
import OurCommunities from './pages/about/ourstory/OurCommunities';
import ActuaryRisk from './pages/about/ourteam/ActuaryRisk';
import BusinessDevelopment from './pages/about/ourteam/BusinessDevelopment';
import ExecutiveLeadership from './pages/about/ourteam/ExecutiveLeadership';
import InternshipProgram from './pages/about/ourteam/InternshipProgram';
import OrganizationalStrategy from './pages/about/ourteam/OrganizationalStrategy';
import AwardsRecognition from './pages/about/newsroom/AwardsRecognition';
import Newsroom from './pages/about/newsroom/Newsroom';

function App() {
  useEffect(() => {
    AOS.init({
      // Optional: Configure global AOS settings here
      duration: 1000,
      once: true, // Only animate once
    });
  }, []);
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livebalanced" element={<LiveBalanced />} />
        <Route path="/livebalanced/physicalwellness" element={<PhysicalWellness />} />
        <Route path="/livebalanced/mentalwellness" element={<MentalWellness />} />
        <Route path="/livebalanced/financialwellness" element={<FinancialWellness />} />
        <Route path="/livebalanced/socialwellness" element={<SocialWellness />} />
        <Route path="/health/healthandproductivity" element={<HealthProductivity />} />
        <Route path="/resources/readsforchildren" element={<ChildReads />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/about/ourstory" element={<StoryOfUs />} />
        <Route path="/about/ourcommunities" element={<OurCommunities />} />
        <Route path="/about/actuaryrisk" element={<ActuaryRisk />} />
        <Route path="/about/businessdevelopment" element={<BusinessDevelopment />} />
        <Route path="/about/executiveleadership" element={<ExecutiveLeadership />} />
        <Route path="/about/organizationalstrategy" element={<OrganizationalStrategy />} />
        <Route path="/about/internship" element={<InternshipProgram />} />
        <Route path="/about/awards" element={<AwardsRecognition />} />
        <Route path="/about/newsroom" element={<Newsroom />} />
      </Routes>
      <Footer />
      <Copyright />
    </Router>
  )
}

export default App
