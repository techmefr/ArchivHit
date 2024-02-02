import { useState } from "react";

function PostEditor() {
  const [name, setName] = useState("");

  const handlePost = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/editor`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name }),
        }
      );

      if (response.ok) {
        // Rediriger ou faire autre chose après le post réussi
      } else {
        console.error("Error posting editor:", response.statusText);
      }
    } catch (error) {
      console.error("Unexpected error posting editor:", error);
    }
  };

  return (
    <div>
      <h2>Poster un Éditeur</h2>
      <label>
        Nom:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit" onClick={handlePost}>
        Poster
      </button>
    </div>
  );
}

export default PostEditor;
