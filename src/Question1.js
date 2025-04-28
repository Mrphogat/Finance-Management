import React from 'react'
import { useState } from 'react';
const Question1 = () => {
    const [count, setCount] = useState('0');
  return (
    <div>
        <p>count: {count}</p>
      <button onClick={()=> setCount(count+1) } > Increase value</button>
      <button onClick={()=> setCount(count-1) } > decrease value</button>
      <button onClick={()=> setCount(0) } > Reset value</button>

    </div>
  )
}

export default Question1