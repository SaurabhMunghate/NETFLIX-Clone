import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "./requests";
import "./Banner.css";
const base_url = "https://api.themoviedb.org/3";

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://api.themoviedb.org/3/trending/all/week?api_key=d86637d15f0b23dfc9cfac810b5d69e9&language=en-US"
      );
      console.log(response);
      const randomMovieIndex = Math.floor(
        Math.random() * response.data.results.length
      );
      const randomMovie = response.data.results[randomMovieIndex];
      setMovie(randomMovie);
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
              "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
          )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_description">{movie?.overview}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;
