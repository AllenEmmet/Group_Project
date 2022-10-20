import React, { useState } from 'react'
<<<<<<< HEAD
import { FormControl, Input, InputLabel, MenuItem, Select, Button, Card, CardContent, Box, Container, Paper } from '@mui/material';
=======
import { FormControl, Input, InputLabel, MenuItem, Select, Button, Paper, Box } from '@mui/material';
>>>>>>> de19570e2463b2f85b5c0d7c61ffdf955ac83ddd
import axios from 'axios'; 
import {useNavigate} from 'react-router-dom'

const Exercise = (props) => {
    const [exercise, setExercise] = useState('')
    const [duration, setDuration] = useState(0)
    const [burnedcalories, setBurnedcalories] = useState()
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()

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
<<<<<<< HEAD
    <Container fixed sx={{ mt:3 }}>
    <Paper elevation={3}>
      <Card>
      <CardContent>
=======
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
          height: 250,
        },
      }}
      
    >
      <Paper elevation={5}>
>>>>>>> de19570e2463b2f85b5c0d7c61ffdf955ac83ddd
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
                    <Button type='submit' variant="contained" style={{marginTop:"20px"}}>Save Changes</Button>
            </FormControl>
        </form>
<<<<<<< HEAD
    </CardContent>
    </Card>
    </Paper>
    </Container>
=======
        </Paper>
        </Box>
>>>>>>> de19570e2463b2f85b5c0d7c61ffdf955ac83ddd
    </div>
  )
}

export default Exercise
