import React from 'react'
import { FormControl, Input, InputLabel, Button } from '@mui/material';

const Food = () => {
  return (
    <div>
        <form style={{display: 'flex', flexDirection: 'column', margin: '20px'}}>
            <FormControl>
                <InputLabel htmlFor='name'>Name:</InputLabel>
                <Input type='text' name='name'></Input>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor='calories'>Calories:</InputLabel>
                <Input type='number' name='calories'></Input>
            </FormControl>
            <FormControl>
                    <Button type='submit'>Save Changes</Button>
            </FormControl>
        </form>
    </div>
  )
}

export default Food