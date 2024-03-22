import React from 'react';
import Logo from '../src/assets/Logo.png';
import Image from '../src/assets/LP.jpeg'; // Import your image here

const LandingPage: React.FC = () => {

  const handleSignUp = () => {
    // Redirect to the sign-up page
    window.location.href = '/Register';
  };

  const handleLogoClick = () => {
    // Redirect to the home page
    window.location.href = '/LandingPage'; 
  };

  return (
    <div className="flex flex-col items-center h-screen">
      {/* First Rectangle */}
      <div className="bg-customGray2 rounded-lg py-3 flex items-center justify-between w-full mb-2 mt-3 mr-4 ml-4" style={{ maxWidth: '98%' }}>
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-45 h-10 ml-4 mr-8 mt-[-6px]" onClick={handleLogoClick} />
        </div>
        <div className="flex items-center mr-4">
          <button className="bg-customGray2 text-white hover:bg-customGray hover:text-white rounded-full py-2 px-4 text-sm font-normal" onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
      
      {/* Second Rectangle */}
      <div className="bg-customGray2 rounded-lg py-3 flex flex-col w-full mb-2 mr-4 ml-4" style={{ maxWidth: '98%', flex: '1 0 auto', marginTop: '0px', marginBottom: '10px' }}>
        <div className="flex items-center justify-center">
          <p className="text-white text-5xl font-bold text-center mt-16 mb-6">Unlock your full potential with <span className="text-customBlue">FOCUSFLOW</span></p>
        </div>
        <div className="text-left mt-10 ml-40 justify-start flex items-center"> {/* Adjust margin and justify content */}
          <div className="text-left">
            <p className="text-2xl text-white font-bold">
              <span className="text-customBlue">FocusFlow</span> is your academic ally, a <br /> 
              <span>powerful AI-driven app designed to boost</span> <br />
              <span>students' success.</span>
            </p>
            <p className="text-2xl text-white mt-6">
              It's your personal study assistant, helping <br />
              <span>you optimize study schedules, enhance</span> <br />
              <span>productivity, and raise your GPA. With </span> <br />
              <span>FocusFlow, you'll study smarter, not harder,</span> <br />
              <span>and unlock your full academic potential.</span> <br />
              <span>Say goodbye to stress and hello to better</span> <br />
              <span>grades!</span>
            </p>
          </div>
          <img src={Image} alt="FocusFlow Image" className="ml-auto h-80 w-auto mr-20" /> {/* Adjust the width and height as needed */}
        </div>
      </div>
    </div>
  );  
};

export default LandingPage;
