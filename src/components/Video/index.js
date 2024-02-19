import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";
import { useParams } from "react-router-dom";

const Video = ({ id }) => {
  const [treuler, setTreyler] = useState([]);

  function getTreyler(key) {
    axios(
      ` https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US `
    ).then((res) => {
      setTreyler(res.data.results);
      console.log(res.data);
    });
  }
  useEffect(() => {
    getTreyler(API_KEY);
  }, []);
  console.log(treuler);
  return (
    <div id="treuler">
      <div className="container">
        <div className="treuler">
          {treuler.map((el) => (
            <div className="treylet">
              <iframe
                width="441"
                height="317"
                src={`https://www.youtube.com/embed/${el.key}`}
                title="Miyagi &amp; Эндшпиль feat. Amigo - Самая (Lyric video)/ Andy Panda"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Video;
