import React, {ReactNode} from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const CardHeader = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '0',
        left: '0',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <Typography>Last</Typography>
      <Typography>Now</Typography>
      <Typography>Next</Typography>
    </Box>
  );
};

const CardExercise = () => {
  const cardStyle = {
    minWidth: '200px',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  };

  
  return (
    <>
      <Box sx={{ margin: '24px' }}>CardExercise</Box>
      {/* <Box> */}
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
        }}
      >
        <Card sx={{ ...cardStyle }}>
          <Box
            sx={{
              position: 'absolute',
              top: '0',
              left: '0',
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Typography>Last</Typography>
            <Typography>Now</Typography>
            <Typography>Next</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography>Toto is sleeping</Typography>
          </Box>
        </Card>
        <Card sx={{ ...cardStyle }}>
          <Box
            sx={{
              position: 'absolute',
              top: '0',
              right: '0',
              // left: 'auto',
              display: 'flex',
              // justifyContent: "flex-end"
              // width:"auto"
              marginLeft: '10',
            }}
          >
            <Typography sx={{display:"block", marginRight:"10px"}}>Last</Typography>
            <Typography sx={{display:"block", marginRight:"10px"}}>Next</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography>Toto is sleeping</Typography>
          </Box>
        </Card>

        <Card sx={cardStyle}>
          <CardHeader />
          <Typography>Toto is sleeping</Typography>
        </Card>
        <Card sx={cardStyle}>
          <Typography>Toto is sleeping</Typography>
        </Card>
        <Card sx={cardStyle}>
          <Typography>Toto is sleeping</Typography>
        </Card>
      </Stack>
      {/* </Box> */}
    </>
  );
};

export default CardExercise;
