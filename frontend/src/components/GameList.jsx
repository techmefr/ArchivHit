import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import GameItem from "./GameItem";
import "./gameList.css";
import "react-toastify/dist/ReactToastify.css";

function GameList() {
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/game`)
      .then((response) => response.json())
      .then((data) => setGameData(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error)
      );
  }, []);
  const handleDelete = (id) => {
    console.info(`Supprimer le jeu avec l'ID ${id}`);
    window.location.reload();
    toast.success("Jeu supprimé avec succès!");
  };
  return (
    <div className="game-list">
      {gameData.map((item) => (
        <GameItem
          key={item.id}
          id={item.id}
          name={item.name}
          type={item.type}
          playTime={item.play_time}
          ageMin={item.age_min}
          ageMax={item.age_max}
          playerMin={item.player_min}
          playerMax={item.player_max}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default GameList;
