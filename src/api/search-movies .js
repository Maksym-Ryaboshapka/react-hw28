const searchMovies = async (keyword) => {
  const url =
    `https://api.themoviedb.org/3/search/movie?query=${keyword}&language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTg5ZGU3NDM0N2Q4Mjg4OGQyZDFjZTU5ZGQ2NTZhZSIsIm5iZiI6MTc1NTc3NjU3NC4zNjcsInN1YiI6IjY4YTcwNjNlNmY3MDIxYTllMWE4MWNiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r97B4_cAktYcRzkopNxfhWlk8ECT4zxtpkqOo7E8H64",
    },
  };

  try {
    const res = await fetch(url, options);
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};

export default searchMovies;