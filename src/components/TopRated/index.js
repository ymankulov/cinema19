import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../../API";
import MovieCard from "../MovieCard";
import { LanguageContext } from "../../context";

const TopRated = () => {
  const [topRated, setTopRated] = useState([]);
  const { language, dark } = useContext(LanguageContext);
  const getTopRated = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=1`
    ).then((res) => setTopRated(res.data.results));
  };
  useEffect(() => {
    getTopRated(API_KEY);
  }, [language]);
  console.log(topRated);
  return (
    <div id="popular" style={{
        background: dark ? "black" : "white",
      }}>
      <div className="container">
        <div className="popular">
          {topRated.map((el) => (
            <MovieCard key={el.id} el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRated;

// https://api.themoviedb.org/3/movie/${movieId}?api_key=api&language=en-US
