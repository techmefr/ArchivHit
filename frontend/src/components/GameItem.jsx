import PropTypes from "prop-types";
import "./gameItem.css";
import { Link } from "react-router-dom";

function GameItem({
  id,
  name,
  type,
  playTime,
  ageMin,
  ageMax,
  playerMin,
  playerMax,
}) {
  return (
    <div className="game-item">
      <Link to={`/game/${id}`}>
        <h2>{name}</h2>
      </Link>
      <p>Type: {type === 0 ? "Jeu de plateau" : "Jeu de carte"}</p>
      <p>Durée de la partie: {playTime} minutes</p>
      <p>
        Age: {ageMin} - {ageMax} ans
      </p>
      <p>
        Nombre de joueurs: {playerMin} - {playerMax}
      </p>
      {/* Ajoutez d'autres éléments pour afficher les informations supplémentaires */}
    </div>
  );
}

GameItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired,
  playTime: PropTypes.number.isRequired,
  ageMin: PropTypes.number.isRequired,
  ageMax: PropTypes.number.isRequired,
  playerMin: PropTypes.number.isRequired,
  playerMax: PropTypes.number.isRequired,
  // Ajoutez d'autres types pour les propriétés supplémentaires
};

export default GameItem;
