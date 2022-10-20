/*
  * Dashboard for our site
  * Holds: 
  * User info, goals, calories, exercises
  * These then can be broken down into their seperate componenets
  */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
//import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

const Dashboard = () => {
// In our component, we have to save both data in our state using the useState hook
  const [ allFood, setAllFood ] = useState([])
  const [ allActivity, setAllActivity ] = useState([])

  const getData = () => {
    let endpoints = [
      'http://localhost:8000/api/food', 
      'http://localhost:8000/api/activity'
    ];
    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(([{data: food}, {data: activity}] )=> {
      setAllFood(allFood)
      setAllActivity(allActivity)
      console.log(allFood)
      console.log(allActivity)
    });
  }

  useEffect (() => {
    getData()
  }, []);

  return (
    <>
    <Container maxWidth="md" component="main">
     {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Exercise Tracker
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Quickly record food caloric intake and your exercise calories burned!        
        </Typography>
      </Container>
      {/* End hero unit */}
      
      {/* Food Card  */}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
        <Card sx={{ minWidth: 275 }}>
        <CardHeader
          title={"Calories Eaten"}
          subheader={"Here is a list of your Foods!"}
          titleTypography={{ align: 'center' }}
          subheaderTypographyProps={{
                    align: 'center',
                  }}
          sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
          />
          <CardContent>

      {/*Map the Foods onto the card*/}
        {allFood.map((foods, index) => {
              return (
              <Link to={'/food/${foods._id}'}>
              <Typography variant="h5" component="div" key={index}>
                {foods.food}
              </Typography>
              </Link>
              );
          })}
          </CardContent>
          <CardActions>
            <Link to={'/food/add'}>
            <Button size="small">Add Food</Button>
            </Link>
          </CardActions>
        </Card>
        </Grid>
      {/* End Food Card */}

      {/*Exercise Card*/}
        <Grid item xs={6}>
        <Card sx={{ minWidth: 275 }}>
        <CardHeader
          title={"Calories Burned"}
          subheader={"Here is a list of your activities!"}
          titleTypography={{ align: 'center' }}
          subheaderTypographyProps={{
                    align: 'center',
                  }}
          sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
          />
          <CardContent>
      {allActivity.map((exercises, index) => {
            return (
              <Link to={'/exercise/${exercises._id}'}>
              <Typography variant="h5" component="div" key={index}>
                {exercises.exercise}
              </Typography>
              </Link>
            );
      })}
          </CardContent>
          <CardActions>
            <Link to={'/exercise/add'}>
            <Button size="small">Add Exercise</Button>
            </Link>
          </CardActions>
        </Card>
        </Grid>
      {/* End Exercise Card */}
    </Grid>
      
    </Container>
    </>
  )
}

export default Dashboard
