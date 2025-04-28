import React,{useState, useEffect, useRef} from 'react'

const Track = () => {
    const [ count,setCount ]= useState(0);
    const lastvalueRef = useRef(null);
    useEffect (()=>{
        lastvalueRef.current = count;
     }, [count]);
  return (
    <div>
        <p>Current: {count}</p>
      <p>Previous: {lastvalueRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Track