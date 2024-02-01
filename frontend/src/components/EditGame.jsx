import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditGame() {
  const { id } = useParams();
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    play_time: "",
    age_min: "",
    age_max: "",
    player_min: "",
    player_max: "",
    editor_id: 1,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/game/${id}`);
        const result = await response.json();
        setFormData({
          name: result.name,
          type: result.type,
          play_time: result.play_time,
          age_min: result.age_min,
          age_max: result.age_max,
          player_min: result.player_min,
          player_max: result.player_max,
          editor_id: result.editor_id,
        });
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données du Street Art :",
          error
        );
      }
    };

    fetchData();
  }, [id]);

  const handleUpdateGame = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backendUrl}/api/game/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          type: formData.type,
          play_time: formData.play_time,
          age_min: formData.age_min,
          age_max: formData.age_max,
          player_min: formData.player_min,
          player_max: formData.player_max,
          editor_id: formData.editor_id,
        }),
      });

      if (response.ok) {
        toast.success("Jeu mis à jour avec succès");
        navigate(`/game/${id}`);
      } else {
        console.error(
          "Erreur lors de la mise à jour du jeu :",
          response.statusText
        );
        toast.error(
          `Erreur lors de la mise à jour du jeu : ${response.statusText}`
        );
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour du jeu :", error);
      toast.error(`Erreur lors de la mise à jour du jeu : ${error.message}`);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleUpdateGame}>
        <label htmlFor="name">
          Nom :
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
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
              checked={formData.type}
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
            value={formData.play_time}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="age_min">
          Age minimum :
          <input
            type="text"
            id="age_min"
            name="age_min"
            value={formData.age_min}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="age_max">
          Age maximum :
          <input
            type="text"
            id="age_max"
            name="age_max"
            value={formData.age_max}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="player_min">
          Nombre de joueur minimum :
          <input
            type="text"
            id="player_min"
            name="player_min"
            value={formData.player_min}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="player_max">
          Nombre de joueur maximum :
          <input
            type="text"
            id="player_max"
            name="player_max"
            value={formData.player_max}
            onChange={handleInputChange}
          />
        </label>

        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
}

export default EditGame;
