import React,{useState,useContext,createContext, Children} from 'react'
import Childrens from './Children';

const uContext = createContext('nik')

const Parent = () => {
    const [uname,setUname] = useState('nik');
    console.log(uContext)
  return (
    <div>
      <div className=""> Parent</div>
      <Children uname={uname} />
    </div>
  )
}

export default Parent
export {uContext}
