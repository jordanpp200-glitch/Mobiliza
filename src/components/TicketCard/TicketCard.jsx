import { useEffect, useState } from "react";

import {
    FaBus,
    FaQrcode
} from "react-icons/fa";

import { buscarBilhete } from "../../api/bilheteService";

import "./TicketCard.css";

export default function TicketCard() {

    const [loading, setLoading] = useState(true);

    const [bilhete, setBilhete] = useState(null);

    async function carregarBilhete() {

        try {

            const dados = await buscarBilhete();
            console.log("Bilhete:", dados);

            console.log("Skin:", dados.skin);

            setBilhete(dados);

        }

        catch (erro) {

            console.error(erro);

        }

        finally {

            setLoading(false);

        }

    }

    useEffect(() => {

        async function initBilhete() {
            await carregarBilhete();
        }

        initBilhete();

        window.addEventListener(

            "saldoAtualizado",

            carregarBilhete

        );

        window.addEventListener(

            "skinAtualizada",

            carregarBilhete

        );

        return () => {

            window.removeEventListener(

                "saldoAtualizado",

                carregarBilhete

            );

            window.removeEventListener(

                "skinAtualizada",

                carregarBilhete

            );

        };

    }, []);

    if (loading) {

        return (

            <div className="ticket-card loading">

                Carregando Bilhete...

            </div>

        );

    }

    if (!bilhete) {

        return (

            <div className="ticket-card">

                Bilhete não encontrado.

            </div>

        );

    }

    return (

        <div

            className="ticket-card"

            style={{

                backgroundImage:

                    `url(/images/bilhetes/${bilhete.skin})`

            }}

        >

            <div className="ticket-overlay">

                <div className="ticket-header">

                    <div>

                    </div>

                    <FaBus />

                </div>

                <div className="ticket-number">

                    {bilhete.numero}

                </div>

                <div className="ticket-user">

                    {bilhete.usuario?.nome || "Usuário"}

                </div>

                <div className="ticket-info">

                    <div>

                        

                    </div>

                    <div>

                        <small>

                            Validade

                        </small>

                        <strong>

                            {

                                new Date(

                                    bilhete.validade

                                ).toLocaleDateString(

                                    "pt-BR"

                                )

                            }

                        </strong>

                    </div>

                </div>

                <div className="ticket-footer">

                    <div className="ticket-qr">

                        <FaQrcode />

                    </div>

                </div>

            </div>

        </div>

    );

}