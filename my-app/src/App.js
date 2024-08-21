import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import CompanyInfo from './Components/CompanyInfo';
import SignUp from './Components/SignUp';
import './Components/Navbar.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/company-info" element={<CompanyInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate('/'); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Geeksynergy</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/dashboard">Home</Link></li>
        <li><Link to="/company-info">Company Info</Link></li>
        <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
      </ul>
    </nav>
  );
}

export default App;
