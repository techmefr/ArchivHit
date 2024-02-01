import { useState, useEffect } from "react";
import GameItem from "./GameItem";
import "./gameList.css";

function GameList() {
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/game")
      .then((response) => response.json())
      .then((data) => setGameData(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error)
      );
  }, []);

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
        />
      ))}
    </div>
  );
}

export default GameList;
