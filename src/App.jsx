import "./App.css";
import React from 'react';
import MovieList from './components/MovieList';

function App() {
  const appStyle = {
    width: '100%',
    minHeight: '100vh',
    margin: 0,
    padding: 0
  };

  return (
    <div style={appStyle}>
      <MovieList />
    </div>
  );
}

export default App;
