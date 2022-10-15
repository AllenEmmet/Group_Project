import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {BrowserRouter, Routes, Router, Route, Navigate} from 'react-router-dom'
import { AppBar, Paper } from '@mui/material';
import Main from './views/Main'
import AddFood from './views/AddFood'
import AddExcercise from './views/AddExercise'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path='/' default></Route>
          <Route element={<AddFood/>} path='/food/add'></Route>
          <Route element={<AddExcercise/>} path='/exercise/add'></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;