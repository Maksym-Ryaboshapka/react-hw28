import { useState } from "react";

import Search from "./Search/Search";
import MoviesList from "./MoviesList/MoviesList";

const Movies = () => {
  const [movieKeyword, setMovieKeyword] = useState("");

  return (
    <>
      <Search setMovieKeyword={setMovieKeyword} />
      <MoviesList movieKeyword={movieKeyword} />
    </>
  );
};

export default Movies;
