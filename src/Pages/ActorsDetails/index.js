import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { API_KEY } from "../../API";
import { useParams } from "react-router-dom";
import ActorsMovie from "../../ActorsMovie";
import { LanguageContext } from "../../context";

const ActorsDetails = () => {
  const [det, setDet] = useState([]);
  const [bio, setBio] = useState(false);
  const { language, dark } = useContext(LanguageContext);
  let { id } = useParams();

  const getDetals = (key) => {
    axios(
      `https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=${language}`
    ).then((res) => {
      setDet(res.data);
    });
  };
  useEffect(() => {
    getDetals(API_KEY);
  }, [language]);
  console.log(det);
  let { biography } = det;
  // https://api.themoviedb.org/3/person/${personId}?api_key=${key}&language=en-US
  return (
    <>
      <div id="actorsDetails">
        <div className="container">
          <div className="actorsDetails">
            <img
              src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${det.profile_path}`}
              alt=""
            />
            <div className="op">
              <h1>{det.name}</h1>
              <div className="">
                <h2>
                  {det.birthday} / {det.place_of_birth}
                </h2>
              </div>
              <h2>{language === "ru-RU" ? "Биография" : "Biography"}</h2>
              <h4>
                {biography?.slice(0, 400)}{" "}
                <span
                  onClick={() => setBio(true)}
                  style={{
                    color: "blue",
                    cursor: "pointer",
                    display: bio ? "none" : "flex",
                  }}
                >
                  more...
                </span>
              </h4>
              <h4
                style={{
                  display: bio ? "flex" : "none",
                }}
              >
                {biography?.slice(400)}{" "}
              </h4>
              <button
                style={{
                  color: "blue",
                  background: "none",
                  display: bio ? "flex" : "none",
                  fontSize: "15px",
                }}
                onClick={() => setBio(false)}
              >
                Hide
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
      <ActorsMovie />
    </>
  );
};

export default ActorsDetails;
