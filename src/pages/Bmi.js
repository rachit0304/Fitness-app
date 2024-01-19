import React, {useState} from 'react'
import { Box,Stack, Typography ,Button, TextField} from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function Bmi() {
  console.log(AddCircleIcon);

  const [height , setHeight] = useState(0.5);
  const [weight , setWeight] = useState(20);

  function heightinc(){
    setHeight(height+0.1);
  }
  function heightdec(){
    setHeight(height-0.1);

  }
  function weightinc(){
    setWeight(weight+1);
  }
  function weightdec(){
    setWeight(weight-1);
  }

  function bmi(){
    const bmians = weight/(height*height);
    console.log(bmians);
    return bmians;
  }
  let ans;
  ans = (bmi()).toFixed(2);

  return (
    <Box>
      <Typography variant='h3'>
      Bmi Calculator
      </Typography>
      <Stack>

      <Stack direction='row'>
        <Typography>Enter your height in meters</Typography>
        <TextField id="outlined-basic"  variant="outlined" value={height.toFixed(2)}></TextField>
        <Button onClick={heightinc} height='30px'>+
        </Button>
        <Button onClick={heightdec}>-</Button>
      </Stack>
      <Stack> 
        <Typography>Enter your weight in Kgs</Typography>
        <TextField id="outlined-basic"  variant="outlined" value={weight.toFixed()}></TextField>

        <Button onClick={weightinc}>+</Button>
        <Button onClick={weightdec}>-</Button>
      </Stack>

      </Stack>

      <Button onClick={bmi}>Calculate</Button>
      <Typography>
        your bmi is {ans}
      </Typography>
    </Box>
  )
}
