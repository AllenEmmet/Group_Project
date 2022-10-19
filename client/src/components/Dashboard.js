/*
  * Dashboard for our site
  * Holds: 
  * User info, goals, calories, exercises
  * These then can be broken down into their seperate componenets
  */
import React, { useEffect, useState } from 'react'
import axios from 'axios'; 
import {Table, TableContainer, TableBody, TableHead, TableCell, TableRow, Button} from '@mui/material'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate()
  const [workouts, setWorkouts] = useState([])
  const [food, setFood] = useState([])
  const [btotal, setBtotal] = useState('')
  const [ctotal, setCtotal] = useState('')

  
    
  // }
  useEffect(()=>{
    
    axios.get('http://localhost:8000/api/activity')
        .then((res)=> {setWorkouts(res.data)})
        .catch((err)=>{console.log(err)})

}, []
)
useEffect(()=>{
  const getWtotal = () =>{
    workouts.map((workout) =>{
      setBtotal(b => b + workout.burnedcalories)
  
    })
  return btotal
  }
  getWtotal()
},[workouts])

useEffect(()=>{
  const getFtotal = () =>{
    food.map((meal) =>{
      setCtotal(c => c + meal.calories)
  
    })
  return ctotal
  }
  getFtotal()
},[food])

useEffect(()=>{
  axios.get('http://localhost:8000/api/food')
      .then((res)=> {
        setFood(res.data)
        food.map((meal)=>(
          setCtotal(ctotal + meal.calories)
        ))
        // console.log(ctotal)
      })
      .catch((err)=>{console.log(err)})
}, []
)

  const deleteWorkout = (id) =>{
    axios.delete(`http://localhost:8000/api/activity/${id}`)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
    navigate('/')
}

const deleteFood = (id) =>{
  axios.delete(`http://localhost:8000/api/food/${id}`)
  .then(res=>console.log(res.data))
  .catch(err=>console.log(err))
  navigate('/')
}
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div style={{margin: '20px'}}>
        <h2>Today's total:</h2>
        <p>
          {ctotal} eaten - {btotal} burned = {ctotal - btotal}
        </p>
      </div>
      <div style={{display: 'flex'}}>
        <div style={{margin: '20px'}}>
          <h3>Calories burned today:</h3>
          <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Exercise</TableCell>
                        <TableCell>Duration</TableCell>
                        <TableCell>Calories Burned</TableCell>
                        <TableCell>Actions Available</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    workouts.map((workout, index)=>(
                        <TableRow key={index}>
                            <TableCell>{workout.exercise}</TableCell>
                            <TableCell>{workout.duration} mins</TableCell>
                            <TableCell>{workout.burnedcalories} calories burned</TableCell>
                            <TableCell>
                                <Button onClick={()=>navigate(`exercise/edit/${workout._id}`)}>Edit</Button> 
                                <Button onClick={()=>deleteWorkout(workout._id)}>Delete</Button> 
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
          <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Food Item</TableCell>
                        <TableCell>Calories Consumed</TableCell>
                        <TableCell>Actions Available</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    food.map((food, index)=>(
                        <TableRow key={index}>
                            <TableCell>{food.food}</TableCell>
                            <TableCell>{food.calories} calories consumed</TableCell>
                            <TableCell>
                                <Button onClick={()=>navigate(`food/edit/${food._id}`)}>Edit</Button> 
                                <Button onClick={()=>deleteFood(food._id)}>Delete</Button> 
                            </TableCell>
                        </TableRow>
                    ))
                }
                </TableBody>
            </Table>
        </TableContainer>
        </div>
      </div>
    </div>
  )
}

export default Dashboard