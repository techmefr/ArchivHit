// Login.jsx
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleemailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    console.error("email:", email);
    console.error("Password:", password);
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Nom d'utilisateur:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={handleemailChange}
        />

        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
