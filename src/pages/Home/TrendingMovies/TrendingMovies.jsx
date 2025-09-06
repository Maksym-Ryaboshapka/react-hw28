import { useState, useEffect } from "react";
import getTrending from "../../../api/getTrending";
import { Link } from "react-router-dom";

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
          return (
            <Item key={m.id}>
              <Link to={`/movie/${m.id}`} state={{ movie: m }}>
                {m.title}
              </Link>
            </Item>
          );
        })}
      </List>
    </>
  );
};

export default TrendingMovies;
