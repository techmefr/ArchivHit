import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function EditorList() {
  const [editors, setEditors] = useState([]);

  useEffect(() => {
    const fetchEditors = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/editor`
        );
        if (response.ok) {
          const data = await response.json();
          setEditors(data);
        } else {
          console.error("Error fetching editors:", response.statusText);
        }
      } catch (error) {
        console.error("Unexpected error fetching editors:", error);
      }
    };

    fetchEditors();
  }, []);

  return (
    <div className="game-item">
      <h2>Liste des Éditeurs</h2>
      <ul>
        {editors.map((editor) => (
          <li key={editor.id}>
            <Link to={`/editor/${editor.id}`}>{editor.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EditorList;
