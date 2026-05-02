import { useState } from "react"
import "./count.css"
import Random from "./random";

const Count=()=>
{

    const [cnt,setcnt]=useState(0);

//increment,decrement,reset function

    const increment=()=>{
        setcnt(cnt+1);
        
    }
     const decrement=()=>{
       if(cnt>0){setcnt(cnt-1)} ;
      
    }
    const reset=()=>{
        setcnt(0);
        
    }

    

  return (
    < div className="frame">
   <div className="master">
        <h1 className="tit">Counter Application</h1>
        <div className="count">
            <h1 className="cnt">{cnt}</h1>
            <p>{cnt === 0 ? "Minimum limit reached" : ""}</p>
            <div className="btn">
            <button onClick={decrement} className="dec"> ➖ Decrement </button>
            <button onClick={increment} className="inc"> ➕ Increment </button>
            </div>
            <button onClick={reset} className="res"> 🔄 Reset </button>
        </div>
   </div>
   <div>
    <Random/>
   </div>
    </div>
  )
}

export default Count