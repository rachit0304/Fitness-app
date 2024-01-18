import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollBar';

function SimilarExercises({targetMuscle, equipmentExercise}) {
  if(!targetMuscle.length) return "Loading..."
  // console.log(targetMuscle);
  return (
    <Box sx={{mt: {lg: '100px', xs: '0'}}}>
      <Typography variant='h3'>
        Here are some same target muscle exercises
      </Typography>
      <Stack direction='row' sx={{p:'2' , position: 'relative'}}>
      {/* {targetMuscle.length && <HorizontalScrollbar data={targetMuscle} /> } */}
      
       

</Stack>

    </Box>
  )
}

export default SimilarExercises
