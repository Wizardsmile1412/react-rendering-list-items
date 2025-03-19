import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data/movies';

const MovieList = () => {
  const containerStyle = {
    width: '100%',
    minHeight: '100vh',
    padding: '40px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#f5f5f5'
  };

  return (
    <div style={containerStyle}>
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList; 