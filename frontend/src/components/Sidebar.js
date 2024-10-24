import React from 'react';

const Sidebar = ({ weeks, setCurrentWeek }) => {
  return (
    <div className="w-1/4 h-screen bg-gray-800 text-white">
      {weeks.map((week, index) => (
        <button key={index} onClick={() => setCurrentWeek(week)} className="block p-4 hover:bg-gray-700">
          Week {week}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
