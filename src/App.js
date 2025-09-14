import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// import Header from "./components/Header/Header";
// import Home from "./pages/Home/Home";
// import Movies from "./pages/Movies/Movies";
// import MovieLayout from "./components/MovieLayout/MovieLayout";
// import MovieCast from "./pages/MovieCast/MovieCast";
// import MovieReviews from "./pages/MovieReviews/MovieReviews";

const Header = lazy(() => import("./components/Header/Header"));
const Home = lazy(() => import("./pages/Home/Home"));
const Movies = lazy(() => import("./pages/Movies/Movies"));
const MovieLayout = lazy(() => import("./components/MovieLayout/MovieLayout"));
const MovieCast = lazy(() => import("./pages/MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./pages/MovieReviews/MovieReviews"));

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieLayout />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
