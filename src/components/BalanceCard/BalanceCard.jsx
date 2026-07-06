import { useEffect, useState } from "react";

import {
    FaWallet,
    FaArrowUp,
    FaCheckCircle
} from "react-icons/fa";

import { buscarBilhete } from "../../api/bilheteService";

import "./BalanceCard.css";

export default function BalanceCard() {

    const [loading, setLoading] = useState(true);

    const [bilhete, setBilhete] = useState(null);

    async function carregarSaldo() {

        try {

            const dados = await buscarBilhete();

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

        async function iniciarCarregamento() {

            await carregarSaldo();

        }

        iniciarCarregamento();

        window.addEventListener(

            "saldoAtualizado",

            carregarSaldo

        );

        window.addEventListener(

            "skinAtualizada",

            carregarSaldo

        );

        return () => {

            window.removeEventListener(

                "saldoAtualizado",

                carregarSaldo

            );

            window.removeEventListener(

                "skinAtualizada",

                carregarSaldo

            );

        };

    }, []);

    if (loading) {

        return (

            <div className="balance-card">

                Carregando...

            </div>

        );

    }

    if (!bilhete) {

        return (

            <div className="balance-card">

                Bilhete não encontrado.

            </div>

        );

    }

    return (

        <div className="balance-card">

            <div className="balance-header">

                <div>

                    <small>

                        Saldo disponível

                    </small>

                    <h2>

                        R$

                        {" "}

                        {

                            Number(

                                bilhete.saldo

                            ).toFixed(2)

                        }

                    </h2>

                </div>

                <FaWallet />

            </div>

            <div className="balance-status">

                <FaCheckCircle />

                Bilhete ativo

            </div>

            <div className="balance-divider"></div>

    

            <button className="balance-button">

                <FaArrowUp />

                Fazer Recarga

            </button>

        </div>

    );

}