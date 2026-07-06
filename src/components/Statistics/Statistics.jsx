import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

import "./Statistics.css";

const dados = [

  {
    mes:"Jan",
    viagens:850000,
    recargas:620000,
    usuarios:25000
  },

  {
    mes:"Fev",
    viagens:980000,
    recargas:700000,
    usuarios:32000
  },

  {
    mes:"Mar",
    viagens:1150000,
    recargas:810000,
    usuarios:40000
  },

  {
    mes:"Abr",
    viagens:1450000,
    recargas:980000,
    usuarios:53000
  },

  {
    mes:"Mai",
    viagens:1750000,
    recargas:1200000,
    usuarios:67000
  },

  {
    mes:"Jun",
    viagens:2200000,
    recargas:1600000,
    usuarios:89000
  }

];

export default function Statistics(){

    return(

        <section className="statistics">

            <span className="statistics-badge">

                ESTATÍSTICAS

            </span>

            <h2>

                Crescimento da Plataforma

            </h2>

            <p>

                Evolução das viagens, recargas e novos usuários do Mobiliza.

            </p>

            <div className="chart-card">

                <ResponsiveContainer
                    width="100%"
                    height={450}
                >

                    <LineChart data={dados}>

                        <CartesianGrid
                            stroke="#17303c"
                        />

                        <XAxis dataKey="mes"/>

                        <YAxis/>

                        <Tooltip/>

                        <Line
                            type="monotone"
                            dataKey="viagens"
                            stroke="#25D8C5"
                            strokeWidth={4}
                        />

                        <Line
                            type="monotone"
                            dataKey="recargas"
                            stroke="#6BE3FF"
                            strokeWidth={4}
                        />

                        <Line
                            type="monotone"
                            dataKey="usuarios"
                            stroke="#9EFFA1"
                            strokeWidth={4}
                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>

        </section>

    );

}