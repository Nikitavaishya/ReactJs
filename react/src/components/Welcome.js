
import React, {Component, useState} from 'react'
import { useEffect } from 'react';

// hooks came in react version 16.8 


// with the help of hooks we cna use state, and other lifecycle methods in react functional component.

export const Welcome = () => {
    const [state, setState] = useState('first');
    const [state1, setState1] = useState('first');

    const clickFunction = () => {
        // setState('second')// if new value is not depends on prev value 

        setState( (prev) => { // if depends on prev value
            if(prev == 'first')
                return 'second';
            else
                return 'third'
        } )
    }
    return (
        <>
            <h1> value is {state}</h1>
            <button type="button" onClick={clickFunction}> Cick me </button>
            <ChildCareRounded name={state}/>
        </>
    )
}



useEffect(() => {
    console.log('value is changed');
}, [state1])

useEffect( () => {

    return () => {} // unmount
}) 

// lifecycle methods:

// mounting phase  => [constructor , render , getDerivedStateFromProps, componentDidMount ]
// updating phase => re-render when result is chnaged bcz of props or state [getDerivedStateFromProps], shouldComponentUpadte, render, componentDidUpdate, getSnapBeforeUpdate
// unmounting phase => componentWillUnmount
// error handling phase => getDerivedStateFromError, componentDidCatch 