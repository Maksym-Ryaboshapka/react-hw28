import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import searchMovies from "../../../api/searchMovies";
import { List, Item, Title } from "./styles/MoviesList.styled";

const MoviesList = ({ movieKeyword }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      if (movieKeyword) {
        const res = await searchMovies(movieKeyword);
        setMovies(res.results);
      }
    })();
  }, [movieKeyword]);

  return movieKeyword ? (
    <List>
      {movies.map((m) => {
        return (
          <Item key={m.id}>
            <Link to={`/movie/${m.id}`} state={{ movie: m }}>
              {m.title}
            </Link>
          </Item>
        );
      })}
    </List>
  ) : null;
};

export default MoviesList;
