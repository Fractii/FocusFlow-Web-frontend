import React, { useState } from 'react';
import InboxIcon from '../assets/inbox.png';
import CalendarIcon from '../assets/calendar.png';
import SettingsIcon from '../assets/settings.png';
import GPAIcon from '../assets/gpa.png';
import Questions from './QuestionComponent'; // Import your Questions component
import SettingComponent from './SettingComponents'; // Import your SettingComponent

const RectanglesComponent: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState('');
  const [showSecondRectangle, setShowSecondRectangle] = useState(true);
  const [showQuestions, setShowQuestions] = useState(false); // State for showing questions
  const [showSettings, setShowSettings] = useState(false); // State for showing settings

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
    if (buttonName === 'inbox' || buttonName === 'calendar') {
      setShowSecondRectangle(true);
      setShowQuestions(false); // Hide questions when switching buttons
      setShowSettings(false); // Hide settings when switching buttons
    } else if (buttonName === 'GPA') {
      setShowSecondRectangle(false);
      setShowQuestions(true); // Show questions when Predict GPA is clicked
      setShowSettings(false); // Hide settings when Predict GPA is clicked
    } else if (buttonName === 'settings') {
      setShowSecondRectangle(false); // Hide the second rectangle when "Settings" button is clicked
      setShowQuestions(false); // Hide questions when "Settings" button is clicked
      setShowSettings(true); // Show settings when "Settings" button is clicked
    }
  };
  
  const handleSubmit = (answers: { [key: string]: string }) => {
    // Handle submission logic here
    console.log('Answers:', answers);
  };


  return (
    <>
      {/* First Rectangle */}
      <div className="bg-customGray2 rounded-lg py-3 flex flex-col items-center justify-between flex-2 mb-[-5px] mr-2 relative" style={{ width: '20%' }}>
        {/* First Button */}
        <button 
          className={`absolute top-8 left-6 flex items-center text-white rounded-full px-4 py-2 ${
            selectedButton === 'inbox' ? 'bg-customGray' : 'hover:bg-customGray'
          }`}
          onClick={() => handleButtonClick('inbox')}
        >
          <img src={InboxIcon} alt="Inbox Icon" className="h-5 w-5 mr-2" />
          <span className="font-bold">Inbox</span>
        </button>
        
        {/* Second Button */}
        <button 
          className={`absolute top-20 left-6 flex items-center text-white rounded-full px-4 py-2 ${
            selectedButton === 'calendar' ? 'bg-customGray' : 'hover:bg-customGray'
          }`}
          onClick={() => handleButtonClick('calendar')}
        >
          <img src={CalendarIcon} alt="Calendar Icon" className="h-5 w-5 mr-2" />
          <span className="font-bold">Calendar</span>
        </button>

        {/* Third Button */}
        <button 
          className={`absolute top-32 left-6 flex items-center text-white rounded-full px-4 py-2 ${
            selectedButton === 'GPA' ? 'bg-customGray' : 'hover:bg-customGray'
          }`}
          onClick={() => handleButtonClick('GPA')}
        >
          <img src={GPAIcon} alt="GPA Icon" className="h-5 w-5 mr-2" />
          <span className="font-bold">Predict GPA</span>
        </button>
        
        <div className="w-full flex flex-col items-start">
          {/* Placeholder for additional content */}
          <div className="bg-customGray2 rounded-lg py-3 flex items-center flex-4 mb-[-5px]" style={{ width: '100%', minWidth: '200px', justifyContent: 'center', color: 'white' }}>
            {/* Placeholder */}
          </div>
        </div>
        
        {/* Fourth Button */}
        <button 
          className={`absolute bottom-6 left-6 flex items-center text-white rounded-full px-4 py-2 ${
            selectedButton === 'settings' ? 'bg-customGray' : 'hover:bg-customGray'
          }`}
          onClick={() => handleButtonClick('settings')}
        >
          <img src={SettingsIcon} alt="Settings Icon" className="h-5 w-5 mr-2" />
          <span className="font-bold">Settings</span>
        </button>
      </div>

      {/* Second Rectangle */}
      {showSecondRectangle && (
        <div className="bg-customGray2 rounded-lg py-3 flex items-center flex-4 mb-[-5px] mr-2" style={{ width: '700px', minWidth: '200px', justifyContent: 'center' }}>
          {/* Placeholder */}
        </div>
      )}

      {/* Third Rectangle */}
      <div className="bg-customGray2 rounded-lg py-10 flex items-start flex-4 mb-[-5px]" style={{ width: '100%', minWidth: '200px', justifyContent: 'left' }}>
        {showQuestions && <Questions onSubmit={handleSubmit} />} {/* Pass onSubmit prop to Questions component */}
        {showSettings && <SettingComponent />} {/* Display SettingComponent when showSettings is true */}
      </div>
    </>
  );
};

export default RectanglesComponent;
