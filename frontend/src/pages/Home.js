import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import GospelList from '../components/GospelList';
import NewGospelForm from '../components/NewGospelForm';
import Navbar from '../components/Navbar';

const Home = () => {
  const [currentWeek, setCurrentWeek] = useState('1'); // Default week

  const handleNewGospel = (newGospel) => {
    // Logic to update the gospel list (if needed)
    // You may want to fetch the gospels again after adding a new one
  };

  return (
    <>
    <Navbar />
    <div className="flex">
      <Sidebar weeks={[1, 2, 3, 4, 5]} setCurrentWeek={setCurrentWeek} />
      <div className="flex-1 p-4">
        <h2 className="text-2xl font-bold">WEEK {currentWeek}</h2>
        <NewGospelForm onSuccess={handleNewGospel} />
        <GospelList currentWeek={currentWeek} />
      </div>
    </div>
    </>
  );
};

export default Home;
