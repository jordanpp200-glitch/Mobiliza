import { useState } from "react";
import { api } from "../services/api";
import { useNavigate, Link } from "react-router-dom";

import "./Home/style.css";

export default function Register() {

  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function cadastrar(e) {

    e.preventDefault();

    try {

      await api.post("/auth/register", {
        nome,
        email,
        senha
      });

      alert("Cadastro realizado!");

      navigate("/");

    } catch {

      alert("Erro ao cadastrar usuário");

    }
  }

  return (
    <div className="container">

      <form onSubmit={cadastrar}>

        <h1>CRIAR CONTA</h1>

        <input
          placeholder="Nome completo"
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>

        <Link to="/">
          <button
            type="button"
            className="secondary-button"
          >
            Já tenho conta
          </button>
        </Link>

      </form>

    </div>
  );
}