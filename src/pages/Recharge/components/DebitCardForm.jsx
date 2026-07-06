import { useState } from "react";

export default function DebitCardForm({

    valor,

    onSubmit

}) {

    const [cartao, setCartao] = useState({

        numero:"",

        nome:"",

        validade:"",

        cvv:""

    });

    function alterar(e){

        setCartao({

            ...cartao,

            [e.target.name]:e.target.value

        });

    }

    function enviar(e){

        e.preventDefault();

        onSubmit({

            ...cartao,

            valor

        });

    }

    return(

        <form

            className="payment-form"

            onSubmit={enviar}

        >

            <input

                name="numero"

                placeholder="Número do cartão"

                onChange={alterar}

            />

            <input

                name="nome"

                placeholder="Nome"

                onChange={alterar}

            />

            <div className="row">

                <input

                    name="validade"

                    placeholder="MM/AA"

                    onChange={alterar}

                />

                <input

                    name="cvv"

                    placeholder="CVV"

                    onChange={alterar}

                />

            </div>

            <button>

                Pagar com Débito

            </button>

        </form>

    );

}