
import './App.css';
import { useState } from 'react';
import {BrowserRouter, Routes, Router, Route, Navigate} from 'react-router-dom'
import { AppBar, Paper } from '@mui/material';
import Main from './views/Main'
import AddFood from './views/AddFood'
import AddExercise from './views/AddExercise'
import EditExercise from './views/EditExercise';
import EditFood from './views/EditFood';
import Login from './components/Login.js';
import Signup from './components/Signup.js';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path='/' default></Route>
          <Route element={<Login />} path='/login'></Route>
          <Route element={<Signup />} path='/signup'></Route>
          <Route element={<AddFood/>} path='/food/add'></Route>
          <Route element={<AddExercise/>} path='/exercise/add'></Route> 
          <Route element={<EditExercise></EditExercise>} path='exercise/edit/:id'></Route>
          <Route element={<EditFood></EditFood>} path='food/edit/:id'></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
