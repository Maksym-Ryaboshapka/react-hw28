import { NavLink } from "react-router-dom";
import { Nav } from "./styles/Header.styled";

const Header = () => {
  return (
    <Nav>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
        })}
      >
        Movies
      </NavLink>
    </Nav>
  );
};

export default Header;
