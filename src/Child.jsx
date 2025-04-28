import React , {forwardRef, useImperativeHandle} from "react";
// forward -> prenet se ref leke child ko provide kerega
// useImperativeHandle -> ref ke thhrough whi method expose kerga jo hame chahaiye
const Child = forwardRef((props,ref)=>{
    useImperativeHandle(ref,()=>({
        sayHello(){
            console.log("Hellow from child ");
        }
    }))
    return<p> Im Ironman</p>
})
export default Child;