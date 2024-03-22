import React, { useState } from 'react';
import GoogleIcon from '../src/assets/google.png';
import OutlookIcon from '../src/assets/outlook.png';
import Logo from '../src/assets/Logo.png';

const Login: React.FC = () => {
  const [activePage, setActivePage] = useState('login');

  const handleButtonClick = (page: string) => {
    setActivePage(page);
    window.location.href = `/${page === 'login' ? 'Login' : 'Register'}`; // Redirect to the appropriate route
  };

  const handleGoogleLogin = () => {
    console.log('Google login button clicked');
    // Handle Google login
  };

  const handleOutlookLogin = () => {
    console.log('Outlook login button clicked');
    // Redirect to Outlook login page
    window.location.href = 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=YOUR_REDIRECT_URI&scope=https://graph.microsoft.com/User.Read';
    // Replace YOUR_CLIENT_ID and YOUR_REDIRECT_URI with your actual values
  };

  const handleDirectLogin = () => {
    window.location.href = '/Dashboard'; // Redirect to the Dashboard route
  };

  const handleLogoClick = () => {
    window.location.href = '/LandingPage'; // Redirect to the landing page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Logo at the top */}
      <div className="mt-10 mb-8" onClick={handleLogoClick}>
        <img src={Logo} alt="Logo" className="w-48 h-auto cursor-pointer" />
      </div>
      <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
        <div className='flex flex-col mb-4'>
          <div className='relative mb-4 flex justify-center'>
            <button
              className={`w-32 py-2 px-3 text-${activePage === 'signup' ? 'black' : 'white'} bg-${activePage === 'signup' ? 'white' : 'customGray'} border border-white rounded-md focus:outline-none focus:border-blue-600`}
              onClick={() => handleButtonClick('signup')}
            >
              Signup
            </button>
            <button
              className={`w-32 py-2 px-3 text-${activePage === 'login' ? 'black' : 'white'} bg-${activePage === 'login' ? 'white' : 'customGray'} border border-${activePage === 'login' ? 'white' : 'customGray'} rounded-md focus:outline-none focus:border-blue-600`}
              onClick={() => handleButtonClick('login')}
            >
              Login
            </button>
          </div>
          <div className='relative mb-2 w-72'>
            <button className='flex items-center justify-center w-full py-2 px-3 text-white bg-customGray border border-white rounded-md focus:outline-none focus:border-blue-600' onClick={handleGoogleLogin}>
              <span>Login With Google</span>
              <img src={GoogleIcon} alt="Google Icon" className="ml-2 w-4 h-4" />
            </button>
          </div>
          <div className='relative mb-2 w-72'>
            <button className='flex items-center justify-center w-full py-2 px-3 text-white bg-customGray border border-white rounded-md focus:outline-none focus:border-blue-600' onClick={handleOutlookLogin}>
              <span>Login With Outlook</span>
              <img src={OutlookIcon} alt="Outlook Icon" className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="text-center text-white mb-6 text-2xl font-bold">
          or
        </div>
        <form action="">
          <div className='relative mb-2 w-72'>
            <input
              type="email"
              placeholder="Email"
              className='block w-full py-2 px-3 text-white bg-customGray border border-white rounded-md focus:outline-none focus:border-blue-600'
              style={{ caretColor: 'white' }}
            />
            <style>
              {`input[type="email"]::placeholder {color: #575659;}`}
            </style>
          </div>
          <div className='relative mb-2 w-72'>
            <input
              type="password"
              placeholder="Password"
              className='block w-full py-2 px-3 text-white bg-customGray border border-white rounded-md focus:outline-none focus:border-blue-600'
              style={{ caretColor: 'white' }}
            />
            <style>
              {`input[type="password"]::placeholder {color: #575659;}`}
            </style>
          </div>
          <div className="flex justify-center mt-10">
            <button type="button" className='w-32 py-2 px-3 text-white bg-customGray border border-white rounded-md focus:outline-none focus:border-blue-600' onClick={handleDirectLogin}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
