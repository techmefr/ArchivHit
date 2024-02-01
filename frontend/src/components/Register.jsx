import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/user`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        navigate("/login");
      } else {
        const errorData = await response.json();
        console.error(`Erreur lors de l'enregistrement: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Erreur lors de la requête d'enregistrement :", error);
      console.error(
        "Erreur inattendue lors de l'enregistrement. Veuillez réessayer."
      );
    }
  };

  return (
    <div>
      <h2>Enregistrement</h2>
      <form onSubmit={handleRegister}>
        <label htmlFor="username">Nom d'utilisateur:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />

        <button type="submit">S'enregistrer</button>
      </form>
    </div>
  );
}

export default Register;
