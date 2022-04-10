import React from "react";
import { Paper, Grid, Typography, Box } from "@mui/material";
import beach from "../assets/beach.jpg";

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={6}>
        <img className="img" src={beach} alt="" />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            Breathtaking waterfalls
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
