import React, { useState } from 'react'
    const NewForm = () => {
    const [name , setName] = useState('')
    const Change =(e)=>{
      setName(e.target.value)
    }
    const Clickbtn =()=>{
      console.log(name) 
    }
   
  return (
    <div>
     Enter your name :<input type="text" placeholder='name' value={name} onChange={Change} />
      <button onClick={()=> {Clickbtn()}}>submit</button>
      
    </div>
  )
}

export default NewForm

