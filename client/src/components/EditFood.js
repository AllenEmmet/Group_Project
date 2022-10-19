import React from 'react'
import { FormControl, Input, InputLabel, Button } from '@mui/material';
import axios from 'axios'; 
import { useParams, useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react'

const Food = () => {
  const {id} = useParams();
  const [food, setFood] = useState("");
  const [cal, setCal] = useState(0);
  const nav = useNavigate();

  // Axios GET to load form's field val
  useEffect(()=>{
    axios.get(`http://localhost:8000/api/food/${id}`)
    .then((res)=>{
      setFood(res.data.food)
      setCal(res.data.calories)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  // Event Handlers
    // Food on change
      const editFood = (e)=>{
        setFood(e.target.value)
      }
    // Calories on change
      const editCal = (e)=>{
        setCal(e.target.value)
      }
    // Submit
      const btnSub = ()=>{
        axios.put(`http://localhost:8000/api/food/edit/${id}`,{
          food:food,
          calories:cal
        })
        .then((res)=>{
          console.log('Updated!', res)
        })
        .catch((err)=>{
          console.log('There has been an error!', err)
        })
        nav('/')

      }

  return (
    <div>
        <form style={{display: 'flex', flexDirection: 'column', margin: '20px'}}>
            <FormControl>
                <InputLabel htmlFor='name'>Name:</InputLabel>
                <Input value = {food} type='text' name='name' onChange = {(e)=>{editFood(e)}}></Input>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor='calories'>Calories:</InputLabel>
                <Input value = {cal} type='number' name='calories' onChange = {(e)=>{editCal(e)}}></Input>
            </FormControl>
            <FormControl>
                    <Button type='submit' onClick = {()=>{btnSub()}}>Save Changes</Button>
            </FormControl>
        </form>
    </div>
  )
}

export default Food
