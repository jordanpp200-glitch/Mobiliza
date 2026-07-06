import { useEffect, useState } from "react";
import { FaHistory, FaArrowDown, FaArrowUp, FaWallet } from "react-icons/fa";

import "./History.css";

export default function History() {

    const [historico, setHistorico] = useState([]);

    useEffect(() => {

        carregarHistorico();

    }, []);

    async function carregarHistorico() {

        try {

            // Futuramente será substituído pela API
            // const { data } = await api.get("/history");

            const data = [

                {
                    id: 1,
                    tipo: "Recarga PIX",
                    valor: 50,
                    data: "04/07/2026",
                    status: "Concluído"
                },

                {
                    id: 2,
                    tipo: "Passagem",
                    valor: -5,
                    data: "03/07/2026",
                    status: "Utilizado"
                },

                {
                    id: 3,
                    tipo: "Recarga Crédito",
                    valor: 100,
                    data: "01/07/2026",
                    status: "Concluído"
                }

            ];

            setHistorico(data);

        } catch (erro) {

            console.log(erro);

        }

    }

    return (

        <div className="history-page">

            <div className="history-header">

                <FaHistory />

                <h1>Histórico</h1>

            </div>

            <div className="history-list">

                {

                    historico.map((item) => (

                        <div
                            key={item.id}
                            className="history-card"
                        >

                            <div className="history-icon">

                                {

                                    item.valor >= 0

                                        ?

                                        <FaArrowDown />

                                        :

                                        <FaArrowUp />

                                }

                            </div>

                            <div className="history-info">

                                <h3>

                                    {item.tipo}

                                </h3>

                                <span>

                                    {item.data}

                                </span>

                            </div>

                            <div className="history-value">

                                <strong>

                                    {

                                        item.valor >= 0

                                            ?

                                            "+"

                                            :

                                            "-"

                                    }

                                    R$

                                    {" "}

                                    {Math.abs(item.valor).toFixed(2)}

                                </strong>

                                <small>

                                    {item.status}

                                </small>

                            </div>

                        </div>

                    ))

                }

            </div>

            {

                historico.length === 0 && (

                    <div className="history-empty">

                        <FaWallet />

                        <h2>

                            Nenhuma movimentação encontrada

                        </h2>

                    </div>

                )

            }

        </div>

    );

}