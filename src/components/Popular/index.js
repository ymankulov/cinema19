import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../../API";
import MovieCard from "../MovieCard";
import { useParams } from "react-router-dom";
import { LanguageContext } from "../../context";

const Popular = () => {
  const [red, setRed] = useState(1);
  const [popular, setPoplar] = useState([]);
  const { language, dark } = useContext(LanguageContext);
  console.log(language, "Lan");
  const getPopular = (key) => {
    window.scroll(0, 0);
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${red}`
    ).then((res) => setPoplar(res.data.results));
  };
  useEffect(() => {
    getPopular(API_KEY);
  }, [red, language]);
  console.log(popular);
  return (
    <div
      id="popular"
      style={{
        background: dark ? "black" : "white",
      }}
    >
      <div className="container">
        <div className="popular">
          {popular.map((el) => (
            <MovieCard key={el.id} el={el} />
          ))}
        </div>
        <div className="popular--pagination">
          <button onClick={() => setRed(red === 1 ? red : red - 1)}>
            Last
          </button>
          <h4>{red}</h4>
          <button onClick={() => setRed(red + 1)}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Popular;
