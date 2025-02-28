import '../css/App.css'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import { Fragment } from 'react';
import MovieChange from './MovieChange';
import { createTheme, ThemeProvider } from '@mui/material';
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#546e7a" },  
    secondary: { main: "#78909c" }, 
    background: { 
      default: "#eceff1",            
      paper: "#cfd8dc"               
    },
    text: {
      primary: "#37474f",            
      secondary: "#546e7a"           
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    button: { textTransform: "none" },
  },
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Fragment>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/change/:id' element={<MovieChange />} />
        </Routes>
      </Fragment>
    </ThemeProvider>
  );
}

export default App
