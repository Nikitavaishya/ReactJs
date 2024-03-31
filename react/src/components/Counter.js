import React, { useState } from "react";

const Counter = ()=>{
    const [num,setNum] = useState(0)
    const Incre = ()=>{
      setNum(num+1)
    }
    const decre = ()=>{
      setNum(num-1)
    }
    return (
        <>
        <div className="main_div">
        <div className="center_div">
            <h1>Counter</h1>
          <h1>{num}</h1>
          <div className="btn_div">
            <button onClick={Incre}>Increment</button>
            <button onClick={decre}>decrement</button>
          </div>
        </div>
        </div>
        </>
    )
}
export default Counter