

import { useState } from "react"
import "./count.css"



const Random=()=>{

    const [num,setnum]=useState(null)
    const [history, sethistory] = useState([])


    const rangen=()=>{
        var h=Math.floor(Math.random()*100)+1
        setnum(h)
        sethistory([h, ...history].slice(0, 15)) 
    }

return(
    <div className="mastergen">
        <h1 className="tit">Random Number Generator</h1>
        <h2  className="cntgen">{num}</h2>
        <p className="">{num !== null ?"Between 1 and 100":"No number generated yet"}</p>
        <button onClick={rangen} className="btngen">Generate Random Number</button>

     {history.length > 0 ?
        <div>
          <p className="kitrecent">Recent numbers:</p>
          {history.map((item, index) => (
            <span key={index} className="recent"> {item} </span>
          ))}
        </div>:""
      }
    </div>
);
}
export default Random