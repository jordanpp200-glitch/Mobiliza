export default function SavedCards({

    cartoes,

    selecionar

}){

    if(cartoes.length===0){

        return null;

    }

    return(

        <div className="saved-cards">

            <h3>

                Cartões salvos

            </h3>

            {

                cartoes.map(card=>(

                    <div

                        key={card.id}

                        className="saved-card"

                        onClick={()=>selecionar(card)}

                    >

                        <strong>

                            **** **** ****

                            {" "}

                            {card.numero.slice(-4)}

                        </strong>

                        <span>

                            {card.nome}

                        </span>

                    </div>

                ))

            }

        </div>

    );

}