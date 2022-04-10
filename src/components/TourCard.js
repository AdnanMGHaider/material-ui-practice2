import React from "react";
import { Paper, Grid, Typography, Box, Rating } from "@mui/material";
import beach from "../assets/beach.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={6}>
        <img className="img" src={beach} alt="" />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            Breathtaking waterfalls
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccessTimeIcon sx={{ width: 12.5 }} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              5 hours
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }} marginTop={1}>
            <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />
            <Typography variant="body2" component="p" margin={0.5}>
              4.5
            </Typography>
            <Typography variant="body3" component="p" margin={1.5}>
              (655 reviews)
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="h3" marginTop={0}>
              From $150
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
