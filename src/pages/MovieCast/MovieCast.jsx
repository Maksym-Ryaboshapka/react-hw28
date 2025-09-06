import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import getGenres from "../../api/getGenres";
import getCast from "../../api/getCast";
import MovieDesc from "../../components/MovieDesc/MovieDesc";
import Cast from "./Cast/Cast";

const MovieCast = () => {
  const [genres, setGenres] = useState([]);
  const [genresMap, setGenresMap] = useState({});
  const [cast, setCast] = useState([]);

  const location = useLocation();
  const movie = location.state?.movie;

  useEffect(() => {
    (async () => {
      const res = await getGenres();
      setGenres(res.genres);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const res = await getCast(movie.id);
      setCast(res.cast);
    })();
  }, []);

  useEffect(() => {
    if (genres.length > 0) {
      const genresObj = {};

      genres.forEach((genre) => {
        genresObj[genre.id] = genre.name;
      });

      setGenresMap(genresObj);
    }
  }, [genres]);

  return (
    <>
      <MovieDesc movie={movie} genres={genresMap} />
      <hr />
      {cast.map((c) => {
        if (c) {
          return (
            <Cast
              name={c.name}
              character={c.character}
              profilePicture={c.profile_path}
              key={c.id}
            />
          );
        }
      })}
    </>
  );
};

export default MovieCast;
