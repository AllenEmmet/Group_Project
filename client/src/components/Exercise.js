import React, { useState } from 'react'
import { FormControl, Input, InputLabel, MenuItem, Select, Button } from '@mui/material';
import axios from 'axios'; 
import {useNavigate} from 'react-router-dom'

const Exercise = (props) => {
    const [exercise, setExercise] = useState('')
    const [duration, setDuration] = useState(0)
    const [burnedcalories, setBurnedcalories] = useState()
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()
    const {method, url} = props

    const typeHandler = (e) =>{
        setExercise(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post("http://localhost:8000/api/activity", {
            exercise,
            duration,
            burnedcalories,
          })
          .then((response) => {
            console.log(response);
            navigate("/");
          })
          .catch((err) => {
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
          });
      };


  return (
    <div>
        <form style={{display: 'flex', flexDirection: 'column', margin: '20px'}} onSubmit={handleSubmit}>
            <FormControl>
                <InputLabel htmlFor='type'>Type of exercise:</InputLabel>
                <Select onChange={typeHandler}>
                    <MenuItem name='type' value='Lunges'>Lunges</MenuItem>
                    <MenuItem name='type' value='Pushups'>Pushups</MenuItem>
                    <MenuItem name='type' value='Squats'>Squats</MenuItem>
                    <MenuItem name='type' value='Pullups'>Pullups</MenuItem>
                    <MenuItem name='type' value='Burpees'>Burpees</MenuItem>
                </Select>
                {errors.exercise ? <p>{errors.exercise.message}</p> : null}
            </FormControl>
            <FormControl>
                <InputLabel htmlFor='duration' >Duration (minutes):</InputLabel>
                <Input type='number' name='duration' onChange={(e)=>setDuration(e.target.value)}></Input>
                {errors.duration ? <p>{errors.duration.message}</p> : null}
            </FormControl>
            <FormControl>
                <InputLabel htmlFor='burnedcalories' >Calories</InputLabel>
                <Input type='number' name='burnedcalories' onChange={(e)=>setBurnedcalories(e.target.value)}></Input>
                {errors.burnedcalories ? <p>{errors.burnedcalories.message}</p> : null}
            </FormControl>
            <FormControl>
                    <Button type='submit'>Save Changes</Button>
            </FormControl>
        </form>
    </div>
  )
}

export default Exercise