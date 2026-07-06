import { useEffect, useState } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";

import { buscarBilhete } from "../../api/bilheteService";

import "./Bilhete.css";

export default function Bilhete() {

    const [bilhete, setBilhete] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        carregarBilhete();

    }, []);

    async function carregarBilhete() {

        try {

            const dados = await buscarBilhete();

            setBilhete(dados);

        }

        catch (erro) {

            console.log(erro);

        }

        finally {

            setLoading(false);

        }

    }

    if (loading) {

        return <h2>Carregando Bilhete...</h2>;

    }

    return (

        <div className="dashboard">

            <Sidebar />

            <main className="dashboard-content">

                <Topbar />

                <div className="bilhete-page">

                    <h1>

                        Meu Bilhete Virtual

                    </h1>

                    <div className="bilhete-card">

                        <div

                            className="bilhete-image"

                            style={{

                                backgroundImage:

                                `url(/images/bilhetes/${bilhete.skin})`

                            }}

                        >

                            <div className="bilhete-overlay">

                                <h2>

                                    Mobiliza

                                </h2>

                                <p>

                                    Bilhete Virtual

                                </p>

                                <h3>

                                    {bilhete.numero}

                                </h3>

                            </div>

                        </div>

                        <div className="bilhete-info">

                            <div className="info-item">

                                <span>Saldo</span>

                                <strong>

                                    R$

                                    {" "}

                                    {Number(

                                        bilhete.saldo

                                    ).toFixed(2)}

                                </strong>

                            </div>

                            <div className="info-item">

                                <span>Tipo</span>

                                <strong>

                                    {bilhete.tipo}

                                </strong>

                            </div>

                            <div className="info-item">

                                <span>Validade</span>

                                <strong>

                                    {

                                        new Date(

                                            bilhete.validade

                                        ).toLocaleDateString("pt-BR")

                                    }

                                </strong>

                            </div>

                            <div className="info-item">

                                <span>Skin</span>

                                <strong>

                                    {bilhete.skin}

                                </strong>

                            </div>

                        </div>

                    </div>

                    <div className="qr-area">

                        <h2>

                            QR Code

                        </h2>

                        <img

                            src={

                                bilhete.qrCode ||

                                "/images/qrcode.png"

                            }

                            alt="QR Code"

                        />

                    </div>

                    <button

                        className="btn-atualizar"

                        onClick={carregarBilhete}

                    >

                        Atualizar Bilhete

                    </button>

                </div>

            </main>

        </div>

    );

}