import React, { useState } from 'react';
import OutlookIcon from '../assets/outlook.png';

const SettingComponents: React.FC = () => {
  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    password: string;
    dateOfBirth: string;
    country: string;
  }>({
    fullName: '',
    email: '',
    password: '',
    dateOfBirth: '',
    country: '',
  });

  const [formEditable, setFormEditable] = useState<boolean>(true); // Set initial state to true

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
    setFormEditable(false); // Set formEditable to false after submission
  };

  const handleToggleEditMode = () => {
    setFormEditable(prevState => !prevState); // Toggle the formEditable state
  };
  
  return (
    <div className="bg-customGray2 rounded-lg py-3 px-20 mb-[-5px]" style={{ minWidth: '200px', width: 'fit-content' }}>
      <form onSubmit={handleSubmit} className="flex flex-col items-start">
        <h2 className="text-white font-bold text-xl mb-4" style={{ textAlign: 'left' }}>
          Profile
        </h2>
        <div className="mb-4 flex items-center">
          <div className="h-16 w-16 bg-gray-300 rounded-full flex items-center justify-center">
            {/* Placeholder for user profile image */}
            <span>Image</span>
          </div>
        </div>
        <div className="mb-4 flex items-center" style={{ width: '100%' }}>
          <div className="mr-4">
            <label htmlFor="fullName" className="block text-white font-medium mb-2" style={{ textAlign: 'left' }}>
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="px-3 py-2 border rounded-lg bg-customGray text-white border-transparent" // Removed border color
              style={{ width: '300px' }}
              disabled={!formEditable} // Disable input field if not in edit mode
            />
          </div>
          <div className="mr-4">
            <label htmlFor="email" className="block text-white font-medium mb-2" style={{ textAlign: 'left' }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="px-3 py-2 border rounded-lg bg-customGray text-white border-transparent" // Removed border color
              style={{ width: '300px' }}
              disabled={!formEditable} // Disable input field if not in edit mode
            />
          </div>
          <div className="mr-4">
            <label htmlFor="password" className="block text-white font-medium mb-2" style={{ textAlign: 'left' }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="px-3 py-2 border rounded-lg bg-customGray text-white border-transparent" // Removed border color
              style={{ width: '300px' }}
              disabled={!formEditable} // Disable input field if not in edit mode
            />
          </div>
        </div>
        {/* Next row for the last two fields */}
        <div className="mb-4 flex items-center" style={{ width: '100%' }}>
          <div className="mr-4">
            <label htmlFor="dateOfBirth" className="block text-white font-medium mb-2" style={{ textAlign: 'left' }}>
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="px-3 py-2 border rounded-lg bg-customGray text-white border-transparent" // Removed border color
              style={{ width: '300px' }}
              disabled={!formEditable} // Disable input field if not in edit mode
            />
          </div>  
          <div className="mr-4">
            <label htmlFor="country" className="block text-white font-medium mb-2" style={{ textAlign: 'left' }}>
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="px-3 py-2 border rounded-lg bg-customGray text-white border-transparent" // Removed border color
              style={{ width: '300px' }}
              disabled={!formEditable} // Disable input field if not in edit mode
            />
          </div>
        </div>
        {formEditable ? (
            <button
                type="submit" // Change the type to submit
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                style={{ marginRight: 'auto' }}
            >
                Save
            </button>
            ) : (
            <button
                type="button" // Ensure it's a button type
                onClick={handleToggleEditMode} // Attach the toggle edit mode function
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                style={{ marginRight: 'auto' }}
            >
                Edit
            </button>
            )}
      </form>

      <h2 className="text-white font-bold text-xl mt-8 mb-4" style={{ textAlign: 'left' }}>
        Integration
      </h2>
      {/* Integration button */}
      <div className="flex items-center mt-4">
        <div style={{ width: '400px' }}> {/* Set a specific width */}
          <button
            onClick={() => { console.log('Integration button clicked'); }}
            className="flex items-center justify-center w-auto py-2 px-3 text-white bg-customGray rounded-md focus:outline-none focus:border-blue-600"
          >
            <img src={OutlookIcon} alt="Outlook Icon" className="w-10 h-10" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingComponents;
