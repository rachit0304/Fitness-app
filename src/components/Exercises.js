import React, {useEffect, useState} from 'react';
import Pagination from '@mui/material/Pagination';
import { Box,Stack, Typography } from '@mui/material/';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({exercises , setExercises , bodyPart}) => {
  // if(!exercises.length) return <Loader/>

  const [currentPage , setCurrentPage] = useState(1);
  
  const [exercisesPerPage] = useState(9);

  
  useEffect (()=>{
    const fetchExerciseData = async () =>{
      let exerciseData = [];

      if(bodyPart === 'all'){
        exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=108', exerciseOptions);
      }
      else{
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=30`, exerciseOptions);
      }

      setExercises(exerciseData);

    }

    fetchExerciseData();

  }, [bodyPart]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentexercises = exercises.slice(indexOfFirstExercise , indexOfLastExercise) ;
  


  if(!currentexercises.length) return <Loader />

  const paginate=(e, value)=>{
    setCurrentPage(value);
    window.scrollTo({top: 1800 , behavior: 'smooth'})
  }

  


  return (
    <Box id='exercises'
    sx={{mt: {lg: '110px'}}}
    mt='50px'
    p="20px"
    >
      <Typography variant='h3' mb='46px'>
        Showing Results

      </Typography>
      <Stack direction='row' sx={{gap: {lg: '110px', xs: '50px'}}}
      flexWrap='wrap' justifyContent='center'>
        {currentexercises.map((exercise,index)=>(

          <ExerciseCard key={index} exercise={exercise} />

        ))}

      </Stack>
      <Stack mt='100px' alignItems='center'>
          {exercises.length > 9 && (
            <Pagination 
            color='standard' 
            shape='rounded'
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
            />
          )}
      </Stack>

    </Box>
  )
}

export default Exercises
