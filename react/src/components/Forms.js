import React, { useState } from 'react';
import { useEffect } from 'react';
function Forms() {
    // const [name,setName] = useState()
    // const [num,setNum] = useState()
    // const [email,setEmail] = useState()
    // const [password,setPassword] = useState()
    const [detail,setDetail] = useState({name:'', num:''});
    const [showDetail, setShowDetail] = useState([]);
    useEffect(()=>{},[])
    
    const detailChng =(e)=>{
      
       setDetail((prev)=>{
                 return{...prev,
               [e.target.name]: [e.target.value]
                }
       } 
        )}
        useEffect(() =>{
          console.log(showDetail)
        } ,[showDetail])

    const sumbitFrm = () =>{
      console.log(detail)
      setShowDetail((prev) =>{
        return[...prev, detail]
      })
    }
    
  return (
    <div className='main_div'>
     Enter your Name:<input name='name' value={detail.name}  onChange={detailChng}/><br/><br/>
     Enter your Number:<input name='num' value={detail.num}  onChange={detailChng}/><br/><br/>
     {/* Enter your Email:<input name='' value={email}  onChange={mail}/><br/><br/>
     Enter your Password:<input name='' value={password}  onChange={pswd}/><br/><br/> */}
     <button onClick={sumbitFrm}>Login</button>
    </div>
  )
}

export default Forms
