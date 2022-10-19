import React, { useEffect } from 'react'
import { useState } from 'react'
import Header2 from '../components/Header2'
import EditFood from '../components/UpdateFood'

import { AppBar } from '@mui/material'
import Dashboard from '../components/Dashboard'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const AddFood = () => {
  const {id} = useParams()
  const [food, setFood] = useState('')
  const [calories, setCalories] = useState(0)
  
  useEffect ( ()=>{
    axios.get(`http://localhost:8000/api/food/${id}`)
        .then(res=>{
            
            setFood(res.data.food)
            setCalories(res.data.calories)
            
        })
        .catch(err=> console.log(err))
    },[])

  return (
    <div>
        <AppBar position='sticky'><Header2/></AppBar>
        <EditFood food={food} setFood={setFood} calories={calories} setCalories={setCalories}></EditFood>
    </div>
  )
}

export default AddFood
