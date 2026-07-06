import { useNavigate } from "react-router-dom";

import {
    FaBus,
    FaWallet,
    FaStore,
    FaPalette,
    FaHistory,
    FaBell,
    FaUser,
    FaCog
} from "react-icons/fa";

import "./QuickActions.css";

export default function QuickActions() {

    const navigate = useNavigate();

    const actions = [

        {
            titulo: "Bilhete",
            descricao: "Visualize seu cartão virtual",
            icone: <FaBus />,
            rota: "/bilhete"
        },

        {
            titulo: "Recarga",
            descricao: "Adicionar saldo",
            icone: <FaWallet />,
            rota: "/recargas"
        },

        {
            titulo: "Loja",
            descricao: "Comprar novos itens",
            icone: <FaStore />,
            rota: "/store"
        },

        {
            titulo: "Skins",
            descricao: "Personalizar bilhete",
            icone: <FaPalette />,
            rota: "/skins"
        },

        {
            titulo: "Histórico",
            descricao: "Consultar movimentações",
            icone: <FaHistory />,
            rota: "/historico"
        },

        {
            titulo: "Notificações",
            descricao: "Ver avisos",
            icone: <FaBell />,
            rota: "/notificacoes"
        },

        {
            titulo: "Perfil",
            descricao: "Editar dados pessoais",
            icone: <FaUser />,
            rota: "/perfil"
        },

        {
            titulo: "Configurações",
            descricao: "Preferências do sistema",
            icone: <FaCog />,
            rota: "/settings"
        }

    ];

    return (

        <section className="quick-actions-section">

            <div className="section-header">

                <h2>

                    Ações Rápidas

                </h2>

            </div>

            <div className="quick-actions-grid">

                {

                    actions.map((item) => (

                        <button

                            key={item.titulo}

                            className="quick-card"

                            onClick={() => navigate(item.rota)}

                        >

                            <div className="quick-icon">

                                {item.icone}

                            </div>

                            <h3>

                                {item.titulo}

                            </h3>

                            <p>

                                {item.descricao}

                            </p>

                        </button>

                    ))

                }

            </div>

        </section>

    );

}