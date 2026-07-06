import faqData from "./faqData";
import HelpRating from "./HelpRating";
import "./HelpCenter.css";

export default function HelpModal({

    faq,
    fechar,
    favoritos,
    setFavoritos,
    abrirPergunta

}) {

    if (!faq) return null;

    return (

        <div className="help-modal-overlay">

            <div className="help-modal">

                <div className="help-header">

                    <button
                        className="help-close"
                        onClick={fechar}
                    >
                        ← Voltar
                    </button>

                    <button
                        className="favorite-button"
                        onClick={() => {

                            setFavoritos((prev) => {

                                if (prev.includes(faq.id)) {

                                    return prev.filter((id) => id !== faq.id);

                                }

                                return [...prev, faq.id];

                            });

                        }}
                    >

                    </button>

                </div>

                <span className="help-category">

                    {faq.categoria}

                </span>

                <h2>

                    {faq.pergunta}

                </h2>

                <div className="help-info">

                    <span>⏱ {faq.tempo}</span>

                    <span>📊 {faq.dificuldade}</span>

                    <span>📂 {faq.categoria}</span>

                </div>

                <div className="reading-progress">

    <div className="reading-progress-bar"></div>

</div>

                <div className="help-time">

                    ⏱ Tempo estimado: {faq.tempo}

                </div>

                <div className="help-steps">

                    {

                        faq.passos.map((passo, index) => (

                            <div
                                key={index}
                                className="help-step"
                            >

                                <div className="step-number">

                                    {index + 1}

                                </div>

                                <div className="step-text">

                                    {passo}

                                </div>

                            </div>

                        ))

                    }

                </div>

                <div className="help-next">

                    Esta resposta resolveu sua dúvida?

                </div>

                <HelpRating />

                <div className="help-actions">

                    <button
                        className="help-action-button"
                        onClick={() => navigator.clipboard.writeText(faq.pergunta)}
                    >
                        📋 Copiar pergunta
                    </button>

                    <button
                        className="help-action-button"
                        onClick={() => window.print()}
                    >
                        🖨️ Imprimir
                    </button>

                    <button
                        className="help-action-button"
                        onClick={() => {

                            if (navigator.share) {

                                navigator.share({

                                    title: faq.pergunta,
                                    text: faq.pergunta,
                                    url: window.location.href

                                });

                            }

                        }}
                    >
                        🔗 Compartilhar
                    </button>

                </div>

                <a
                    className="whatsapp-button"
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noreferrer"
                >
                    💬 Ainda preciso de ajuda
                </a>

                <div className="help-related">

                    <h3>

                        Perguntas relacionadas

                    </h3>

                    {

                        faq.relacionadas?.map((id) => {

                            const relacionada = faqData.find(

                                (item) => item.id === id

                            );

                            if (!relacionada) return null;

                            return (

                                <div

                                    key={id}

                                    className="related-item"

                                    onClick={() => abrirPergunta(relacionada)}

                                >

                                    {relacionada.pergunta}

                                </div>

                            );

                        })

                    }

                </div>

            </div>

        </div>

    );

}