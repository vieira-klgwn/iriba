import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
  {/* Logo Section */}
  <div className="flex items-center space-x-2">
    {/* SVG water droplet logo */}
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3.172l3.536 3.536a4.5 4.5 0 11-6.364 0L12 3.172z" />
    </svg>
    {/* Text logo */}
    <span className="text-xl font-bold">irIbA</span>
  </div>

  {/* Buttons Section */}
  <div className="space-x-4">
    <button className="bg-transparent border border-white text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-200">
      Log In
    </button>
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
      Sign Up
    </button>
  </div>
</nav>

    </div>
  )
}

export default Navbar
