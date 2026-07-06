import "./FloatingButtons.css";

import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

export default function FloatingButtons() {

    function voltarTopo() {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

    return (

        <div className="floating-buttons">

            <a
                href="https://wa.me/5511949115828?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Mobiliza."
                target="_blank"
                rel="noreferrer"
                className="floating-whatsapp"
            >

                <FaWhatsapp />

            </a>

            <button

                className="floating-top"

                onClick={voltarTopo}

            >

                <FaArrowUp />

            </button>

        </div>

    );

}