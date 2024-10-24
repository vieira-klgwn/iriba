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
    <form onSubmit={handleSubmit}>
      <input name="week" placeholder="Week" value={formData.week} onChange={handleChange} required />
      <input name="day" placeholder="Day" value={formData.day} onChange={handleChange} required />
      <textarea name="content" placeholder="Content" value={formData.content} onChange={handleChange} required />
      <input name="author" placeholder="Author" value={formData.author} onChange={handleChange} required />
      <button type="submit">{loading ? 'Submitting...' : 'Submit'}</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default NewGospelForm;
