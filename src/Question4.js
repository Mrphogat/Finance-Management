import React from 'react'
import { useState } from 'react';
const Question4 = () => {
    const [like, setLike] = useState(0);
    const [ dislike, SetDislike]= useState(0);
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white'>
        <p className='text-5xl font-bold font-light'>like👍🏻: {like}</p>
        <p className='text-5xl font-light'> dislike👎🏻: {dislike}</p>
        <div className='flex mt-20 gap-4'>
      <button onClick={()=> setLike(like+1)} className='px-4 py-2 bg-green-500 hover:bg-green-600 transition-transform transform hover:scale-110 text-white font-medium rounded-lg' > like👍🏻</button>
      <button onClick={()=> SetDislike(dislike+1) } className='px-4 py-2 bg-red-500 hover:bg-red-600 transition-transform transform hover:scale-110 text-white font-medium rounded-lg'  > dislike👎🏻</button>
      {/* <button onClick={()=> setCount(0) } > Reset value</button> */}</div>

    </div>
  )
}

export default Question4