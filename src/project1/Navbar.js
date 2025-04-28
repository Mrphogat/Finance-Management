import React from 'react'
// import authslice from './project1/authslice';


export const Navbar = () => {
  return (
    <nav className="bg-white shadow-xl py-4 px-6 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">💼 let's see your expances</h1>
      <div className="space-x-6">
        <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home🏠</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 transition">About📃</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 transition">Sign-up📩</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 transition" >Log-in🔏</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 transition">Contact📲</a>
      </div>
    </div>
  </nav>
);
}
