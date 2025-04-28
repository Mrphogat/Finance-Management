import React, { useState } from 'react';

const Courselist = () => {
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const courseData = [
    { id: 1, name: "React Basics", price: 1499 },
    { id: 2, name: "Advanced React", price: 2499 },
    { id: 3, name: "Mongo DB", price: 1999 },
    { id: 4, name: "Redux", price: 499 },
    { id: 5, name: "Express Js", price: 1499 }
  ];

  const filtered = courseData
    .filter(course =>
      course.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  return (
    <div className="max-w-5xl mx-auto p-6 font-sans">
      <h1 className="text-4xl font-bold text-center mb-8 text-red-500">Course List</h1>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <input
          type="search"
          placeholder="Search for a course..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300"
        />

        <div className="flex gap-3">
          <button
            onClick={() => setSortOrder("asc")}
            className={`px-4 py-2 rounded-lg text-white transition ${
              sortOrder === 'asc' ? 'bg-red-500' : 'bg-gray-400'
            }`}
          >
            Low to High
          </button>
          <button
            onClick={() => setSortOrder("desc")}
            className={`px-4 py-2 rounded-lg text-white transition ${
              sortOrder === 'desc' ? 'bg-red-500' : 'bg-gray-400'
            }`}
          >
            High to Low
          </button>
        </div>
      </div>
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(course => (
            <div
              key={course.id}
              className="bg-white border border-gray-200 shadow-md rounded-xl p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{course.name}</h2>
              <p className="text-gray-600 text-sm mb-4">Learn the fundamentals and build real-world projects.</p>
              <div className="text-lg font-bold text-red-500">₹{course.price}</div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-red-400 font-semibold mt-8">No Course Found</p>
      )}
    </div>
  );
};

export default Courselist;
