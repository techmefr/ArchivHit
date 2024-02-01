import { useState } from "react";
import EditorSelect from "./EditorSelect";
import "./postGameForm.css";

function PostGameForm() {
  const [gameData, setGameData] = useState({
    name: "",
    type: false,
    play_time: "",
    age_min: "",
    age_max: "",
    player_min: "",
    player_max: "",
    user_id: 1,
    editor_id: "",
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

  const handleEditorSelect = (selectedEditorId) => {
    setGameData((prevData) => ({
      ...prevData,
      editor_id: selectedEditorId,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO :   Mettre la fonction pour envoyer les données
  };

  return (
    <div className="container-form-post">
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
          Nom :
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

        <label htmlFor="editor">
          Éditeur :
          <EditorSelect onSelect={handleEditorSelect} />
        </label>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default PostGameForm;
