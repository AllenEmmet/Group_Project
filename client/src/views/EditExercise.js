import React, { useEffect } from 'react'
import { useState } from 'react'
import Header2 from '../components/Header2'
import { AppBar } from '@mui/material'
import Exercise from '../components/Exercise'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EditExercise = () => {
    const {id} = useParams()
    const [exercise, setExercise] = useState('')
    const [duration, setDuration] = useState(0)
    const [burnedcalories, setBurnedcalories] = useState(0)
    useEffect ( ()=>{
        axios.get(`http://localhost:8000/api/activity/${id}`)
            .then(res=>{
                
                setExercise(res.data.exercise)
                
            })
            .catch(err=> console.log(err))
        },[])
  return (
    <div>
        <AppBar position='sticky'><Header2/></AppBar>
        <Exercise exercise={exercise} method={'put'} url={`http://localhost:8000/api/activity/${id}`}></Exercise>
    </div>
  )
}

export default EditExercise