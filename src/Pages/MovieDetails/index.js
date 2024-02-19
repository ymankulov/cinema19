import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "../../API";
import {
  AiFillStar,
  AiOutlineMenuUnfold,
  AiTwotoneHeart,
} from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

import { BsFillBookmarkFill } from "react-icons/bs";
import Actors from "../../components/Actors";
import Video from "../../components/Video";
import { LanguageContext } from "../../context";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  const [modal, setModal] = useState(false);
  const [click, setClick] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const { language, dark, favorite, setFavorite } = useContext(LanguageContext);
  const {
    title,
    poster_path,
    release_date,
    genres,
    tagline,
    overview,
    backdrop_path,
    vote_average,
    runtime,
  } = details;
  
  const progressEndValue = Math.round(vote_average * 10);
  const heartIcon = favorite.some((el) => el.id === details.id) 
  console.log(heartIcon, "wwww");
  useEffect(() => {
    let progressStartValue = 0;
    let progress = setInterval(() => {
      progressStartValue++;
      setProgressValue(progressStartValue);
      if (progressStartValue === progressEndValue) {
        clearInterval(progress);
      }
    }, 20);
    return () => {
      clearInterval(progress);
    };
  }, [progressEndValue]);
  const res = {
    background: `conic-gradient(#17c78f ${
      progressValue * 3.6
    }deg, #0f1b16 0deg)`,
  };
  function getMov(date) {
    setClick(!click);
    let findMovie = favorite.find((el) => el.id === date.id);
    if (findMovie) {
      const filteredMovies = favorite.filter((el) => el.id !== date.id);
      setFavorite(filteredMovies);
    } else {
      setFavorite((prev) => [...prev, date]);
    }
  }
  console.log(click, "eeeee");

  const getDetails = (key) => {
    window.scroll(0, 0);
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=${language}`
    ).then((res) => setDetails(res.data));
  };
  // console.log(details, "gggg");
  useEffect(() => {
    getDetails(API_KEY);
  }, [language]);
  return (
    <div
      style={{
        background: dark ? "black" : "white",
        color: dark ? "white" : "black",
      }}
    >
      <div
        style={{
          minHeight: "80vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          background: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}) no-repeat center/cover fixed`,
          minHeight: "90vh",
        }}
        id="details"
      >
        <div className="container">
          <div className="details">
            <div className="details--img">
              <img
                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`}
                alt=""
                onClick={() => setModal(true)}
              />
              <div
                className="details--img__modal"
                style={{
                  display: modal ? "block" : "none",
                  zIndex: modal ? "20" : "",
                }}
              >
                <h4 onClick={() => setModal(false)}>X</h4>
                <div className="details--img__modal--content">
                  <img
                    src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`}
                    alt=""
                  />
                  <div className="details--img__modal--content__block">
                    <h1>{title}</h1>
                    <div className="details--title__block--krug" style={res}>
                      <h3 className="details--title__block--krug__h3">
                        {progressValue}%
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="details--img__blur"
                onClick={() => setModal(false)}
                style={{
                  background: modal ? "rgba(0,0,0,0.62)" : "",
                  zIndex: modal ? "10" : "",
                }}
              ></div>
            </div>
            <div className="details--title">
              <h1>{title}</h1>
              <div className="details--title__group">
                <h6>{release_date}</h6>
                <div className="details--title__group--genres">
                  {genres?.map((el, idx) => (
                    <p key={idx}>{el.name}</p>
                  ))}
                </div>
                <h4>
                  {Math.floor(runtime / 60)}h {Math.floor(runtime % 60)}m
                </h4>
              </div>
              <div className="details--title__block">
                <div className="details--title__block--krug" style={res}>
                  <h3 className="details--title__block--krug__h3">
                    {progressValue}%
                  </h3>
                </div>
                <h4>Рейтинг</h4>
                <div className="details--title__block--icon1">
                  <AiOutlineMenuUnfold />
                </div>
                <div
                  className="details--title__block--icon2"
                  onClick={() => {
                    getMov(details);
                  }}
                >
                  <FaHeart
                    style={{
                      color: heartIcon ? "red" : "white",
                    }}
                  />
                </div>
                <div className="details--title__block--icon3">
                  <BsFillBookmarkFill />
                </div>
                <div className="details--title__block--icon4">
                  <AiFillStar />
                </div>
              </div>
              <div>
                <i>
                  <h5>"{tagline}"</h5>
                </i>
                <i>{overview}</i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Actors id={movieId} />
      <Video id={movieId} />
    </div>
  );
};

export default MovieDetails;

/// https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}
