import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ModifyEditor() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchEditorById = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/editor/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setName(data.name);
        } else {
          console.error("Error fetching editor by ID:", response.statusText);
        }
      } catch (error) {
        console.error("Unexpected error fetching editor by ID:", error);
      }
    };

    fetchEditorById();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/editor/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name }),
        }
      );

      if (response.ok) {
        navigate("/editor");
      } else {
        console.error("Error updating editor:", response.statusText);
      }
    } catch (error) {
      console.error("Unexpected error updating editor:", error);
    }
  };

  return (
    <div className="game-item">
      <h2>Modifier l'Éditeur</h2>
      <label>
        Nouveau Nom:
        <br />
        <input
          className="input-wrapper"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit" onClick={handleUpdate}>
        Modifier
      </button>
    </div>
  );
}

export default ModifyEditor;
