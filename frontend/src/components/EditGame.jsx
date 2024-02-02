import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditGame() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [gameData, setGameData] = useState({
    name: "",
    type: false,
    play_time: "",
    age_min: "",
    age_max: "",
    player_min: "",
    player_max: "",
    user_id: 1,
    editor_id: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGameData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleToggleSwitch = () => {
    setGameData((prevData) => ({
      ...prevData,
      type: !prevData.type,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/game/edit/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(gameData),
        }
      );

      if (response.ok) {
        toast.success("Jeu mis à jour avec succès");
        navigate("/game");
      } else {
        const errorData = await response.json();
        toast.error(
          `Erreur lors de la mise à jour du jeu : ${errorData.message}`
        );
      }
    } catch (error) {
      toast.error(
        `Erreur inattendue lors de la mise à jour du jeu : ${error.message}`
      );
    }
  };

  return (
    <div className="game-item">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nom :
          <input
            type="text"
            id="name"
            name="name"
            value={gameData.name}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="type">
          Type :
          <div className="toggle-switch">
            <input
              type="checkbox"
              id="type"
              name="type"
              checked={gameData.type}
              onChange={handleToggleSwitch}
            />
            <span className="slider round" />
          </div>
        </label>
        <label htmlFor="play_time">
          Durée d'une partie :
          <input
            type="text"
            id="play_time"
            name="play_time"
            value={gameData.play_time}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="age_min">
          Age minimum :
          <input
            type="text"
            id="age_min"
            name="age_min"
            value={gameData.age_min}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="age_max">
          Age maximum :
          <input
            type="text"
            id="age_max"
            name="age_max"
            value={gameData.age_max}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="player_min">
          Nombre de joueur minimum :
          <input
            type="text"
            id="player_min"
            name="player_min"
            value={gameData.player_min}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="player_max">
          Nombre de joueur maximum :
          <input
            type="text"
            id="player_max"
            name="player_max"
            value={gameData.player_max}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default EditGame;
