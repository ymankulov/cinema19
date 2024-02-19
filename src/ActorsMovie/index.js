import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../API";
import { Link } from "react-router-dom";

const ActorsMovie = () => {
  let [actorMovie, setActorMovie] = useState([]);
  let { id } = useParams();
  function getActMovie(key) {
    axios(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=en-US`
    ).then((res) => {
      setActorMovie(res.data.cast);
    });
  }
  useEffect(() => {
    getActMovie(API_KEY);
  }, []);
  return (
    <div id="actorsMovie">
      <div className="container">
        <div className="actorsMovie">
          {actorMovie?.map((el) => (
            <div className="actorsMovie--block">
              <Link to={`/movie/details/${el.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`}
                  alt=""
                />
              </Link>
              <h1>{el.title}</h1>
              <h2>{el.release_date}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActorsMovie;
