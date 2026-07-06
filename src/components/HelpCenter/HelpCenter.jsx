import { useState } from "react";
import "./HelpCenter.css";
import useSearch from "../../hooks/useSearch";
import faqData from "./faqData";
import HelpSearch from "./HelpSearch";
import HelpList from "./HelpList";
import HelpModal from "./HelpModal";

export default function HelpCenter() {

    const [pesquisa, setPesquisa] = useState("");
    const [faqSelecionada, setFaqSelecionada] = useState(null);
    const [favoritos, setFavoritos] = useState([]);
    const [historico, setHistorico] = useState([]);
    const [historicoPesquisa, setHistoricoPesquisa] = useState([]);

    function abrirPergunta(item) {

        setFaqSelecionada(item);

        setHistorico((prev) => {

            const lista = [item, ...prev];

            return lista.slice(0, 5);

        });

    }

    const resultados = useSearch(faqData, pesquisa);

    function salvarPesquisa(texto) {

        if (!texto.trim()) return;

        setHistoricoPesquisa((prev) => {

            const lista = [
                texto,
                ...prev.filter(item => item !== texto)
            ];

            return lista.slice(0, 5);

        });

    }

    return (

        <section className="help-center">

            <span className="help-badge">

                CENTRAL DE AJUDA

            </span>

            <h2>

                Como podemos ajudar?

            </h2>

            <p>

                Pesquise sua dúvida ou escolha uma pergunta abaixo.

            </p>

            <HelpSearch

                pesquisa={pesquisa}

                setPesquisa={setPesquisa}

                resultados={resultados}

                abrirResposta={abrirPergunta}

                salvarPesquisa={salvarPesquisa}

                historicoPesquisa={historicoPesquisa}

            />

            {

    pesquisa !== "" && (

        <HelpList

            perguntas={resultados}

            abrirResposta={abrirPergunta}

        />

    )

}
            <HelpModal

                faq={faqSelecionada}
                fechar={() => setFaqSelecionada(null)}
                favoritos={favoritos}
                setFavoritos={setFavoritos}
                abrirPergunta={abrirPergunta}

            />

        </section>

    );

}