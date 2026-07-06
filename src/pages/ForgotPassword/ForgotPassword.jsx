import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaArrowLeft } from "react-icons/fa";

import api from "../../api/api";

import "./ForgotPassword.css";

export default function ForgotPassword() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [loading, setLoading] = useState(false);

    async function enviarEmail(e) {

        e.preventDefault();

        if (!email.trim()) {

            alert("Informe seu e-mail.");

            return;

        }

        try {

            setLoading(true);

            await api.post("/auth/forgot-password", {

                email

            });

            navigate("/email-sent", {

                state: {

                    email

                }

            });

        } catch (error) {

            console.error(error);

            alert(

                error.response?.data?.error ||

                "Não foi possível enviar o e-mail."

            );

        } finally {

            setLoading(false);

        }

    }

    return (

        <div className="forgot-page">

            <div className="forgot-overlay">

                <form

                    className="forgot-card"

                    onSubmit={enviarEmail}

                >

                    <h1>

                        Recuperar senha

                    </h1>

                    <p>

                        Digite o e-mail utilizado no cadastro.

                        Enviaremos um link para redefinir sua senha.

                    </p>

                    <div className="forgot-input">

                        <FaEnvelope />

                        <input

                            type="email"

                            placeholder="Digite seu e-mail"

                            value={email}

                            onChange={(e)=>setEmail(e.target.value)}

                        />

                    </div>

                    <button

                        className="btn-enviar"

                        disabled={loading}

                    >

                        {

                            loading

                                ?

                                "Enviando..."

                                :

                                "Enviar link"

                        }

                    </button>

                    <button

                        type="button"

                        className="btn-voltar"

                        onClick={()=>navigate("/login")}

                    >

                        <FaArrowLeft />

                        Voltar para Login

                    </button>

                </form>

            </div>

        </div>

    );

}