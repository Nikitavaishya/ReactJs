import React, { useState } from 'react';

const Todo = () => {
const [count , setCount] = useState(0)
function update (){
setCount(count +1)
}
  return (
    <div>
      <h1>{count} times</h1>
      
    <button onClick={update}> clicked </button>
    </div>
  )
}

export default Todo
