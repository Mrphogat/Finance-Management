import React, { useRef } from 'react'

const Focus = () => {
    const inputRef = useRef(null)
     const Focus =()=>{inputRef.current.focus()};
  return (
    <div>
        <input type ='text' ref={inputRef}/>
       <button onClick={Focus} >submit</button>
    </div>
  )
}

export default Focus




