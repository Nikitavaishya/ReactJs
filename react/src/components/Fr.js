import React,{useState} from 'react'

const Fr = () => {
const [user,setUser] = useState({email:"" , pswd:""})    
const handleChng = (e)=> {setUser({...user,[e.target.name]:e.target.value})}
const click =()=>{
    console.log(user);
   setUser({email:"" , pswd:""})
}
  return (
    <div>
      
      <input type="text"  placeholder='email' name='email' value={user.email} onChange={handleChng}/> <br/>
      <input type="text"  placeholder='password' name='pswd' value={user.pswd} onChange={handleChng}/><br/>
      <button onClick={click}>submit</button>
     
    </div>
  )
}

export default Fr
