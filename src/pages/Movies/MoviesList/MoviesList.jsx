import { useState, useEffect } from "react";

import searchMovies from "../../../api/search-movies ";
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
  
  return movieKeyword ? <List>
    {movies.map((m) => {
      return <Item key={m.id}>
        <Title>{m.title}</Title>
      </Item>
    })}
  </List> : null;
};

export default MoviesList;
