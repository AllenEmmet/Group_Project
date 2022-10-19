import React from 'react'
import { useState } from 'react'
import Header2 from '../components/Header2'
import EditFood from '../components/EditFood'


import { AppBar } from '@mui/material'
import Dashboard from '../components/Dashboard'

const AddFood = () => {
    
  return (
    <div>
        <AppBar position='sticky'><Header2/></AppBar>
        <EditFood></EditFood>
    </div>
  )
}

export default AddFood
