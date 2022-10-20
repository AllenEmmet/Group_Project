import React from 'react'
import { FormControl, Input, InputLabel, Button, Paper, Box} from '@mui/material';
import axios from 'axios'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'

const UpdateFood = (props) => {
  const {id} = useParams();
  const {food, setFood} = props
  const {calories, setCalories} = props
  const {method, url} = props
  const nav = useNavigate();
  const [errors, setErrors] = useState({});

  // Axios GET to load form's field val
  useEffect(()=>{
    
    axios.get(`http://localhost:8000/api/food/${id}`)
    .then((res)=>{
      setFood(res.data.food)
      setCalories(res.data.calories)
      console.log(res.data.calories)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios({method, url, data: {food, calories}})
      .then((response) => {
        console.log(response);
        nav("/");
      })
      .catch((err) => {
        // console.log(err)
        const errorResponse = err.response.data.err.errors;
        console.log(errorResponse)
        setErrors(errorResponse)
        // console.log(errors)
        
      });
  };
  

  return (
    <div>
               <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '50px',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 800,
          height: 200,
        },
      }}
      
    >
      <Paper elevation={5}>
        <form style={{display: 'flex', flexDirection: 'column', margin: '20px'}} onSubmit={handleSubmit}>
            <FormControl>
                <InputLabel htmlFor='name'>Name:</InputLabel>
                <Input value = {food} type='text' name='name' onChange = {(e)=>{setFood(e.target.value)}}></Input>
                {errors.food ? <p>{errors.food.message}</p> : null}
            </FormControl>
            <FormControl>
                <InputLabel htmlFor='calories'>Calories:</InputLabel>
                <Input value = {calories} type='number' name='calories' onChange = {(e)=>{setCalories(e.target.value)}}></Input>
            </FormControl>
            {errors.calories ? <p>{errors.calories.message}</p> :null}
            <FormControl>
                    <Button type='submit' variant="contained" style={{marginTop:"20px"}}>Save Changes</Button>
            </FormControl>
        </form>
        </Paper>
        </Box>
    </div>
  )
}

export default UpdateFood
