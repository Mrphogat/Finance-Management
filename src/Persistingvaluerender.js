import React, { useRef } from 'react';

function App() {
  const countRef = useRef(0);
  const increaseRef = useRef();

  const increment = () => {
    countRef.current++;
    increaseRef.current.textContent = countRef.current;
  };

  return (
    <div>
      <button onClick={increment}>Increment  </button>
      <span ref={increaseRef}>0</span>
    </div>
  );
}

export default App;
 