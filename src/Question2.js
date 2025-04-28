import React, { useState } from 'react'

const Question2 = () => {
    const [text,setText]=useState('')
  return (
    <div>
        <input type='text' onChange={(e)=> setText(e.target.value)}>
        
        </input>
        <p>your text:{text}</p>
    </div>
  )
}

export default Question2