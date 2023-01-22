import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const CardExercise = () => {
  const cardStyle = {
    minWidth: "200px",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <>
      <Box sx={{ margin: "18px" }}>CardExercise</Box>
      <Box>
        <Stack sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          <Card sx={cardStyle}>
            <Box sx={{position:"relative", }}>
              <Typography sx={{}}>last</Typography>
              <Typography>Next</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Typography>Toto is sleeping</Typography>
            </Box>
          </Card>
          <Card sx={cardStyle}>
            <Typography>Toto is sleeping</Typography>
          </Card>
          <Card sx={cardStyle}>
            <Typography>Toto is sleeping</Typography>
          </Card>
          <Card sx={cardStyle}>
            <Typography>Toto is sleeping</Typography>
          </Card>
          <Card sx={cardStyle}>
            <Typography>Toto is sleeping</Typography>
          </Card>
        </Stack>
      </Box>
    </>
  );
};

export default CardExercise;
