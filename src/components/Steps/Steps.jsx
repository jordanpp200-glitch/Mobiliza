import "./Steps.css";

import {
    FaUserPlus,
    FaWallet,
    FaMobile,
    FaCheckCircle
} from "react-icons/fa";

export default function Steps() {

    const steps = [

        {
            number: "01",
            icon: <FaUserPlus />,
            title: "Crie sua Conta",
            text: "Cadastre-se gratuitamente em poucos minutos."
        },

        {
            number: "02",
            icon: <FaWallet />,
            title: "Faça uma Recarga",
            text: "Recarregue seu Bilhete Virtual utilizando PIX, cartão ou débito."
        },

        {
            number: "03",
            icon: <FaMobile />,
            title: "Ative seu Bilhete",
            text: "Seu Bilhete Virtual fica disponível automaticamente no aplicativo."
        },

        {
            number: "04",
            icon: <FaCheckCircle />,
            title: "Utilize no Transporte",
            text: "Apresente seu Bilhete Virtual durante a utilização do transporte público."
        }

    ];

    return (

        <section
            className="steps"
            id="como-funciona"
        >

            <div className="steps-header">

                <span>COMO FUNCIONA</span>

                <h2>

                    Comece a utilizar o Mobiliza
                    <br />

                    em apenas quatro passos

                </h2>

            </div>

            <div className="steps-grid">

                {

                    steps.map((step,index)=>(

                        <div
                            key={index}
                            className="step-card"
                        >

                            <div className="step-number">

                                {step.number}

                            </div>

                            <div className="step-icon">

                                {step.icon}

                            </div>

                            <h3>

                                {step.title}

                            </h3>

                            <p>

                                {step.text}

                            </p>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}