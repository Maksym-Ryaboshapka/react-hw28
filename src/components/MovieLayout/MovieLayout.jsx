import { Outlet } from "react-router-dom";
import Movie from "../../pages/Movie/Movie";

const MovieLayout = () => {
  return (
    <>
      <Movie />
      <Outlet />
    </>
  );
};

export default MovieLayout;
