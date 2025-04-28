import React, { useContext } from 'react'
import Context from './context';


const Grandchild = () => { 
    const name = useContext(Context)
  return (
    <div> Hello Mr.
        {
            name
        }
    </div>
  )
}

export default Grandchild;