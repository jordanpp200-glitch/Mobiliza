import { FaSearch, FaTimes } from "react-icons/fa";
import "./HelpCenter.css";

export default function HelpSearch({

    pesquisa,
    setPesquisa,
    resultados,
    abrirResposta,
    salvarPesquisa,
    historicoPesquisa

}) {

    function pesquisar(e) {

        if (e.key === "Enter") {

            e.preventDefault();

            salvarPesquisa(pesquisa);

            if (resultados.length > 0) {

                abrirResposta(resultados[0]);

            }

        }

    }

    function limparPesquisa() {

        setPesquisa("");

    }

    return (

        <div className="help-search-container">

            {/* Barra de pesquisa */}

            <div className="help-search">

                <FaSearch className="search-icon" />

                <input

                    type="text"

                    placeholder="Pesquise por cadastro, PIX, saldo, bilhete..."

                    value={pesquisa}

                    onChange={(e) => setPesquisa(e.target.value)}

                    onKeyDown={pesquisar}

                />

                {

                    pesquisa !== "" && (

                        <button

                            className="clear-search"

                            onClick={limparPesquisa}

                        >

                            <FaTimes />

                        </button>

                    )

                }

            </div>

            {/* Contador */}

            <div className="help-result-count">

                {

                    pesquisa !== ""

                        ? `${resultados.length} resultado(s) encontrado(s)`

                        : "Pesquise por qualquer assunto"

                }

            </div>

            {/* Últimas Pesquisas */}

            {

                historicoPesquisa.length > 0 && (

                    <div className="history-box">

                        <h4>🕘 Últimas pesquisas</h4>

                        <div className="history-list">

                            {

                                historicoPesquisa.map((item, index) => (

                                    <button

                                        key={index}

                                        className="history-item"

                                        onClick={() => setPesquisa(item)}

                                    >

                                        {item}

                                    </button>

                                ))

                            }

                        </div>

                    </div>

                )

            }

            {/* Perguntas Populares */}

            {

                pesquisa === "" && (

                    <div className="popular-box">

                        <div className="popular-header">

                            <h4>🔥 Perguntas Populares</h4>

                            <button

                                className="ver-todas"

                                onClick={() => setPesquisa(" ")}

                            >

                                Ver todas →

                            </button>

                        </div>

                        {

                            resultados.slice(0, 5).map((item) => (

                                <div

                                    key={item.id}

                                    className="popular-card"

                                    onClick={() => {

                                        salvarPesquisa(item.pergunta);

                                        abrirResposta(item);

                                    }}

                                >

                                    <span>📄</span>

                                    {item.pergunta}

                                </div>

                            ))

                        }

                    </div>

                )

            }

            {/* Sugestões */}

            {

                pesquisa !== "" && resultados.length > 0 && (

                    <div className="help-suggestions">

                        {

                            resultados.slice(0, 6).map((item) => (

                                <div

                                    key={item.id}

                                    className="help-suggestion"

                                    onClick={() => {

                                        salvarPesquisa(item.pergunta);

                                        abrirResposta(item);

                                    }}

                                >

                                    <strong>{item.pergunta}</strong>

                                    <span>{item.categoria}</span>

                                </div>

                            ))

                        }

                    </div>

                )

            }

        </div>

    );

}