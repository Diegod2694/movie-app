import React from 'react';
import MovieDetails from './components/MovieDetails'
import MoviesList from './components/MoviesList'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Movie App</h1>
      <MoviesList />
      <MovieDetails />
    </div>
  );
}

export default App;
