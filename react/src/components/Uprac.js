import React, { useEffect, useState } from 'react'

const Uprac = () => {
    const [first,setFirst] = useState(0);
    const [second,setSecond] = useState(0)
    
    useEffect(()=>
  {  alert('this is first click')
  console.log("i m clicked")
     }, [first , second]// it will run only when you refresh page first time
   )
  return (
    <div>
      <button onClick={()=>{setFirst(first + 1)}}>click me {first}</button>
      <button onClick={()=>{setSecond(second + 1)}}>click {second}</button>
    </div>
  )
}

export default Uprac
