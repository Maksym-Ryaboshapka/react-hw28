import { useState, useEffect } from "react";
import getTrending from "../../../api/get-trending";

import { List, Item, Title } from "./styles/TrendingMovies.styled";

const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getTrending();
      setTrendingMovies(res.results);
    })();
  }, []);

  return (
    <>
      <List>
        {trendingMovies.map((m) => {
          return <Item key={m.id}>
            <Title>{m.title}</Title>
          </Item>
        })}
      </List>
    </>
  );
};

export default TrendingMovies;
