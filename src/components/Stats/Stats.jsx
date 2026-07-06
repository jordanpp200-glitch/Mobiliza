import "./Stats.css";

export default function Stats(){

    const dados=[

        {
            numero:"+120 mil",
            titulo:"Usuários"
        },

        {
            numero:"+5 milhões",
            titulo:"Viagens"
        },

        {
            numero:"+850 mil",
            titulo:"Recargas"
        },

        {
            numero:"99,9%",
            titulo:"Disponibilidade"
        }

    ];

    return(

        <section className="stats">

            {

                dados.map((item,index)=>(

                    <div
                        key={index}
                        className="stat-card"
                    >

                        <h2>

                            {item.numero}

                        </h2>

                        <span>

                            {item.titulo}

                        </span>

                    </div>

                ))

            }

        </section>

    );

}