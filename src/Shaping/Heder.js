import React from 'react';
import './Style.css';
const Heder = (props) => {
  return (
    <div className='flex shaping'>
      <div onClick={()=>props.handleshow(false)}>Thirupathi Store</div>
      <div onClick={()=>props.handleshow(true)}> Cart
        <sub>{props.count}</sub>
        
      </div>
    </div>
  )
}

export default Heder