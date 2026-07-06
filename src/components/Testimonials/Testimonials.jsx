import "./Testimonials.css";

export default function Testimonials(){

    const comentarios=[

        {

            nome:"Marcos Silva",

            texto:"Muito mais prático utilizar o Bilhete Virtual pelo celular."

        },

        {

            nome:"Ana Paula",

            texto:"Agora faço minhas recargas em poucos segundos."

        },

        {

            nome:"Carlos Souza",

            texto:"Aplicativo rápido, moderno e muito seguro."

        }

    ];

    return(

        <section className="testimonials">

            <h2>

                O que nossos usuários dizem

            </h2>

            <div className="testimonial-grid">

                {

                    comentarios.map((item,index)=>(

                        <div
                            className="testimonial-card"
                            key={index}
                        >

                            <p>

                                "{item.texto}"

                            </p>

                            <strong>

                                {item.nome}

                            </strong>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}