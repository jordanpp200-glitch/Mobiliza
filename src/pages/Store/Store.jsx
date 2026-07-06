import { useEffect, useState } from "react";
import { listarSkins } from "../../api/skinService";
import "./Store.css";

export default function Store() {

    const [skins, setSkins] = useState([]);

    useEffect(() => {
        carregarSkins();
    }, []);

    async function carregarSkins() {
        try {
            const dados = await listarSkins();
            setSkins(dados);
        } catch (error) {
            console.error(error);
        }
    }

    return (

        <div className="store">

            <h1>Loja de Skins</h1>

            <div className="skins-grid">

                {skins.map((skin) => (

                    <div
                        key={skin.id}
                        className="skin-card"
                    >

                        <img
                            src={`/images/bilhetes/${skin.imagem}`}
                            alt={skin.nome}
                            className="skin-image"
                            onError={(e) => {
                                e.target.src = "/images/bilhetes/default.png";
                            }}
                        />

                        <div className="skin-info">

                            <h3>{skin.nome}</h3>

                            <span className={`raridade ${skin.raridade.toLowerCase()}`}>

                                {skin.raridade}

                            </span>

                            <p className="descricao">

                                {skin.descricao}

                            </p>

                            <div className="skin-footer">

                                <strong>

                                    R$ {skin.preco.toFixed(2)}

                                </strong>

                                <button>

                                    Comprar

                                </button>

                            </div>

                        </div>
                    </div>

                ))}

            </div>

        </div>

    );
}