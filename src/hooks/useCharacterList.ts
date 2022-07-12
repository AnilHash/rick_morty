import { gql, useQuery } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        name
        image
      }
    }
  }
`;
export interface characterType {
  name: string;
  image: string;
}

const useCharacterList = () => {
  const { loading, data, error } = useQuery(GET_CHARACTERS);
  return { loading, error, data };
};

export default useCharacterList;
