import React, { useState } from 'react';
import EditIcon from '../assets/edit.png';
import SaveIcon from '../assets/save.png'; // Import the save icon
import OutlookIcon from '../assets/outlook.png';

// Define type for edit mode state
type EditModeState = {
  fullName: boolean;
  email: boolean;
  password: boolean;
  dob: boolean;
  country: boolean;
};

// SettingComponents function component
const SettingComponents: React.FC = () => {
  // State to manage the edit mode of each field
  const [editMode, setEditMode] = useState<EditModeState>({
    fullName: false,
    email: false,
    password: false,
    dob: false,
    country: false
  });

  // Function to toggle edit mode for a specific field
  const toggleEditMode = (field: keyof EditModeState) => {
    setEditMode(prevState => ({
      ...prevState,
      [field]: !prevState[field]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Profile Heading */}
      <h1 className="text-3xl font-bold text-white mb-8 text-left">Profile</h1>
      {/* Grid for fields */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Full Name Field */}
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-white mb-2 text-left">Full Name</label>
          <div className="flex items-center">
            <input type="text" id="fullName" className="border border-gray-300 rounded-l px-4 py-2 w-full h-10" disabled={!editMode.fullName} />
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r h-10" onClick={() => toggleEditMode('fullName')}>
              {/* Toggle Button Icon */}
              <img src={editMode.fullName ? SaveIcon : EditIcon} alt={editMode.fullName ? "Save Icon" : "Edit Icon"} className="h-6 w-6" />
            </button>
          </div>
        </div>
        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-2 text-left">Email</label>
          <div className="flex items-center">
            <input type="email" id="email" className="border border-gray-300 rounded-l px-4 py-2 w-full h-10" disabled={!editMode.email} />
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r h-10" onClick={() => toggleEditMode('email')}>
              {/* Toggle Button Icon */}
              <img src={editMode.email ? SaveIcon : EditIcon} alt={editMode.email ? "Save Icon" : "Edit Icon"} className="h-6 w-6" />
            </button>
          </div>
        </div>
        {/* Password Field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-white mb-2 text-left">Password</label>
          <div className="flex items-center">
            <input type="password" id="password" className="border border-gray-300 rounded-l px-4 py-2 w-full h-10" disabled={!editMode.password} />
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r h-10" onClick={() => toggleEditMode('password')}>
              {/* Toggle Button Icon */}
              <img src={editMode.password ? SaveIcon : EditIcon} alt={editMode.password ? "Save Icon" : "Edit Icon"} className="h-6 w-6" />
            </button>
          </div>
        </div>
        {/* Date of Birth Field */}
        <div className="mb-4">
          <label htmlFor="dob" className="block text-white mb-2 text-left">Date of Birth</label>
          <div className="flex items-center">
            <input type="date" id="dob" className="border border-gray-300 rounded-l px-4 py-2 w-full h-10" disabled={!editMode.dob} />
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r h-10" onClick={() => toggleEditMode('dob')}>
              {/* Toggle Button Icon */}
              <img src={editMode.dob ? SaveIcon : EditIcon} alt={editMode.dob ? "Save Icon" : "Edit Icon"} className="h-6 w-6" />
            </button>
          </div>
        </div>
        {/* Country Field */}
        <div className="mb-4">
          <label htmlFor="country" className="block text-white mb-2 text-left">Country</label>
          <div className="flex items-center">
            <input type="text" id="country" className="border border-gray-300 rounded-l px-4 py-2 w-full h-10" disabled={!editMode.country} />
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r h-10" onClick={() => toggleEditMode('country')}>
              {/* Toggle Button Icon */}
              <img src={editMode.country ? SaveIcon : EditIcon} alt={editMode.country ? "Save Icon" : "Edit Icon"} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {/* Submit Button */}
      <div className="mt-8">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Submit</button>
      </div>
      {/* Integration Heading */}
      <h1 className="text-3xl font-bold text-white mb-8 text-left">Integration</h1>
      {/* Outlook Button */}
      <div className="flex items-center">
        <button className="bg-customGray hover:bg-gray-500 text-white py-2 px-4 rounded flex items-center">
          {/* Outlook Button Icon */}
          <img src={OutlookIcon} alt="Outlook Icon" className="h-6 w-6" />
          <span className="ml-2">Outlook</span>
        </button>
      </div>
    </div>
  );
}

// Exporting SettingComponents function component
export default SettingComponents;
