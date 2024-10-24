// frontend/src/components/GospelList.js
import React, { useState, useEffect } from 'react';
import API from '../api';
import PostCard from './PostCard';

const GospelList = ({ currentWeek }) => {
  const [gospels, setGospels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGospels = async () => {
      try {
        setLoading(true);
        const res = await API.get(`/gospels/${currentWeek}`);
        setGospels(res.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch gospels');
        setLoading(false);
      }
    };

    fetchGospels();
  }, [currentWeek]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {gospels.map((gospel) => (
        <PostCard key={gospel._id} gospel={gospel} />
      ))}
    </div>
  );
};

export default GospelList;
