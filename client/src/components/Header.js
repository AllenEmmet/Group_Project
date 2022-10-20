import React, { useState } from 'react'
import Doj from './assets/Doj.png'

const Header = () => {
  
  return (
    <div style={{display: 'flex', justifyContent: 'center', paddingLeft: '20px', paddingRight: '20px', height:'75px', alignItems:'center'}}>
        <img src={Doj}/>
    </div>
  )
}

export default Header