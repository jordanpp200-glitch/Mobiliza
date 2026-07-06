import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    FaBus,
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash
} from "react-icons/fa";

import api from "../../api/api";
import "./Login.css";

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [mostrarSenha, setMostrarSenha] = useState(false);

    const [lembrar, setLembrar] = useState(true);

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const salvo = localStorage.getItem("email");

        if (salvo) {

            setEmail(salvo);

        }

    }, []);

    async function entrar(e) {

        e.preventDefault();

        if (!email || !senha) {

            alert("Preencha e-mail e senha.");

            return;

        }

        try {

            setLoading(true);

            const { data } = await api.post("/auth/login", {

                email,

                senha

            });

            console.log("LOGIN:", data);

            localStorage.setItem(

                "token",

                data.token

            );

            localStorage.setItem(

                "usuario",

                JSON.stringify(data.user)

            );

            if (lembrar) {

                localStorage.setItem(

                    "email",

                    email

                );

            } else {

                localStorage.removeItem(

                    "email"

                );

            }

            navigate("/dashboard");

        } catch (erro) {

            console.log(erro);

            alert(

                erro.response?.data?.erro ||

                erro.response?.data?.error ||

                "Usuário ou senha inválidos."

            );

        } finally {

            setLoading(false);

        }

    }

    return (

        <div className="login-page">

            <div className="overlay"></div>

            <div className="brand">

                <FaBus className="brand-icon" />

                <div>

                    <h1>Mobiliza</h1>

                    <span>BILHETE VIRTUAL</span>

                </div>

            </div>

            <div className="login-card">

                <h2>

                    Mobiliza

                    <br />

                    Login

                </h2>

                <form onSubmit={entrar}>

                    <label>

                        E-mail

                    </label>

                    <div className="input-box">

                        <FaEnvelope />

                        <input
                            type="email"
                            placeholder="seu@email.com"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </div>

                    <div className="senha-topo">

                        <label>

                            Senha

                        </label>

                        <Link

                            to="/forgot-password"

                        >

                            Esqueceu a senha?

                        </Link>

                    </div>

                    <div className="input-box">

                        <FaLock />

                        <input
                            type={mostrarSenha ? "text" : "password"}
                            placeholder="********"
                            autoComplete="current-password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        
                        <button

                            type="button"

                            className="eye"

                            onClick={() =>

                                setMostrarSenha(

                                    !mostrarSenha

                                )

                            }

                        >

                            {

                                mostrarSenha

                                    ?

                                    <FaEyeSlash />

                                    :

                                    <FaEye />

                            }

                        </button>

                    </div>

                    <div className="remember">

                        <label>

                            <input

                                type="checkbox"

                                checked={lembrar}

                                onChange={(e) =>

                                    setLembrar(

                                        e.target.checked

                                    )

                                }

                            />

                            Lembrar senha

                        </label>

                    </div>

                    <button

                        className="btn-login"

                        disabled={loading}

                    >

                        {

                            loading

                                ?

                                "Entrando..."

                                :

                                "Entrar"

                        }

                    </button>

                </form>

                <div className="register">

                    Não tem uma conta?

                    <Link

                        to="/register"

                    >

                        Cadastre-se

                    </Link>

                </div>

            </div>

        </div>

    );

}