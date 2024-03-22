import React, { useState } from 'react';

const Questions: React.FC<{ onSubmit: (answers: { [key: string]: string }) => void }> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    courses: '',
    studyHours: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-customGray2 rounded-lg py-3 px-20 mb-[-5px]" style={{ minWidth: '200px', width: '100%' }}>
      <form onSubmit={handleSubmit} className="flex flex-col items-start">
        <div className="mb-4" style={{ width: '100%' }}>
          <label htmlFor="courses" className="block text-white font-bold mb-2" style={{ textAlign: 'left' }}>
            How many courses are you taking?
          </label>
          <input
            type="number"
            id="courses"
            name="courses"
            value={formData.courses}
            onChange={handleChange}
            className="px-3 py-2 border rounded-lg"
            style={{ width: '100%' }}
          />
        </div>
        <div className="mb-4" style={{ width: '100%' }}>
          <label htmlFor="studyHours" className="block text-white font-bold mb-2" style={{ textAlign: 'left' }}>
            How many hours do you study?
          </label>
          <input
            type="number"
            id="studyHours"
            name="studyHours"
            value={formData.studyHours}
            onChange={handleChange}
            className="px-3 py-2 border rounded-lg"
            style={{ width: '100%' }}
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{ width: 'fit-content', margin: '20px auto 0' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Questions;
