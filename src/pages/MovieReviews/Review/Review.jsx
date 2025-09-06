import { Item, Text } from "./styles/Review.styled";

const Review = ({ author, content }) => {
  return (
    <Item>
      <Text>Author: {author}</Text>
      <Text>{content}</Text>
    </Item>
  );
};

export default Review;
