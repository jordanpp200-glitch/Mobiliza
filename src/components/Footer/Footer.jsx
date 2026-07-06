import "./Footer.css";

import {
    FaMobile,
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
    FaWhatsapp,
    FaArrowUp
} from "react-icons/fa";

export default function Footer() {

    function voltarTopo() {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

    return (

        <footer
            className="footer"
            id="contato"
        >

            <div className="footer-container">

                {/* LOGO */}

                <div className="footer-about">

                    <div className="footer-logo">

                        <FaMobile className="footer-icon"/>

                        <div>

                            <h2>Mobiliza</h2>

                            <span>Bilhete Virtual</span>

                        </div>

                    </div>

                    <p>

                        O Mobiliza facilita a mobilidade urbana,
                        permitindo consultas de saldo, recargas
                        e utilização do Bilhete Virtual
                        diretamente pelo celular.

                    </p>

                </div>

                {/* LINKS */}

                <div className="footer-links">

                    <h3>Institucional</h3>

                    <a href="/">Sobre</a>

                    <a href="/">Quem Somos</a>

                    <a href="/">Nossa Missão</a>

                </div>

                <div className="footer-links">

                    <h3>Ajuda</h3>

                    <a href="/">Central de Ajuda</a>

                    <a href="/">Contato</a>

                    <a href="/">Perguntas Frequentes</a>

                </div>

                <div className="footer-links">

                    <h3>Legal</h3>

                    <a href="/">Política de Privacidade</a>

                    <a href="/">Termos de Uso</a>

                    <a href="/">LGPD</a>

                </div>

            </div>

            {/* REDES SOCIAIS */}

            <div className="footer-social">

                <a href="/">
                    <FaInstagram/>
                </a>

                <a href="/">
                    <FaFacebookF/>
                </a>

                <a href="/">
                    <FaLinkedinIn/>
                </a>

                <a href="/">
                    <FaWhatsapp/>
                </a>

            </div>

            <div className="footer-bottom">

                <p>

                    © 2026 Mobiliza • Todos os direitos reservados.

                </p>

                <button
                    className="back-top"
                    onClick={voltarTopo}
                >

                    <FaArrowUp/>

                </button>

            </div>

        </footer>

    );

}