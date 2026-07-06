import { Link } from "react-router-dom";
import { FaMobileAlt } from "react-icons/fa";
import "./Header.css";

export default function Header() {

    return (

        <header className="header">

            <div className="logo">

                <FaMobileAlt className="logo-icon"/>

                <div>

                    <h1>Mobiliza</h1>

                    <span>Bilhete Virtual</span>

                </div>

            </div>

            <nav className="menu">

                <a href="#inicio">
                    Início
                </a>

                <a href="#funcionalidades">
                    Funcionalidades
                </a>

                <a href="#como-funciona">
                    Como Funciona
                </a>

                <a href="#contato">
                    Contato
                </a>

            </nav>

            <div className="buttons">

                <Link
                    to="/login"
                    className="btn-login"
                >

                    Entrar

                </Link>

                <Link
                    to="/register"
                    className="btn-register"
                >

                    Criar Conta

                </Link>

            </div>

        </header>

    );

}