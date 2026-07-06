import "./Hero.css";

export default function Hero() {

    return (

        <section className="hero">

            {/* Vídeo de fundo */}

            <video

                className="hero-video"

                autoPlay

                muted

                loop

                playsInline

            >

                <source
                    src="/videos/hero-video.mp4"
                    type="video/mp4"
                />

            </video>

            {/* Overlay */}

            <div className="hero-overlay"></div>

            {/* Conteúdo */}

            <div className="hero-content">

                <div className="hero-left">

                    <span className="hero-badge">

                        Mobilidade Inteligente

                    </span>

                    <h1>

                        Bilhete Virtual
                        <br />

                        na palma da sua mão

                    </h1>

                    <p>

                        Consulte saldo, faça recargas,
                        acompanhe seu histórico
                        e utilize seu Bilhete Virtual
                        de forma rápida, moderna e segura.

                    </p>
                    <div className="hero-info">

                        <span>✔ Recarga Online</span>

                        <span>✔ Bilhete Virtual</span>

                        <span>✔ Seguro e Rápido</span>

                    </div>

                </div>

            </div>

        </section>

    );

}