import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';


interface HeaderIconsProps {
  profilePicture: string; // Explicitly define profilePicture as string type
}

const HeaderIcons: React.FC<HeaderIconsProps> = ({ profilePicture }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const [isBellClicked, setIsBellClicked] = useState(false);

  const handleNotificationClick = () => {
    // Toggle the state to show/hide notification box
    setShowNotification(!showNotification);
    // Toggle the state to change bell icon color
    setIsBellClicked(!isBellClicked);
    // Hide profile details when notification is clicked
    setShowProfileDetails(false);
  };

  const handleProfileClick = () => {
    // Toggle the state to show/hide profile details
    setShowProfileDetails(!showProfileDetails);
    // Hide notification when profile is clicked
    setShowNotification(false);
  };

  return (
    <div className="flex items-center h-full ml-auto mr-4 relative">
      <div
        className={`mr-5 cursor-pointer ${
          isBellClicked ? 'text-white' : 'text-gray-600'
        }`}
        onClick={handleNotificationClick}
        style={{
          transition: 'transform 0.2s ease-in-out', // Add transition effect
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)'; // Scale up on hover
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'; // Reset scale on leave
        }}
      >
        <FontAwesomeIcon
          icon={faBell}
          className={`text-lg`}
        />
      </div>
      <div>
        <div
          className="w-7 h-7 bg-gray-300 rounded-full cursor-pointer"
          onClick={handleProfileClick}
        >
          <img src={profilePicture} alt="Profile" className="w-7 h-7 rounded-full object-cover"/>
        </div>
        {showProfileDetails && (
          <div className="absolute bg-customGray rounded-lg shadow-lg top-full right-0 mt-2 z-10" style={{ width: '300px' }}>
            {/* Profile Details */}
            <div className="p-4 flex items-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full mr-3">
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <div>
                <div className="text-white font-bold">Full Name</div>
                <div className="text-gray-300">email@example.com</div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        {showNotification && (
          <div
            className="absolute bg-customGray rounded-lg shadow-lg top-full right-10 mt-2 z-10"
            style={{ width: '300px', height: '200px' }}
          >
            <div className="px-4 py-2 text-white" style={{ textAlign: 'left' }}>
              Notifications
            </div>
            <div className="border-t border-white"></div>
            {/* Content of notification box */}
            <div className="p-4">
              <div className="text-white">Notification content here...</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderIcons;
