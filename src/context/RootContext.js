import React, { useState } from "react";
import { LanguageContext } from ".";

const RootContext = ({ children }) => {
  const [language, setLenguage] = useState("en-US");
  const [dark, setDark] = useState(false)
  const [favorite, setFavorite] = useState([])
  return (
    <LanguageContext.Provider
      value={{
        language,
        setLenguage,
        dark,
        setDark,
        favorite,
        setFavorite
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default RootContext;
