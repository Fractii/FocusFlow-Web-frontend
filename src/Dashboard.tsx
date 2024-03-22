import React from 'react';
import Logo from '../src/assets/Logo.png';
import RectanglesComponent from './components/RectangularComponent';

const Dashboard: React.FC = () => {
  const handleLogoClick = () => {
    // Redirect to the home page
    window.location.href = '/LandingPage'; 
  };

  return (
    <div className="relative h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col h-full w-full p-4">
        {/* Header */}
        <div className="bg-customGray2 rounded-lg py-3 flex items-center w-full mb-2 mt-[-5px] ml-0">
          <div className="flex items-center h-full">
            <img src={Logo} alt="Logo" className="w-45 h-10 ml-4 mr-8 mt-[-6px]" onClick={handleLogoClick} />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-row h-full w-full">
          {/* Render the RectanglesComponent */}
          <RectanglesComponent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
