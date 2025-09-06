import { Img, Text } from "./styles/Cast.styled";

const Cast = ({ name, character, profilePicture }) => {
  return (
    <>
      <Img
        src={`https://image.tmdb.org/t/p/w200/${profilePicture}.jpg`}
        alt={name}
      />

      <Text>{name}</Text>
      <Text>Character: {character}</Text>
    </>
  );
};

export default Cast;
