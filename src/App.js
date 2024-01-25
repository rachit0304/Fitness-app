import React from 'react'
import {Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import './App.css'

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Bmi from './pages/Bmi'

const App = () => {
  return (
      <Box width='400px' sx={{width: {xl:'1488px'}}} m="auto">
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/exercise/:id' element={<ExerciseDetail/>}></Route>
            <Route path='/bmicalculator' element={<Bmi/>}></Route>
        </Routes>
        <Footer />
      </Box>
  
  )
}

export default App
