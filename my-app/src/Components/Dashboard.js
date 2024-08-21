import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'; 
import './Dashboard.css';

function Dashboard() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios.post('https://hoblist.com/api/movieList', {
      category: 'movies',
      language: 'kannada',
      genre: 'all',
      sort: 'voting',
    })
      .then((response) => {
        setMovies(response.data.result);
        setLoading(false); 
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
        setLoading(false); 
      });
  }, []);

  return (
    <div className="dashboard-container">
      <center><h2>Movie List</h2></center>
      {loading ? ( 
        <div className="loading">Loading data...</div>
      ) : (
        <ul className="movie-list">
          {movies.map((movie, index) => (
            <li key={index} className="movie-item">
              <img src={movie.poster} alt={movie.title} className="movie-poster" />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p><strong>Genre:</strong> {movie.genre}</p>
                <p><strong>Director:</strong> {movie.director}</p>
                <p><strong>Starring:</strong> {movie.stars.join(', ')}</p>
                <p><strong>Runtime:</strong> {movie.runTime} Mins | {movie.language}</p>
                <p><strong>{movie.pageViews} views | Voted by {movie.voting} People</strong></p>
                <button className="trailer-button">Watch Trailer</button>
              </div>
              <div className="movie-votes">
                <FaArrowUp className="arrow-icon" />
                <p>{movie.voting}</p>
                <FaArrowDown className="arrow-icon" />
                <p>Votes</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dashboard;
