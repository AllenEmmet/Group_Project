import React, { useEffect, useState } from "react";
import '../App.css';
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
//import Link from '@mui/material/Link';
import Paper from "@mui/material/Paper";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [workouts, setWorkouts] = useState([]);
  const [food, setFood] = useState([]);
  const [btotal, setBtotal] = useState(0);
  const [ctotal, setCtotal] = useState(0);
  const [dtotal, setDtotal] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/activity")
      .then((res) => {
        setWorkouts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    const getWtotal = () => {
      workouts.map((workout) => {
        setBtotal((b) => b + workout.burnedcalories);
      });
      return btotal;
    };
    getWtotal();
  }, [workouts]);

  useEffect(() => {
    const getWtotal = () => {
      workouts.map((workout) => {
        setDtotal((b) => b + workout.duration);
      });
      return dtotal;
    };
    getWtotal();
  }, [workouts]);

  useEffect(() => {
    const getFtotal = () => {
      food.map((meal) => {
        setCtotal((c) => c + meal.calories);
      });
      return ctotal;
    };
    getFtotal();
  }, [food]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/food")
      .then((res) => {
        setFood(res.data);
        food.map((meal) => setCtotal(ctotal + meal.calories));
        // console.log(ctotal)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const removeWFromDom = (id) => {
    setWorkouts(workouts.filter((workout) => workout._id != id));
  };
  const removeFFromDom = (id) => {
    setFood(food.filter((food) => food._id != id));
  };
  const deleteWorkout = (id) => {
    axios
      .delete(`http://localhost:8000/api/activity/${id}`)
      .then((res) => {
        console.log(res.data);
        removeWFromDom(id);
      })
      .catch((err) => console.log(err));
    navigate("/");
  };

  const deleteFood = (id) => {
    axios
      .delete(`http://localhost:8000/api/food/${id}`)
      .then((res) => {
        console.log(res.data);
        removeFFromDom(id);
      })
      .catch((err) => console.log(err));
    navigate("/");
  };
  return (
    <>
      <Container maxWidth="md" component="main">
        {/* Hero unit */}
        <Container
          disableGutters
          maxWidth="sm"
          component="main"
          sx={{ pt: 8, pb: 6 }}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Exercise Tracker
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            component="p"
          >
            Quickly record food caloric intake and your exercise calories
            burned!
          </Typography>
          <Card sx={{ minWidth: 275 }}>
            <CardHeader
              title={"Total Calories"}
              titleTypography={{ align: "center" }}
              subheaderTypographyProps={{
                align: "center",
              }}
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[200]
                    : theme.palette.grey[700],
              }}
            />
            <CardContent>
            <p>
           {dtotal} minutes of exercise
          </p>
            <p className="gre">
          {ctotal} Calories Consumed
          </p>
          <p className="re">
           {btotal} Calories Burned
          </p>
          <p className="blu">
            Total remaining Calories = {ctotal - btotal}
        </p>
            </CardContent>
          </Card>
        </Container>
        {/* End hero unit */}

        {/* Food Card  */}
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Card sx={{ minWidth: 275 }}>
              <CardHeader
                title={"Calories Consumed"}
                subheader={"Here is a list of your Foods!"}
                titleTypography={{ align: "center" }}
                subheaderTypographyProps={{
                  align: "center",
                }}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[200]
                      : theme.palette.grey[700],
                }}
              />
              <CardContent>
                {/*Map the Foods onto the card*/}
                {food.map((food, index) => {
                  return (
                    <Link to={"/"}>
                      <Typography variant="h5" component="div" key={index}>
                        {food.food}<Button onClick={()=>deleteFood(food._id)}>Remove</Button> 
                      </Typography>
                    </Link>
                  );
                })}
              </CardContent>
              <CardActions>
                <Link to={"/food/add"}>
                  <Button size="small">Add Food</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          {/* End Food Card */}

          {/*Exercise Card*/}
          <Grid item xs={6}>
            <Card sx={{ minWidth: 275, maxWidth: 500 }}>
              <CardHeader
                title={"Calories Burned"}
                subheader={"Here is a list of your activities!"}
                titleTypography={{ align: "center" }}
                subheaderTypographyProps={{
                  align: "center",
                }}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[200]
                      : theme.palette.grey[700],
                }}
              />
              <CardContent>
                {workouts.map((exercises, index) => {
                  return (
                    <Link to={"/"}>
                      <Typography variant="h5" component="div" key={index}>
                        {exercises.exercise}<Button onClick={()=>deleteWorkout(exercises._id)}>Remove</Button> 
                      </Typography>
                    </Link>
                  );
                })}
              </CardContent>
              <CardActions>
                <Link to={"/exercise/add"}>
                  <Button size="small">Add Exercise</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          {/* End Exercise Card */}
        </Grid>
      </Container>
    </>
    
  );

};

export default Dashboard;
