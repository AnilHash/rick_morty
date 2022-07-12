import { characterType } from "../hooks/useCharacterList";

const Card: React.FC<characterType> = ({ image, name }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default Card;
