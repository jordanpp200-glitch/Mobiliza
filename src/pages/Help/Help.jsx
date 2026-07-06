import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import "./Help.css";

export default function Help() {

    return (

        <div className="help-page">

            <Sidebar />

            <div className="help-content">

                <Topbar />

                <div className="help-container">

                    <h1>Central de Ajuda</h1>

                    <div className="help-card">

                        <h3>Perguntas Frequentes</h3>

                        <ul>

                            <li>Como realizar uma recarga?</li>

                            <li>Como recuperar minha senha?</li>

                            <li>Como consultar meu saldo?</li>

                            <li>Como visualizar meu histórico?</li>

                        </ul>

                    </div>

                    <div className="help-card">

                        <h3>Contato</h3>

                        <p>Email: suporte@mobiliza.com.br</p>

                        <p>Telefone: (11) 4000-0000</p>

                    </div>

                </div>

            </div>

        </div>

    );

}