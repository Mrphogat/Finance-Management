import React, { useEffect, useState } from "react";

const Apidata = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        console.log(data);
        setPost(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchdata();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 text-white flex justify-center items-center">
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-[90%] max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo List Title📝</h1>
        <ul className="space-y-2">
          {post.map((item) => (
            <li key={item.id}
              className="p-2 border-b border-gray-300 flex justify-between items-center">
              <span className="text-lg">{item.title}</span>
              <span
                className={`text-sm font-semibold ${item.completed ? "text-green-500" : "text-red-500"}`}
                >{item.completed ? "✅ True" : "❌ False"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Apidata;