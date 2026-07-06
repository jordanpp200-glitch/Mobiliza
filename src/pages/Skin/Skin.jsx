import { useEffect, useState } from "react";

import {
    listarSkins,
    comprarSkin,
    equiparSkin
} from "../../api/skinService";

import "./Skin.css";

export default function Skin() {

    const [skins, setSkins] = useState([]);

    const [loading, setLoading] = useState(true);

    const [processando, setProcessando] = useState(false);

    useEffect(() => {

        carregarSkins();

    }, []);

    async function carregarSkins() {

        try {

            setLoading(true);

            const dados = await listarSkins();

            console.log("SKINS:", dados);

            setSkins(dados);

        }

        catch (erro) {

            console.error("Erro ao carregar skins:", erro);

        }

        finally {

            setLoading(false);

        }

    }

    async function comprar(id) {

        if (processando) return;

        try {

            setProcessando(true);

            await comprarSkin(id);

            alert("Skin comprada com sucesso!");

            await carregarSkins();

        }

        catch (erro) {

            console.error(erro);

            alert(

                erro.response?.data?.erro ||

                "Erro ao comprar skin."

            );

        }

        finally {

            setProcessando(false);

        }

    }

    async function selecionarSkin(id) {

        if (processando) return;

        try {

            setProcessando(true);

            await equiparSkin(id);

            alert("Skin equipada com sucesso!");

            // Atualiza a lista de skins
            await carregarSkins();

            // Atualiza TicketCard e Bilhete
            window.dispatchEvent(

                new Event("skinAtualizada")

            );

        }

        catch (erro) {

            console.error(erro);

            alert(

                erro.response?.data?.erro ||

                "Erro ao equipar skin."

            );

        }

        finally {

            setProcessando(false);

        }

    }

    if (loading) {

        return (

            <h2>

                Carregando skins...

            </h2>

        );

    }

    return (

        <div className="skins">

            <h1>

                Loja de Skins

            </h1>

            <div className="skins-grid">

                {

                    skins.length === 0 ?

                    (

                        <p>

                            Nenhuma skin encontrada.

                        </p>

                    )

                    :

                    (

                        skins.map((skin) => (

                            <div

                                className="skin-card"

                                key={skin.id}

                            >

                                <img

                                    className="skin-image"

                                    src={`/images/bilhetes/${skin.imagem}`}

                                    alt={skin.nome}

                                />

                                <div className="skin-info">

                                    <h2>

                                        {skin.nome}

                                    </h2>

                                    <p>

                                        {skin.descricao}

                                    </p>

                                    <div className="skin-footer">

                                        <span className="skin-price">

                                            R$

                                            {" "}

                                            {Number(

                                                skin.preco

                                            ).toFixed(2)}

                                        </span>

                                    </div>

                                    {

                                        !skin.comprada ?

                                        (

                                            <button

                                                className="btn-comprar"

                                                disabled={processando}

                                                onClick={() => comprar(skin.id)}

                                            >

                                                Comprar

                                            </button>

                                        )

                                        :

                                        skin.equipada ?

                                        (

                                            <button

                                                className="btn-equipada"

                                                disabled

                                            >

                                                ✅ Equipada

                                            </button>

                                        )

                                        :

                                        (

                                            <button

                                                className="btn-equipar"

                                                disabled={processando}

                                                onClick={() => selecionarSkin(skin.id)}

                                            >

                                                Equipar

                                            </button>

                                        )

                                    }

                                </div>

                            </div>

                        ))

                    )

                }

            </div>

        </div>

    );

}