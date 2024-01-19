import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';

function SimilarExercises({targetMuscle, equipmentExercise}) {
 
  return (
    <Box sx={{mt: {lg: '100px', xs: '0'}}}>
      <Typography variant='h3' mb={5}>
        Here are some exercises that target same muscle group
      </Typography>
      <Stack direction='row' sx={{p:'2' , position: 'relative'}}>
      {targetMuscle.length ? <HorizontalScrollBar data={targetMuscle} /> : <Loader/>}  
      </Stack>

      <Typography variant='h3' mb={5}>
        Here are some exercises that uses same equipment
      </Typography>
      <Stack direction='row' sx={{p:'2' , position: 'relative'}}>
      {equipmentExercise.length ? <HorizontalScrollBar data={equipmentExercise} /> : <Loader/>}  
      </Stack>

    </Box>
  )
}

export default SimilarExercises
