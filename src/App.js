import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import Movie from "./pages/Movie/Movie";
import MovieCast from "./pages/MovieCast/MovieCast";
import MovieReviews from "./pages/MovieReviews/MovieReviews";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movie/:id" element={<Movie />}></Route>
        <Route path="/movie/:id/cast" element={<MovieCast />}></Route>
        <Route path="/movie/:id/reviews" element={<MovieReviews />}></Route>
      </Routes>
    </>
  );
};

export default App;
