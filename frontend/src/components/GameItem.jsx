import PropTypes from "prop-types";
import "./gameItem.css";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function GameItem({
  id,
  name,
  type,
  playTime,
  ageMin,
  ageMax,
  playerMin,
  playerMax,
  onDelete,
}) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/game/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        onDelete(id);
        toast.success("Jeu supprimé avec succès!");
        navigate("/game");
      } else {
        console.error(`Erreur lors de la suppression du jeu avec l'ID ${id}`);
      }
    } catch (error) {
      console.error("Erreur inattendue lors de la suppression du jeu :", error);
    }
  };
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
      <button type="button" onClick={handleDelete}>
        Supprimer
      </button>{" "}
      <Link to="/edit">
        <button type="button">Modifier</button>
      </Link>{" "}
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
  onDelete: PropTypes.func.isRequired,
};

export default GameItem;
