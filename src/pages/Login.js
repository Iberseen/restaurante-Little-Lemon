import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../componentes/Login.css";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (user === "admin" && password === "admin") {
      // Guardamos sesión visual
      localStorage.setItem("auth", "true");

      // Redirigimos automáticamente a reservations
      navigate("/reservations");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-box">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          style={{ marginBottom: "10px", padding: "5px" }}
        />
        <br />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: "10px", padding: "5px" }}
        />
        <br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}