import React, { useEffect, useState } from 'react';
import { API_KEY, imageUrl } from '../../Constants/Constants';
import axios from '../../Axios';
import './Banner.css';

export default function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `trending/all/week?api_key=${API_KEY}&language=en-US`
        );
        const randomIndex = Math.floor(Math.random() * response.data.results.length);
        const selectedMovie = response.data.results[randomIndex];
        setMovie(selectedMovie);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})` }}
      className="Banner"
    >
      <div className="Content">
        <h1 className="Title">{movie ? movie.title : ''}</h1>
        <div className="Banner_Buttons">
          <button className="Button">Play</button>
          <button className="Button">My list</button>
        </div>
        <h1 className="Description">{movie ? movie.overview : ''}</h1>
      </div>
      <div className="Fade"></div>
    </div>
  );
}
