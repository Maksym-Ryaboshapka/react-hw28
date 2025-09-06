import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import getGenres from "../../api/getGenres";
import getReviews from "../../api/getReviews";
import MovieDesc from "../../components/MovieDesc/MovieDesc";
import Review from "./Review/Review";

const MovieReviews = () => {
  const [genres, setGenres] = useState([]);
  const [genresMap, setGenresMap] = useState({});
  const [reviews, setReviews] = useState([]);

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
      const res = await getReviews(movie.id);
      setReviews(res.results);
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
      <>
        {reviews.length > 0 ? (reviews.map((r) => {
          return <Review author={r.author} content={r.content} key={r.id} />
        })) : <p>We have any reviews for this movie</p>}
      </>
    </>
  );
};

export default MovieReviews;
