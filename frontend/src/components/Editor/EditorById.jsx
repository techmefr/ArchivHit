import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function EditorById() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editor, setEditor] = useState({});

  useEffect(() => {
    const fetchEditorById = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/editor/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setEditor(data);
        } else {
          console.error("Error fetching editor by ID:", response.statusText);
        }
      } catch (error) {
        console.error("Unexpected error fetching editor by ID:", error);
      }
    };

    fetchEditorById();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/editor/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        navigate("/editor");
      } else {
        console.error("Error deleting editor:", response.statusText);
      }
    } catch (error) {
      console.error("Unexpected error deleting editor:", error);
    }
  };

  return (
    <div className="game-item">
      {" "}
      <h2>Détails de l'Éditeur</h2>
      <p>Nom: {editor.name}</p>
      <Link to={`/editor/${id}/modify`}>
        <button type="button">Modifier</button>
      </Link>
      <button type="submit" onClick={handleDelete}>
        Supprimer
      </button>
    </div>
  );
}

export default EditorById;
