import React from 'react';
import Box from '@mui/material/Box';
import { width } from '@mui/system';

const ButtonExercise = () => {
  return (
    <>
      <Box sx={{ margin: '10px', }}>ButtonExercise</Box>
      <Box sx={{ display: 'flex', flexDirection :"row", width:"100%"}}>
        <Box
          sx={{
            margin: '10px',
            width: '50%',
            background: 'skyblue',
            borderRadius: '5px',
          }}
        >
          <a style={{}}>Push me!</a>
        </Box>
        <Box
          sx={{
            margin: '10px',
            width: '50%',
            background: 'skyblue',
            borderRadius: '5px',
          }}
        >
          <a>Push, push me!</a>
        </Box>
      </Box>
    </>
  );
};

export default ButtonExercise;
