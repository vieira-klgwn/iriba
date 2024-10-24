import React from "react";

const Sidebar = ({ weeks, setCurrentWeek }) => {
  return (
    <div className=" m-20 rounded-lg w-1/4  bg-gray-800 text-white flex flex-col shadow-lg">
      {weeks.map((week, index) => (
        <button
          key={index}
          onClick={() => setCurrentWeek(week)}
          className="text-center  p-4 font-semibold text-gray-200 hover:bg-gray-700  hover:text-white transition duration-200  inline-block"
        >
          Week {week}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
