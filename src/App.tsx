import React from "react";
import styled from "styled-components";
import CharactersList from "./pages/CharactersList";

const Title = styled.div`
  text-align: center;
  font-size: 2rem;
  font-family: cursive;
  text-decoration: underline;
`;

function App() {
  return (
    <div>
      <Title>Rick & Morty Fan Page</Title>
      <CharactersList />
    </div>
  );
}

export default App;
