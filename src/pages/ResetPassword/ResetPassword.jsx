import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ResetPassword.css";

export default function ResetPassword() {

    const { token } = useParams();

    const navigate = useNavigate();

    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    async function alterarSenha(e) {

        e.preventDefault();

        console.log("Token:", token);
        console.log("Nova senha:", senha);

        // Aqui faremos a chamada para o backend na próxima etapa.

        navigate("/password-success");

    }

    return (

        <div className="reset-page">

            <form
                className="reset-card"
                onSubmit={alterarSenha}
            >

                <h1>Nova senha</h1>

                <input
                    type="password"
                    placeholder="Nova senha"
                    value={senha}
                    onChange={(e)=>setSenha(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Confirmar senha"
                    value={confirmarSenha}
                    onChange={(e)=>setConfirmarSenha(e.target.value)}
                />

                <button type="submit">

                    Alterar senha

                </button>

            </form>

        </div>

    );

}