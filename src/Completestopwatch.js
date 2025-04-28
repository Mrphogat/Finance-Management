import React, { useRef, useState } from 'react';

const StopWatch = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const timeRef = useRef(null);

  const startTimer = () => {
    if (!timeRef.current) {
      timeRef.current = setInterval(() => {
        setTime((prev) => {
          let { hours, minutes, seconds } = prev;
          seconds += 1;

          if (seconds >= 60)
             {
            seconds = 0;
            minutes += 1;
           }
          if (minutes >= 60)
             {
            minutes = 0;
            hours += 1;
           }
          return { hours, minutes, seconds };
        });
      }, 100); 
    }
  };

  const stopTimer = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };

  const resetTimer = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
    setTime({ hours: 0, minutes: 0, seconds: 0 });
  };

  const formatTime = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div
      className="items-center flex  w-screen h-screen"
      style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp7664064.jpg')" }}
    >
      <div className=" rounded-lg w-80 h-60 flex flex-col items-center ml-28 justify-center ">
        <h1 className="text-5xl font-light font-mono text-black">
          {formatTime(time.hours)}:{formatTime(time.minutes)}:{formatTime(time.seconds)}
        </h1>
        <div className="mt-4 flex space-x-4">
          <button onClick={startTimer} className=" text-white rounded-lg w-28 h-10 bg-green-600 hover:bg-green-700">
            Start⏱️
          </button>
          <button onClick={stopTimer} className=" text-white rounded-lg w-28 h-10 bg-red-500 hover:bg-red-600">
            Stop🚫
          </button>
          <button onClick={resetTimer} className=" text-white rounded-lg w-28 h-10 bg-yellow-500 hover:bg-yellow-600">
            Reset🔃
          </button>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
