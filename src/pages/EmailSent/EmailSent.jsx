import "./EmailSent.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function EmailSent() {

    const navigate = useNavigate();
    const location = useLocation();

    const email = location.state?.email || "";

    return (

        <div className="email-page">

            <div className="email-card">

                <div className="email-icon">

                    📧

                </div>

                <h1>

                    E-mail enviado

                </h1>

                <p>

                    Enviamos um link para redefinir sua senha.

                </p>

                <strong>

                    {email}

                </strong>

                <button
                    onClick={() => navigate("/login")}
                >

                    Voltar para Login

                </button>

            </div>

        </div>

    );

}