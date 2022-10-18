import React, { useState } from 'react'
import { Link} from 'react-router-dom'

const Header2 = () => {
  
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px'}}>
        <h1>Welcome to Fitness Tracker!</h1>
        <Link to={'/'} style={{color: 'white'}}>Home</Link>
    </div>
  )
}

export default Header2
