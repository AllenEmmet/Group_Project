import React, { useEffect } from 'react'
import { useState } from 'react'
import Header2 from '../components/Header2'
import { AppBar } from '@mui/material'
import UpdateExercise from '../components/UpdateExercise'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EditExercise = (props) => {
    const {id} = useParams()
    const [exercise, setExercise] = useState('')
    const [duration, setDuration] = useState(0)
    const [burnedcalories, setBurnedcalories] = useState(0)
    useEffect ( ()=>{
        axios.get(`http://localhost:8000/api/activity/${id}`)
            .then(res=>{
                
                setExercise(res.data.exercise)
                setDuration(res.data.duration)
                setBurnedcalories(res.data.burnedcalories)
            })
            .catch(err=> console.log(err))
        },[])
  return (
    <div>
        <AppBar position='sticky'><Header2/></AppBar>
        <UpdateExercise exercise={exercise} setExercise={setExercise} duration={duration} setDuration={setDuration} burnedcalories={burnedcalories} setBurnedcalories={setBurnedcalories} method={'put'} url={`http://localhost:8000/api/activity/edit/${id}`}></UpdateExercise>
    </div>
  )
}

export default EditExercise