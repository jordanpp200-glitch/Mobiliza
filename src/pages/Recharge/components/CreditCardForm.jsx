import { useState } from "react";

export default function CreditCardForm({

    valor,

    onSubmit

}) {

    const [cartao, setCartao] = useState({

        numero: "",

        nome: "",

        validade: "",

        cvv: ""

    });

    function alterar(e){

        setCartao({

            ...cartao,

            [e.target.name]: e.target.value

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

                value={cartao.numero}

                onChange={alterar}

            />

            <input

                name="nome"

                placeholder="Nome impresso"

                value={cartao.nome}

                onChange={alterar}

            />

            <div className="row">

                <input

                    name="validade"

                    placeholder="MM/AA"

                    value={cartao.validade}

                    onChange={alterar}

                />

                <input

                    name="cvv"

                    placeholder="CVV"

                    value={cartao.cvv}

                    onChange={alterar}

                />

            </div>

            <button>

                Pagar com Crédito

            </button>

        </form>

    );

}