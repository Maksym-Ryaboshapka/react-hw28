import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Title, Img, Subtitle, Text } from "./styles/MovieDesc.styled";

const MovieDesc = ({ movie, genres }) => {
  const [genresStr, setGenresStr] = useState("");

  const releaseDate = new Date(movie.release_date);
  const releaseYear = releaseDate.getFullYear();

  const rating = Math.round(movie.vote_average * 10);
  const genreIds = movie.genre_ids;

  useEffect(() => {
    if (Object.keys(genres).length > 0) {
      const genresArr = [];

      genreIds.forEach((id) => {
        genresArr.push(genres[id]);
      });

      setGenresStr(genresArr.join(" "));
    }
  }, [genres]);

  return (
    <>
      <Title>
        {movie.title} ({releaseYear})
      </Title>
      <Img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />

      <Text>User score: {rating}%</Text>

      <Subtitle>Overview</Subtitle>
      <Text>{movie.overview}</Text>

      <Subtitle>Genres</Subtitle>
      <Text>{genresStr}</Text>

      <Subtitle>Addition information</Subtitle>
      <Link
        to={`/movie/${movie.id}/cast`}
        state={{ movie }}
        style={{ display: "block" }}
      >
        Cast
      </Link>
      <Link to={`/movie/${movie.id}/reviews`} state={{ movie }}>
        Reviews
      </Link>
    </>
  );
};

export default MovieDesc;
