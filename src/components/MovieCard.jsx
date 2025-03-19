import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
  // สีสำหรับ genres
  const genreColors = [
    { bg: '#FFE0E0', text: '#D32F2F' }, // แดง
    { bg: '#E3F2FD', text: '#1976D2' }, // น้ำเงิน
    { bg: '#E8F5E9', text: '#388E3C' }, // เขียว
    { bg: '#FFF3E0', text: '#F57C00' }, // ส้ม
    { bg: '#F3E5F5', text: '#7B1FA2' }, // ม่วง
    { bg: '#E0F7FA', text: '#0097A7' }, // ฟ้า
    { bg: '#FFF8E1', text: '#FFA000' }, // เหลือง
    { bg: '#FCE4EC', text: '#C2185B' }  // ชมพู
  ];

  const getGenreStyle = (index) => {
    const colorIndex = index % genreColors.length;
    return {
      padding: '2px 8px',
      backgroundColor: genreColors[colorIndex].bg,
      color: genreColors[colorIndex].text,
      borderRadius: '4px',
      fontSize: '0.8rem',
      display: 'inline-block'
    };
  };

  const cardStyle = {
    width: '400px',
    height: '250px',
    borderRadius: '10px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    padding: '15px',
    gap: '15px',
    boxSizing: 'border-box'
  };

  const imageContainerStyle = {
    width: '102px',
    height: '100px',
    overflow: 'hidden',
    borderRadius: '8px',
    flexShrink: 0
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  const contentStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    textAlign: 'left',
    overflow: 'hidden'
  };

  const titleStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: 0,
    textAlign: 'left',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  };

  const infoStyle = {
    fontSize: '0.9rem',
    margin: 0,
    color: '#666',
    textAlign: 'left'
  };

  const genreContainerStyle = {
    display: 'flex',
    gap: '4px',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  };

  const labelStyle = {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '4px',
    textAlign: 'left'
  };

  return (
    <div style={cardStyle}>
      <div style={imageContainerStyle}>
        <img src={movie.image} alt={movie.title} style={imageStyle} />
      </div>
      <div style={contentStyle}>
        <h3 style={titleStyle}>Title: {movie.title}</h3>
        <p style={infoStyle}>Year: {movie.year}</p>
        <p style={infoStyle}>Runtime: {movie.runtime}</p>
        <div>
          <div style={labelStyle}>Genres:</div>
          <div style={genreContainerStyle}>
            {movie.genres.map((genre, index) => (
              <span key={genre} style={getGenreStyle(index)}>{genre}</span>
            ))}
          </div>
        </div>
        <p style={infoStyle}>IMDB Ratings: {movie.imdbRating || 'N/A'}</p>
        <p style={infoStyle}>IMDB Votes: {movie.imdbVotes || 'N/A'}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.string,
    runtime: PropTypes.string,
    director: PropTypes.string,
    image: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    imdbRating: PropTypes.string,
    imdbVotes: PropTypes.string
  }).isRequired
};

export default MovieCard; 