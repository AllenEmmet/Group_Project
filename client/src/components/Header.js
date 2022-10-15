import React, { useState } from 'react'
import { Link} from 'react-router-dom'

const Header = () => {
  
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px'}}>
        <h1>Welcome to Fitness Tracker!</h1>
        <Link to={'/food/add'} style={{color: 'white'}}>Add Food</Link>
        <Link to={'/exercise/add'} style={{color: 'white'}}>Add Exercise</Link>
    </div>
  )
}

export default Header