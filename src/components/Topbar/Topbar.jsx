import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
    FaSearch,
    FaMoon,
    FaCog,
    FaBell,
    FaChevronDown
} from "react-icons/fa";

import { buscarBilhete } from "../../api/bilheteService";

import "./Topbar.css";

export default function Topbar() {

    const navigate = useNavigate();

    const [saldo, setSaldo] = useState(0);

    const [menuAberto, setMenuAberto] = useState(false);

    async function carregarSaldo() {

        try {

            const bilhete = await buscarBilhete();

            setSaldo(bilhete.saldo);

        }

        catch (erro) {

            console.log(erro);

        }

    }

    useEffect(() => {

        const inicializarSaldo = setTimeout(() => {

            carregarSaldo();

        }, 0);

        window.addEventListener(

            "saldoAtualizado",

            carregarSaldo

        );

        return () => {

            clearTimeout(inicializarSaldo);

            window.removeEventListener(

                "saldoAtualizado",

                carregarSaldo

            );

        };

    }, []);

    return (

        <header className="topbar">

            <div className="topbar-left">

                <div>

                    <h1>

                        Boa tarde, Usuário 👋

                    </h1>

                    <span>

                        {

                            new Date().toLocaleDateString(

                                "pt-BR",

                                {

                                    weekday: "long",

                                    day: "2-digit",

                                    month: "long"

                                }

                            )

                        }

                    </span>

                </div>

            </div>

            <div className="topbar-center">

                <div className="search-box">

                    <FaSearch />

                    <input

                        type="text"

                        placeholder="Pesquisar..."

                    />

                </div>

            </div>

            <div className="topbar-right">

                <div className="wallet">

                    <small>

                        Saldo

                    </small>

                    <strong>

                        R$

                        {" "}

                        {Number(saldo).toFixed(2)}

                    </strong>

                </div>

                <button className="topbar-icon">

                    <FaMoon />

                </button>

                <button className="topbar-icon">

                    <FaCog />

                </button>

                <button className="topbar-icon notification">

                    <FaBell />

                    <span>

                        3

                    </span>

                </button>

                <div

                    className="profile"

                    onClick={() =>

                        setMenuAberto(

                            !menuAberto

                        )

                    }

                >

                    <div className="profile-info">

                        <strong>

                            Usuário

                        </strong>

                        <small>

                            Cliente Premium

                        </small>

                    </div>

                    <FaChevronDown />

                    {

                        menuAberto && (

                            <div className="profile-menu">

                                <button

                                    onClick={() =>

                                        navigate("/perfil")

                                    }

                                >

                                    Perfil

                                </button>

                                <button

                                    onClick={() =>

                                        navigate("/settings")

                                    }

                                >

                                    Configurações

                                </button>

                                <button

                                    onClick={() => {

                                        localStorage.removeItem("token");

                                        navigate("/login");

                                    }}

                                >

                                    Sair

                                </button>

                            </div>

                        )

                    }

                </div>

            </div>

        </header>

    );

}