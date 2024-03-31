import React, { useState,useEffect  } from 'react'

const Index = () => {
  const [name , setName] = useState('')
  // mouting phase
 useEffect(()=>{

 },[])  
 //
 useEffect(()=>{
 
 },[name]) ;

//  useEffect(() =>{
//   return () =>{

//   }
//  },[]);
  return (
    <div>
      <h4>{name}</h4>
    </div>
  )
}

export default Index
