import React from 'react'
import { useState } from 'react'
import Header2 from '../components/Header2'

import { AppBar } from '@mui/material'
import Exercise from '../components/Exercise'

const AddExcercise = () => {
    
  return (
    <div>
        <AppBar position='sticky'><Header2/></AppBar>
        <Exercise></Exercise>
    </div>
  )
}

export default AddExcercise