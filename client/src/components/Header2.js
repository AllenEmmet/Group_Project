import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import Doj from './assets/Doj.png'

const Header2 = () => {
  
  return (
    <div style={{display: 'flex', justifyContent: 'center', paddingLeft: '20px', paddingRight: '20px', height:'75px', alignItems:'center'}}>
    <img src={Doj}/>
    <Link to={'/'} style={{color: 'white'}}>Home</Link>
</div>
  )
}

export default Header2