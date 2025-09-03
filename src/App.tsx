import './App.css'
import NavbarComponent from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import LiveBalanced from './pages/livebalanced/LiveBalanced';
import PhysicalWellness from './pages/livebalanced/PhysicalWellness';
import MentalWellness from './pages/livebalanced/MentalWellness';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livebalanced" element={<LiveBalanced />} />
        <Route path="/livebalanced/physicalwellness" element={<PhysicalWellness />} />
        <Route path="/livebalanced/mentalwellness" element={<MentalWellness />} />
      </Routes>
    </Router>
  )
}

export default App
