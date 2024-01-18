import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import {exerciseOptions , fetchData, youtubeoptions} from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {

  const {id} = useParams();

  const [exerciseDetail , setExerciseDetail] = useState([]);
  const [exerciseVideos ,setExerciseVideos] = useState([]);
  const [targetMuscle, setTargetMuscle] = useState([]);
  const [equipmentExercise , setEquipmentExercise] = useState([]);

  useEffect(()=>{

    const fetchExerciseData = async()=>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}` , exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeoptions)
      setExerciseVideos(exerciseVideoData.contents);


      const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}` , exerciseOptions);
      setTargetMuscle(targetMuscleExerciseData);

      const equipmentMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}` , exerciseOptions);
      setEquipmentExercise(equipmentMuscleExerciseData)

    }

    fetchExerciseData();

  },[id])

  return (
    <Box>

      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscle={targetMuscle} equipmentExercise={equipmentExercise} />

    </Box>
  )
}

export default ExerciseDetail
