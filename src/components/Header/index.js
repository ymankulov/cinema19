import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LanguageContext } from "../../context";
import { MdOutlineDarkMode } from "react-icons/md";
import { AiTwotoneHeart } from "react-icons/ai";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const { setLenguage, language, setDark, dark } = useContext(LanguageContext);
  const nav = useNavigate();
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <Link to={"/"}>
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="img"
            />
          </Link>
          <div className="header--nav">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/popular"}>Popular</NavLink>
            <NavLink to={"/topRated"}>Top Rated</NavLink>
          </div>
          <select onChange={(e) => setLenguage(e.target.value)}>
            <option value="en-US">English</option>
            <option value="ru-RU">Руссий</option>
            <option value="fr-FR">France</option>
          </select>
          <a
            href="#"
            onClick={() => setDark(!dark)}
            style={{
              color: dark ? "white" : "black",
            }}
          >
            <MdOutlineDarkMode />
          </a>

          <NavLink to={`/favorite`}>
            <AiTwotoneHeart />
          </NavLink>
          <div className="header--search">
            <input
              onInput={(e) => {
                nav(`/search/${e.target.value}`);
              }}
              type="text"
              value={inputValue}
              placeholder="search"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              style={{
                display: inputValue ? "block" : "none",
              }}
              onClick={
                inputValue
                  ? () => {
                      nav(`/search/${inputValue}`);
                      setInputValue("");
                    }
                  : null
              }
            >
              search
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
