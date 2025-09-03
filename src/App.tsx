import './App.css'
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

function App() {
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
      </Routes>
      <Footer />
      <Copyright />
    </Router>
  )
}

export default App
