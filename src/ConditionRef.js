import React, { useEffect, useRef, useState } from 'react'

const ConditionRef = () => {
    const[count,setCount] = useState(0);
    const specialRef = useRef(null);
    useEffect(()=>{
        if(count !==0 && count %5 === 0)
        {
            specialRef.current= count;
           <p> jai hover;</p>
        }
        // else
        // {
        //     <p> jai ho shi shyam khatu vaale ki</p>

        // }
    }, [count]);
  return (
    <div>
        <h1> count: {count}</h1>
        <button onClick={()=> setCount(prev=> prev +1)}> click</button>
        <p> Ref Value: {specialRef.current !== null ? specialRef.current : 'Ref not set yet'}</p>
    </div>
  )
}

export default ConditionRef;