import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../componentes/Login.css";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isValid = user && password;

  const handleLogin = (e) => {
    e.preventDefault();

    if (user === "admin" && password === "admin") {
      localStorage.setItem("auth", "true");
      navigate("/reservations");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <section className="login">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>

        <div className="form-group">
          <label>Usuario</label>
          <input
            type="text"
            placeholder="Introduce tu usuario"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Introduce tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" disabled={!isValid} className="login-btn">
          Entrar
        </button>
      </form>
    </section>
  );
}