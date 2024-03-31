import React from 'react'
function List(props) {
    const styles = {
        color:'red',
    }
    const dish =['FOOD NAME']
  return (
    <div style={styles}>
      {props.title}
      {
        dish.map((item,i)=>{return <h3 key={i}>{item}</h3> 
    })
   }
   <p> Praesent laoreet tempus facilisis.
      In bibendum lobortis orci.</p>
      </div>
  )
}
export default List
