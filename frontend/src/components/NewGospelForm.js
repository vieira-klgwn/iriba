// frontend/src/components/NewGospelForm.js
import React, { useState } from 'react';
import API from '../api';

const NewGospelForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({ week: '', day: '', content: '', author: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await API.post('/gospels', formData);
      onSuccess(res.data); 
      setLoading(false);
    } catch (err) {
      setError('Failed to create a new post');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-gray-100 shadow-lg rounded-lg space-y-6">
  <input
    name="week"
    placeholder="Week"
    value={formData.week}
    onChange={handleChange}
    required
    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input
    name="day"
    placeholder="Day"
    value={formData.day}
    onChange={handleChange}
    required
    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <textarea
    name="content"
    placeholder="Content"
    value={formData.content}
    onChange={handleChange}
    required
    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
  />
  <input
    name="author"
    placeholder="Author"
    value={formData.author}
    onChange={handleChange}
    required
    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <button
    type="submit"
    className="w-full py-3 bg-gray-900 text-white rounded-md hover:bg-gray-600 transition duration-300"
  >
    {loading ? 'Submitting...' : 'Submit'}
  </button>
  {error && <p className="text-red-500 text-sm">{error}</p>}
</form>

  );
};

export default NewGospelForm;
