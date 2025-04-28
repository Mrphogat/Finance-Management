import React, { useEffect,useState} from 'react'

const Example = () => {
    const[width,setWidth]= useState(window.innerWidth);
    const[height,setHeight]=useState(window.innerHeight)
    useEffect(()=>{ 
        const handleResize =()=>{
            setWidth(window.innerWidth);
        }
        
        window.addEventListener("resize", handleResize);  
        return ()=>{
            window.removeEventListener("resize", handleResize);
        }
    },[])
    useEffect(()=>{ 
        const Resize =()=>{
            setHeight(window.innerHeight);
        }
        
        window.addEventListener("resize", Resize);
        return ()=>{
            window.removeEventListener("resize", Resize);
        }
    },[])

  return (
  
    <div>
         <h1>Window Width :{width}px </h1>
         <h1> Height : {height}px </h1>
    </div>
)
}

export default Example