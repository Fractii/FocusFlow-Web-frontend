import React from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import LandingPage from './LandingPage';
import Setting from './Setting';
import Information from './Information';
import Integration from './Integration';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className='bg-cover bg-center h-screen' style={{ backgroundColor: "#323234" }}>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} /> 
          <Route path="/Dashboard" element={<Dashboard />} /> 
          <Route path="/LandingPage" element={<LandingPage />} /> 
          <Route path="/Setting" element={<Setting />} />
          <Route path="/Information" element={<Information />} />  
          <Route path="/Integration" element={<Integration />} /> 
      </Routes>
    </div>
  );
};

export default App;
