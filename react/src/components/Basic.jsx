import React from 'react'
import '../styles/index.css';
import * as Head from './Heading';
import Heading from './Heading';
import List from './List';
 import images from '../images/indian-food.jpg'
// import Heading, {g,h,i} from './Heading';
import Para from './Para';

function Basic() {
    const styles = {
        color:'red',
    }
   
  return (
    <div className=''  style={styles}> 
        {/* Basic {Head.g} {Head.i} */}
        {/* <Heading title="Heading content" msg=''/> 
        <Head.default title="Heading content" msg=''/>
        <Para title=" this is Para content"/> */}
        <img src={images} />
        <List title="BURGER"  style={{color:'red'}}/>
    </div>
  )
}

export default Basic