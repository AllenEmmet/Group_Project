/*
  * Here Emmet we can put our Main view, reuse components 
  * and manage state better, lets communicate how we want
  * our frontend to function
  */

import React from 'react'
import { useState } from 'react'
import Header from '../components/Header'

import { AppBar } from '@mui/material'
import Dashboard from '../components/Dashboard'

const Main = () => {
    
  return (
    <div>
        <AppBar position='sticky'><Header/></AppBar>
        <Dashboard></Dashboard>
    </div>
  )
}

export default Main