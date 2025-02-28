import { Grid, Container, Paper } from "@mui/material";
import { MovieInput } from "../components/MovieInput"
import { MovieList } from "../components/MovieList"
import '../css/index.css'

const Dashboard = () => {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 3 }}>
              <MovieInput />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 3 }}>
              <MovieList />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  };

export default Dashboard;