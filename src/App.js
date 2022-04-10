import TourCard from "./components/TourCard";
import { Container, Grid } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Grid container spacing={5}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
