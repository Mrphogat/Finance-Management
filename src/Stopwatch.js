import React, { useRef,useState } from 'react'

const StopWatch = () => {
    const[time, setTime]=useState(0);
    const timeRef = useRef(null);
    // setinterval hmme id return kerta h ->ye id hm store a 
    const startTimer = () =>{
        if(!timeRef.current){
            timeRef.current=setInterval (()=>{
              setTime((prev)=>prev+1);

            },1000);
        }

    };
    const stopTimer =()=>{
      clearInterval (timeRef.current);
      timeRef.current=(null);


    }
    const resetTimer = () =>{
      clearInterval (timeRef.current);
      timeRef.current=(null);
      setTime(0);

    }

  return (
      <div className=' justify-center items-center flex bg-black w-screen h-screen'>

    <div className=' shadow-lg rounded-lg shadow-white bg-slate-300 w-60 h-52 flex flex-col'>
        <h1 className=' text-2xl  ml-20 '> {time} : Second</h1>
    <button onClick={startTimer} className=' border-2 text-white rounded-lg  w-20 h-10 ml-20 mt-5 bg-green-600'>Start</button>
    <button onClick={stopTimer}className=' border-2  text-white rounded-lg  w-20 h-10 ml-20 mt-5 bg-red-500'>Stop</button>
    <button onClick={resetTimer}className=' border-2 text-white rounded-lg  w-20 h-10 ml-20 mt-5 bg-yellow-500'>Reset</button>
    </div>
    </div>
  )
}

export default StopWatch;
