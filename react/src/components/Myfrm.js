import React from 'react';
import { useState } from 'react';


const Forms = () => {
    const [name, setName] = useState();// initial value
    const [email, setEmail] = useState();// initial value

    const [detail, setDetail] = useState({name:"", email:""})

    const changeName = (e) => {
        setName(e.target.value)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const changeDetail = (e) => {
        console.log(detail)
        setDetail( (prev) => {
            return {
                ...prev, // name:"divyansh", email:"dd", unmae:'d', email:'ddt'
                // [e.target.name] : e.target.value
            }
        })
    }

    return (
        <>
            <h1> Hello </h1>
            <input type="text" name="name" placeholder="name" value={detail.name} onChange={changeDetail}/>
            <input type="text" name="email" placeholder="email" value={detail.email} onChange={changeDetail}/>
            <button type="submit" onClick={changeDetail}> Submit </button>
        </>
    )
}

export default Forms