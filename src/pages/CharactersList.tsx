import styled from "styled-components";
import useCharacterList, { characterType } from "../hooks/useCharacterList";

import Card from "./Card";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 5rem;
`;

const CharactersList = () => {
  const { loading, error, data } = useCharacterList();
  return (
    <Container>
      {loading && <h3>Loading</h3>}
      {error && <h3>error</h3>}
      {data?.characters.results.map((ele: characterType) => (
        <Card {...ele} />
      ))}
    </Container>
  );
};

export default CharactersList;
