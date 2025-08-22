import { Form, Input, Button } from "./styles/Search.styled";

const Search = ({ setMovieKeyword }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const inputValue = form.elements.keyword.value;

    setMovieKeyword(inputValue);
    form.reset();
  };
  
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input name="keyword" />
        <Button type="submit">Search</Button>
      </Form>
    </>
  );
};

export default Search;
