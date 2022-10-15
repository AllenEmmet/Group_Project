import React from 'react'
import { FormControl, Input, InputLabel, MenuItem, Select, Button } from '@mui/material';

const Food = () => {
  return (
    <div>
        <form style={{display: 'flex', flexDirection: 'column', margin: '20px'}}>
            <FormControl>
                <InputLabel htmlFor='type'>Type of exercise:</InputLabel>
                <Select>
                    <MenuItem>Running</MenuItem>
                    <MenuItem>Biking</MenuItem>
                    <MenuItem>Swimming</MenuItem>
                    <MenuItem>Strength Training</MenuItem>
                    <MenuItem>Yoga</MenuItem>
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor='duration'>Duration (minutes):</InputLabel>
                <Input type='number' name='duration'></Input>
            </FormControl>
            <FormControl>
                    <Button type='submit'>Save Changes</Button>
            </FormControl>
        </form>
    </div>
  )
}

export default Food