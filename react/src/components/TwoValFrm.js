import React, { useState } from 'react'

const TwoValFrm = () => {
const [user,setUser] = useState({name:'',email:''});

const onChangeUser = (e)=>{
   setUser({...user,[e.target.name]: e.target.value});
}

const click = (e)=>{
  e.preventDefault();
  console.log(user)
}

  return (
    <div>
      <input type="text" name='name' value={user.name} onChange={onChangeUser} /> <br/>
      <input type="text" name='email' value={user.email} onChange={onChangeUser} />
      <button onClick={click}>submit</button>
    </div>
  )
}

export default TwoValFrm
