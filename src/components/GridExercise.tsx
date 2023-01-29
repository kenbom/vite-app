import React from 'react'
import Box from '@mui/material/Box'

const GridExercise = () => {
  return (
    <>
      <Box sx={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(100px, 1fr))"}}>
        <Box>item</Box>
        <Box>item</Box>
        <Box>item</Box>
        <Box>item</Box>
        <Box>item</Box>
      </Box>
    </>
  );
}

export default GridExercise