import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import "./Trips.css";

export default function Trips() {

    return (

        <div className="trips-page">

            <Sidebar />

            <div className="trips-content">

                <Topbar />

                <div className="trips-container">

                    <h1>Minhas Viagens</h1>

                    <p>

                        Aqui ficarão todas as viagens realizadas utilizando o Bilhete Virtual.

                    </p>

                    <div className="empty-card">

                        <h2>Nenhuma viagem registrada</h2>

                        <p>

                            Quando você utilizar seu bilhete, as viagens aparecerão aqui.

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}