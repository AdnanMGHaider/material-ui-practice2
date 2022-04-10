import React from "react";
import { Container, Typography, Box } from "@mui/material";
import ImageCollage from "../components/ImageCollage";

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img src="https://media.timeout.com/images/105124791/750/422/image.jpg" alt="" height={325} />
        <ImageCollage />
      </Box>
    </Container>
  );
};

export default Tour;
