// Logo.tsx
import React from 'react';
import logoImage from '../assets/Logo.png';

const Logo: React.FC = () => {
  return (
    <img src={logoImage} alt="Logo" className="w-45 h-10" />
  );
};

export default Logo;
