/*
  * Dashboard for our site
  * Holds: 
  * User info, goals, calories, exercises
  * These then can be broken down into their seperate componenets
  */
import React, { useEffect, useState } from 'react'
import axios from 'axios'; 
import {Table, TableContainer, TableBody, TableHead, TableCell, TableRow} from '@mui/material'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate()
  const [workouts, setWorkouts] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:8000/api/activity')
        .then((res)=> {setWorkouts(res.data)})
        .catch((err)=>{console.log(err)})
}
)

  const deleteWorkout = (id) =>{
    axios.delete(`http://localhost:8000/api/activity/${id}`)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
    navigate('/')
}
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div style={{margin: '20px'}}>
        <h2>Today's total:</h2>
        <p>(Display  either positive or negative calorie value depending on which below is higher</p>
      </div>
      <div style={{display: 'flex'}}>
        <div style={{margin: '20px'}}>
          <h3>Calories burned today:</h3>
          <div>
        <h2>Today's workouts</h2>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Details</TableCell>
                        <TableCell>Actions Available</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    workouts.map((workout, index)=>(
                        <TableRow key={index}>
                            <TableCell>{workout.exercise} for {workout.duration} minutes and {workout.burnedcalories} calories</TableCell>
                            <TableCell>
                                <button onClick={()=>navigate(`exercise/edit/${workout._id}`)}>Edit</button> 
                                <button onClick={()=>deleteWorkout(workout._id)}>Delete</button> 
                            </TableCell>
                        </TableRow>
                    ))
                }
                </TableBody>
            </Table>
        </TableContainer>
    </div>
        </div>
        <div style={{margin: '20px'}}>
          <h3>Calories eaten today:</h3>
          <p>Display calorie total from today's inputs</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard