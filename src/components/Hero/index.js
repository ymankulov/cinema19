import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";
import axios from "axios";

const Hero = () => {
  const [background, setBackground] = useState([]);
  //   const [randomBg, setRandomBg] = useState("");
  let result = [];
  const getBackground = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
    ).then((res) =>
      res.data.results.map((el) => {
        result = [...result, el.backdrop_path];
        setBackground(result);
      })
    );
  };
  //   const bgRandom = () => {
  //     let idx = Math.round(Math.random() * background.length);
  //     console.log(idx);
  //     return background[idx];
  //   };

  useEffect(() => {
    getBackground(API_KEY);
  }, []);

  return (
    <div
      style={{
        background: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${
          background[Math.round(Math.random() * background.length)]
        }) no-repeat center/cover fixed`,
        minHeight: "90vh",
      }}
    ></div>
  );
};

export default Hero;
