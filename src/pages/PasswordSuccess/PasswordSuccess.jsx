import "./PasswordSuccess.css";
import { useNavigate } from "react-router-dom";

export default function PasswordSuccess() {

    const navigate = useNavigate();

    return (

        <div className="password-success-page">

            <div className="password-success-card">

                <div className="success-icon">

                    ✅

                </div>

                <h1>

                    Senha alterada!

                </h1>

                <p>

                    Sua senha foi redefinida com sucesso.

                    Agora você já pode entrar novamente.

                </p>

                <button

                    onClick={() => navigate("/login")}

                >

                    Ir para Login

                </button>

            </div>

        </div>

    );

}