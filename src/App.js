import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import MovieDetails from "./Pages/MovieDetails";
import ActorsDetails from "./Pages/ActorsDetails";
import Search from "./Pages/Search";
import Favorite from "./Favorite";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/topRated" element={<TopRated />} />
        <Route path="/movie/details/:movieId" element={<MovieDetails />} />
        <Route path="/actor/Details/:id" element={<ActorsDetails/>}/>
        <Route path="/search/:movieName" element={ <Search/> }/>
        <Route path="/favorite" element={<Favorite/>}/>
      </Routes>
    </div>
  );
}

export default App;
