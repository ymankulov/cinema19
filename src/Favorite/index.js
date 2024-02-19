import React, { useContext } from "react";
import { LanguageContext } from "../context";
import MovieCard from "../components/MovieCard";

const Favorite = () => {
  const { favorite } = useContext(LanguageContext);
  return (
    <div id="favorite">
      <div className="container">
        <h1>Hello favorite</h1>
        <div className="favorite">
          {favorite.map((el) => (
            <MovieCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
