import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context";

const MovieCard = ({ el }) => {
  const { dark, setDark } = useContext(LanguageContext);
  return (
    <div id="movieCard">
      <div
        className="movieCard"
        style={{
          border: dark ? "2px solid white" : "2px solid black",
          color: dark ? "white" : "black",
        }}
      >
        <Link to={`/movie/details/${el.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`}
            alt=""
          />
        </Link>
        <h3>{el.title}</h3>
        <h4>{el.release_date}</h4>
      </div>
    </div>
  );
};

export default MovieCard;
