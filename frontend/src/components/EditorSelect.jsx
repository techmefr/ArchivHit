import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function EditorSelect({ onSelect }) {
  const [editors, setEditors] = useState([]);
  const [filteredEditors, setFilteredEditors] = useState([]);
  const [selectedEditorId, setSelectedEditorId] = useState(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("/api/editor")
      .then((response) => response.json())
      .then((data) => {
        setEditors(data);
        setFilteredEditors(data);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des éditeurs :", error)
      );
  }, []);

  const handleSearch = (searchQuery) => {
    setInputValue(searchQuery);
    const filtered = editors.filter((editor) =>
      editor.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredEditors(filtered);
  };

  const handleSelect = (editor) => {
    setSelectedEditorId(editor.id);
    setInputValue(editor.name);
    onSelect(editor.id);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher un éditeur"
        value={inputValue}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <ul>
        {filteredEditors.map((editor) => (
          <li key={editor.id}>
            <button type="button" onClick={() => handleSelect(editor)}>
              {editor.name}
            </button>
          </li>
        ))}
      </ul>
      {selectedEditorId && <p>Éditeur sélectionné : {selectedEditorId}</p>}
    </div>
  );
}

EditorSelect.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default EditorSelect;
