import React, {useState} from 'react'
import { Box,Stack, Typography ,Button} from '@mui/material'
// import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function Bmi() {
  // console.log(AddCircleIcon);

  const [height , setHeight] = useState(100);
  const [weight , setWeight] = useState(20);
  const [ans, setAns] = useState();

  function bmi(){
    const bmians = (weight/((height*height)/10000)).toFixed(2);
    setAns(bmians)
    reset();
    return bmians;
  }

  function reset(){
    setHeight(0);
    setWeight(0);
    document.getElementById('age').value =0;
  }

  return (
    <Box>
      <h3><b>B</b>ody <b>M</b>ass <b>I</b>ndex Calculator</h3>

<form class="form" id="form" onsubmit="return validateForm()">
  <Box class="row-one">
      <input type="text" class="text-input" id="age" autocomplete="off" required/><p class="text">Age</p>
      <label class="container">
      <input type="radio" name="radio" id="f" /><p class="text">Female</p>
        <span class="checkmark"></span>
      </label>
      <label class="container">
      <input type="radio" name="radio" id="m"/><p class="text">Male</p>
        <span class="checkmark"></span>
      </label>
  </Box>

<div class="row-two">
  <input type="text" class="text-input" id="height" autocomplete="off" required value={height} onChange={(e)=> setHeight(e.target.value)}/><Typography class="text">Height (cm)</Typography>
  <input type="text" class="text-input" id="weight" autocomplete="off" required value={weight} onChange={(e)=> setWeight(e.target.value)}/><p class="text">Weight (kg)</p>
</div>
<Button onClick={bmi} type="button" id="submit">Submit</Button>
<h3>your bmi is {ans}</h3>
</form>
     
    </Box>

  )

  
}

