import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  FaBars,
  FaBus,
  FaHome,
  FaWallet,
  FaHistory,
  FaBell,
  FaUser,
  FaPalette,
  FaSignOutAlt,
} from "react-icons/fa";

import "./Sidebar.css";

export default function Sidebar() {
  const [aberta, setAberta] = useState(false);

  const navigate = useNavigate();

  function toggleSidebar() {
    setAberta(!aberta);
  }

  function fecharSidebar() {
    setAberta(false);
  }

  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  const menus = [
    {
      nome: "Início",
      rota: "/dashboard",
      icone: <FaHome />,
    },
    {
      nome: "Bilhete",
      rota: "/bilhete",
      icone: <FaBus />,
    },
    {
      nome: "Recargas",
      rota: "/recargas",
      icone: <FaWallet />,
    },
    {
      nome: "Histórico",
      rota: "/historico",
      icone: <FaHistory />,
    },
    {
      nome: "Skins",
      rota: "/skins",
      icone: <FaPalette />,
    },
    {
      nome: "Notificações",
      rota: "/notificacoes",
      icone: <FaBell />,
    },
    {
      nome: "Perfil",
      rota: "/perfil",
      icone: <FaUser />,
    },
  ];

  return (
    <>
      {/* Overlay para celular */}
      {aberta && (
        <div
          className="sidebar-overlay"
          onClick={fecharSidebar}
        />
      )}

      <aside className={`sidebar ${aberta ? "open" : ""}`}>
        <div>
          <div className="sidebar-header">
            <button
              className="sidebar-toggle"
              onClick={toggleSidebar}
            >
              <FaBars />
            </button>

            <div className="sidebar-logo">
              <div className="logo-circle">
                <FaBus />
              </div>

              {aberta && (
                <div>
                  <h2>Mobiliza</h2>
                  <small>Smart Mobility</small>
                </div>
              )}
            </div>
          </div>

          <nav className="sidebar-menu">
            {menus.map((item) => (
              <NavLink
                key={item.rota}
                to={item.rota}
                onClick={fecharSidebar}
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                <span>{item.icone}</span>

                {aberta && <p>{item.nome}</p>}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="sidebar-footer">
          <div className="sidebar-user">
            <div className="avatar">JP</div>

            {aberta && (
              <div>
                <strong>Usuário</strong>
                <small>Cliente Premium</small>
              </div>
            )}
          </div>

          <button
            className="logout"
            onClick={logout}
          >
            <FaSignOutAlt />

            {aberta && <span>Sair</span>}
          </button>
        </div>
      </aside>
    </>
  );
}