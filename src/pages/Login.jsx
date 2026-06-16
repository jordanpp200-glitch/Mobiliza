import { useState, useEffect } from "react";
import { api } from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LightningBackground from "../components/LightningBackground";

import "./Home/style.css";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [lembrarSenha, setLembrarSenha] = useState(false);

  useEffect(() => {
    const emailSalvo = localStorage.getItem("email");

    if (emailSalvo) {
      setEmail(emailSalvo);
      setLembrarSenha(true);
    }
  }, []);

  async function handleLogin(e) {
    e.preventDefault();

    try {

      const response = await api.post("/auth/login", {
        email,
        senha
      });

      if (lembrarSenha) {
        localStorage.setItem("email", email);
      } else {
        localStorage.removeItem("email");
      }

      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "usuario",
        JSON.stringify(response.data.usuario)
      );

      navigate("/dashboard");

    } catch (error) {
      console.error(error);
      alert("Email ou senha inválidos");
    }
  }

 return (
  <>
    <LightningBackground />

    <div className="container">

      <form onSubmit={handleLogin}>

        <h1>USUÁRIO LOGIN</h1>

        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="password-container">

          <input
            type={mostrarSenha ? "text" : "password"}
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <span
            className="eye-icon"
            onClick={() => setMostrarSenha(!mostrarSenha)}
          >
            {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
          </span>

        </div>

        <div className="login-options">

          <label className="remember-label">

            <input
              type="checkbox"
              checked={lembrarSenha}
              onChange={() =>
                setLembrarSenha(!lembrarSenha)
              }
            />

            Lembrar senha

          </label>

          <Link
            to="/esqueci-senha"
            className="forgot-link"
          >
            Esqueci minha senha
          </Link>

        </div>

        <button type="submit">
          Entrar
        </button>

        <div className="register-area">

          <p>
            Não possui uma conta?
          </p>

          <Link to="/cadastro">

            <button
              type="button"
              className="secondary-button"
            >
              criar conta
            </button>

          </Link>

        </div>

      </form>

    </div>
  </>
);
}
