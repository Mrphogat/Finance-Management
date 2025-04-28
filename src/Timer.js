import React, { useEffect, useRef, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((sec) => sec + 1);
    }, 1000);

    return () => {clearInterval(intervalRef.current);
    console.log('Timercleared');};
  }, []);

  return <div>Seconds: {seconds}</div>;
}

export default Timer;
