import "./DownloadApp.css";

export default function DownloadApp() {

    return (

        <section className="download-app">

            <div className="download-content">

                <div className="download-info">

                    <span className="download-badge">

                        APLICATIVO MOBILE

                    </span>

                    <h2>

                        Leve o Mobiliza
                        para onde você estiver

                    </h2>

                    <p>

                        Baixe gratuitamente nosso aplicativo e tenha acesso ao
                        Bilhete Virtual diretamente pelo seu celular.

                    </p>

                    <ul>

                        <li>✔ Bilhete Virtual</li>

                        <li>✔ Recarga Online</li>

                        <li>✔ Histórico de viagens</li>

                        <li>✔ Consulta de saldo</li>

                        <li>✔ Login seguro</li>

                    </ul>

                </div>

                <div className="download-qr">

                    <div className="qr-card">

                        <img
                            src="/images/qrcode.png"
                            alt="QR Code Mobiliza"
                        />

                        <h3>

                            Escaneie para baixar

                        </h3>

                        <span>

                            Android • iOS

                        </span>

                    </div>

                </div>

            </div>

        </section>

    );

}