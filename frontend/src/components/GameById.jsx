import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import GameItem from "./GameItem";

function GameById() {
  const { id } = useParams();
  const [GameData, setGameData] = useState(null);

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/game/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setGameData(data);
        } else {
          console.error(
            `Erreur lors de la récupération du jeu avec l'ID ${id}`
          );
        }
      } catch (error) {
        console.error(
          "Erreur inattendue lors de la récupération du jeu :",
          error
        );
      }
    };

    fetchGameData();
  }, [id]);

  if (!GameData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="game-list">
      <GameItem
        key={GameData.id}
        id={GameData.id}
        name={GameData.name}
        type={GameData.type}
        playTime={GameData.play_time}
        ageMin={GameData.age_min}
        ageMax={GameData.age_max}
        playerMin={GameData.player_min}
        playerMax={GameData.player_max}
      />
    </div>
  );
}

export default GameById;
