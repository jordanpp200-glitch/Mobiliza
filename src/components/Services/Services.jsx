import "./Services.css";

import {
  FaMobile,
  FaWallet,
  FaHistory,
  FaCreditCard,
  FaMapMarkedAlt,
  FaBell
} from "react-icons/fa";

export default function Services() {

  const services = [

    {
      icon: <FaMobile />,
      title: "Bilhete Virtual",
      description:
        "Utilize seu celular como Bilhete Virtual para acessar o transporte público."
    },

    {
      icon: <FaWallet />,
      title: "Recarga Online",
      description:
        "Faça recargas via PIX, Cartão de Crédito ou Débito de forma rápida."
    },

    {
      icon: <FaCreditCard />,
      title: "Saldo em Tempo Real",
      description:
        "Consulte seu saldo atualizado sempre que precisar."
    },

    {
      icon: <FaHistory />,
      title: "Histórico",
      description:
        "Acompanhe todas as suas viagens e recargas realizadas."
    },

    {
      icon: <FaMapMarkedAlt />,
      title: "Linhas e Horários",
      description:
        "Consulte linhas, horários e pontos de embarque rapidamente."
    },

    {
      icon: <FaBell />,
      title: "Notificações",
      description:
        "Receba avisos importantes sobre saldo, recargas e novidades."
    }

  ];

  return (

    <section
      className="services"
      id="funcionalidades"
    >

      <div className="services-header">

        <span>

          FUNCIONALIDADES

        </span>

        <h2>

          Tudo que você precisa
          <br />
          em um único aplicativo

        </h2>

        <p>

          Desenvolvido para oferecer uma experiência
          moderna, rápida e segura no transporte público.

        </p>

      </div>

      <div className="services-grid">

        {

          services.map((service,index)=>(

            <div
              className="service-card"
              key={index}
            >

              <div className="service-icon">

                {service.icon}

              </div>

              <h3>

                {service.title}

              </h3>

              <p>

                {service.description}

              </p>

            </div>

          ))

        }

      </div>

    </section>

  );

}