import './App.css'
import NavbarComponent from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import LiveBalanced from './pages/livebalanced/LiveBalanced';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livebalanced" element={<LiveBalanced />} />
      </Routes>
    </Router>
  )
}

export default App
