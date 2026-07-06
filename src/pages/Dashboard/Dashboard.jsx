import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";

import TicketCard from "../../components/TicketCard/TicketCard";
import BalanceCard from "../../components/BalanceCard/BalanceCard";
import QuickActions from "../../components/QuickActions/QuickActions";

import { buscarDashboard } from "../../api/dashboardService";

import "./Dashboard.css";

export default function Dashboard() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const [dashboard, setDashboard] = useState({

        bilhete: null,

        historico: [],

        notificacoes: 0,

        saldo: 0

    });

    const [skinAtual, setSkinAtual] = useState({

        nome: "Mobiliza",

        icone: "🎫",

        cor: "#25D8C5"

    });

    const carregarDashboard = useCallback(async () => {

        try {

            const dados = await buscarDashboard();

            setDashboard(dados);

            if (dados?.bilhete) {

                setSkinAtual({

                    nome:

                        dados.bilhete.skinNome ||

                        "Skin Padrão",

                    icone:

                        dados.bilhete.icone ||

                        "🎫",

                    cor:

                        dados.bilhete.cor ||

                        "#25D8C5"

                });

            }

        }

        catch (erro) {

            console.error(

                "Erro ao carregar Dashboard:",

                erro

            );

        }

        finally {

            setLoading(false);

        }

    }, []);

    useEffect(() => {

        async function inicializarDashboard() {

            await carregarDashboard();

        }

        inicializarDashboard();

        window.addEventListener(

            "saldoAtualizado",

            carregarDashboard

        );

        window.addEventListener(

            "skinAtualizada",

            carregarDashboard

        );

        return () => {

            window.removeEventListener(

                "saldoAtualizado",

                carregarDashboard

            );

            window.removeEventListener(

                "skinAtualizada",

                carregarDashboard

            );

        };

    }, [carregarDashboard]);

    if (loading) {

        return (

            <div className="dashboard-loading">

                Carregando Dashboard...

            </div>

        );

    }

    return (

        <div className="dashboard">

            <Sidebar />

            <main className="dashboard-content">

                <Topbar />

                                {/* ===========================
                    GRID PRINCIPAL
                =========================== */}

                <section className="dashboard-grid">

                    <TicketCard />

                    <BalanceCard />

                </section>

                {/* ===========================
                    AÇÕES RÁPIDAS
                =========================== */}

                <QuickActions />

                {/* ===========================
                    RESUMO DA CONTA
                =========================== */}

                <section className="dashboard-section">

                    <div className="section-header">

                        <h2>

                            Resumo da Conta

                        </h2>

                    </div>

                    <div className="stats-grid">

                        <div className="stat-card">

                            <span>

                                💰

                            </span>

                            <small>

                                Saldo

                            </small>

                            <h3>

                                R$

                                {" "}

                                {

                                    Number(

                                        dashboard.bilhete?.saldo || 0

                                    ).toFixed(2)

                                }

                            </h3>

                        </div>

                        <div className="stat-card">

                            <span>

                                💳

                            </span>

                            <small>

                                Recargas

                            </small>

                            <h3>

                                {

                                    dashboard.historico.filter(

                                        item => item.tipo === "RECARGA"

                                    ).length

                                }


                                {

                                    dashboard.historico.filter(

                                        item => item.tipo === "PASSAGEM"

                                    ).length

                                }

                            </h3>

                        </div>

                        <div className="stat-card">

                            <span>

                                🎨

                            </span>

                            <small>

                                Skin Atual

                            </small>

                            <h3>

                                {skinAtual.nome}

                            </h3>

                        </div>

                    </div>

                </section>

                {/* ===========================
                    HISTÓRICO
                =========================== */}

                <section className="dashboard-section">

                    <div className="section-header">

                        <h2>

                            Últimas atividades

                        </h2>

                        <button

                            className="btn-link"

                            onClick={() =>

                                navigate("/historico")

                            }

                        >

                            Ver tudo

                        </button>

                    </div>

                    <div className="activity-list">

                        {

                            dashboard.historico.length > 0 ? (

                                dashboard.historico.map(

                                    (item) => (

                                        <div

                                            key={item.id}

                                            className="activity-item"

                                        >

                                            <div className="activity-left">

                                                <div className="activity-icon">

                                                    {

                                                        item.tipo === "RECARGA"

                                                            ? "💳"

                                                            : item.tipo === "COMPRA_SKIN"

                                                            ? "🎨"

                                                            : item.tipo === "PASSAGEM"

                                                            ? "🚌"

                                                            : "📄"

                                                    }

                                                </div>

                                                <div>

                                                    <h4>

                                                        {item.descricao}

                                                    </h4>

                                                    <p>

                                                        {

                                                            new Date(

                                                                item.createdAt

                                                            ).toLocaleString(

                                                                "pt-BR"

                                                            )

                                                        }

                                                    </p>

                                                </div>

                                            </div>

                                            <span

                                                className={

                                                    item.tipo === "RECARGA"

                                                        ? "income"

                                                        : "expense"

                                                }

                                            >

                                                {

                                                    item.tipo === "RECARGA"

                                                        ? "+"

                                                        : "-"

                                                }

                                                {" "}

                                                R$

                                                {" "}

                                                {

                                                    Number(

                                                        item.valor

                                                    ).toFixed(2)

                                                }

                                            </span>

                                        </div>

                                    )

                                )

                            ) : (

                                <div className="activity-empty">

                                    <div className="empty-icon">

                                        📭

                                    </div>

                                    <h3>

                                        Nenhuma movimentação encontrada

                                    </h3>

                                    <p>

                                        As suas próximas recargas,

                                        viagens e compras aparecerão

                                        aqui.

                                    </p>

                                </div>

                            )

                        }

                    </div>

                </section>
                                {/* ==========================================
                    ATALHOS
                ========================================== */}

                <section className="dashboard-section">

                    <div className="section-header">

                        <h2>

                            Acesso Rápido

                        </h2>

                    </div>

                    <div className="shortcut-grid">

                        <button
                            onClick={() => navigate("/bilhete")}
                        >
                            🎫
                            <span>Bilhete</span>
                        </button>

                        <button
                            onClick={() => navigate("/recargas")}
                        >
                            💳
                            <span>Recargas</span>
                        </button>

                        <button
                            onClick={() => navigate("/skins")}
                        >
                            🎨
                            <span>Skins</span>
                        </button>

                        <button
                            onClick={() => navigate("/perfil")}
                        >
                            👤
                            <span>Perfil</span>
                        </button>

                        <button
                            onClick={() => navigate("/notificacoes")}
                        >
                            🔔
                            <span>

                                Notificações

                                {

                                    dashboard.notificacoes > 0 && (

                                        <> ({dashboard.notificacoes})</>

                                    )

                                }

                            </span>
                        </button>

                    </div>

                </section>

                {/* ==========================================
                    BANNER
                ========================================== */}

                <section className="dashboard-banner">

                    <div className="banner-content">

                        <div className="banner-text">

                            <small>

                                Mobiliza Smart Mobility

                            </small>

                            <h1>

                                Seu Bilhete Virtual

                            </h1>

                            <h3>

                                Skin atual:

                                {" "}

                                {skinAtual.nome}

                            </h3>

                            <p>

                                Personalize seu bilhete comprando novas skins.

                                Sempre que uma skin for equipada na Loja,

                                ela será aplicada automaticamente ao seu

                                Bilhete Virtual.

                            </p>

                            <button

                                className="banner-button"

                                onClick={() =>

                                    navigate("/skins")

                                }

                            >

                                Abrir Loja de Skins

                            </button>

                        </div>

                        <div className="banner-image">

                            <img

                                src={

                                    dashboard.bilhete?.skin

                                        ? `/images/bilhetes/${dashboard.bilhete.skin}`

                                        : "/images/bilhetes/default.png"

                                }

                                alt="Bilhete Virtual"

                            />

                        </div>

                    </div>

                </section>

            </main>

        </div>

    );

}