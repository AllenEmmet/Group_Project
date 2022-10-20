/*
  * Here Emmet we can put our Main view, reuse components 
  * and manage state better, lets communicate how we want
  * our frontend to function
  */

import React from 'react'
import Header from '../components/Header'
import Dashboard from '../components/Dashboard'

const Main = () => {
    
  return (
    <div>
    <Header/>        
    <Dashboard/>    
    </div>
  )
}

export default Main
