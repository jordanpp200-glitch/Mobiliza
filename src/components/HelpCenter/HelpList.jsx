export default function HelpList({

    perguntas,

    abrirResposta

}){

    return(

        <div className="help-list">

            {

                perguntas.length===0?

                (

                    <div className="help-empty">

                        Nenhuma pergunta encontrada.

                    </div>

                )

                :

                (

                    perguntas.map((item)=>(

                        <div

                            key={item.id}

                            className="help-item"

                            onClick={()=>abrirResposta(item)}

                        >

                            <span>

                                {item.categoria}

                            </span>

                            <h3>

                                {item.pergunta}

                            </h3>

                        </div>

                    ))

                )

            }

        </div>

    );

}