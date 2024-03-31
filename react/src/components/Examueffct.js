import React,{useState,useEffect} from 'react'

const Examueffct = () => {
const [count,setCount] = useState(0)   

useEffect(()=>{

console.log(` 'count is' ${count} `);
},[count])
 const Click = ()=>{
 setCount(count+1 )
 };
  return (
    <div>
      <h1>Counter</h1>
      <h2>clicked {count} times</h2>
      <button type='submit' onClick={Click}>Click me</button>
    </div>
  )
}

export default Examueffct
