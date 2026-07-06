import "./Settings.css";
import { FaUser, FaLock, FaBell, FaMoon, FaLanguage, FaSignOutAlt } from "react-icons/fa";

export default function Settings() {
  return (
    <div className="settings-page">
      <div className="settings-container">
        <h1>Configurações</h1>
        <p className="subtitle">
          Personalize sua experiência no Mobiliza.
        </p>

        <div className="settings-card">

          <div className="setting-item">
            <FaUser className="icon" />
            <div>
              <h3>Perfil</h3>
              <span>Editar informações pessoais</span>
            </div>
            <button>Editar</button>
          </div>

          <div className="setting-item">
            <FaLock className="icon" />
            <div>
              <h3>Senha</h3>
              <span>Alterar sua senha</span>
            </div>
            <button>Alterar</button>
          </div>

          <div className="setting-item">
            <FaBell className="icon" />
            <div>
              <h3>Notificações</h3>
              <span>Receber avisos do aplicativo</span>
            </div>

            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <FaMoon className="icon" />
            <div>
              <h3>Modo Escuro</h3>
              <span>Ativar tema escuro</span>
            </div>

            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <FaLanguage className="icon" />
            <div>
              <h3>Idioma</h3>
              <span>Português (Brasil)</span>
            </div>

            <select>
              <option>Português</option>
              <option>English</option>
              <option>Español</option>
            </select>
          </div>

          <div className="setting-item logout">
            <FaSignOutAlt className="icon" />
            <div>
              <h3>Sair da conta</h3>
              <span>Encerrar sessão</span>
            </div>

            <button className="logout-btn">
              Sair
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}