import React from 'react';

const Information: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">Your Landing Page</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4">
        {/* Add your landing page content here */}
        <p>Welcome to our landing page!</p>
      </main>

      {/* Footer */}
      <footer className="bg-blue-500 text-white p-4">
        <p>&copy; 2024 Your Company</p>
      </footer>
    </div>
  );
};

export default Information;
