import '../css/App.css'
import { MovieInput } from '../components/MovieInput';
import { MovieList } from '../components/MovieList';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import { Fragment } from 'react';
import MovieChange from './MovieChange';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/change' element={<MovieChange/>}/>
      </Routes>
    </Fragment>
  );
}

export default App
