import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";
import userImg from "../../img/user.png";
import { Link } from "react-router-dom";

const Actors = ({ id }) => {
  const [actors, setActors] = useState([]);

  //https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=en-US
  const getActors = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`
    ).then((res) => {
      setActors(res.data.cast);
    });
  };
  useEffect(() => {
    getActors(API_KEY);
  }, []);
  // console.log(actors);
  return (
    <div id="actors">
      <div className="container">
        <div className="actors">
          {actors.map((el) => (
            <div className="actors--card" key={el.id}>
              <Link to={`/actor/Details/${el.id}`}>
                {el.profile_path ? (
                  <img
                    src={`https://media.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`}
                    alt="img"
                    width={250}
                  />
                ) : (
                  <img src={userImg} width={317} alt="" />
                )}
              </Link>
              <h2>{el.original_name}</h2>
              <h4>{el.character}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Actors;
