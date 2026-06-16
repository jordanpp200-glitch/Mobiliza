import "./Dashboard.css";

export default function Dashboard() {

  const usuario = JSON.parse(
    localStorage.getItem("usuario")
  );

  function sair() {
    localStorage.clear();
    window.location.href = "/";
  }

  return (
    <>
      <header className="hero">

        <h1>
          ELETRICISTA PROFISSIONAL
        </h1>

        <p>
          Atendimento Residencial,
          Comercial e Emergencial
        </p>

        <a href="#agendamento">
          Agendar Serviço
        </a>

      </header>

      <section className="services">

        <h2>Serviços</h2>

        <div className="grid">

          <div className="card">
            <h3>Troca de Tomadas</h3>
            <span>R$ 80</span>
          </div>

          <div className="card">
            <h3>Instalação de Chuveiro</h3>
            <span>R$ 150</span>
          </div>

          <div className="card">
            <h3>Troca de Disjuntores</h3>
            <span>R$ 120</span>
          </div>

          <div className="card">
            <h3>Ventiladores</h3>
            <span>R$ 180</span>
          </div>

        </div>

      </section>

      <section
        id="agendamento"
        className="booking"
      >

        <h2>Agendamento</h2>

        <input type="date" />

        <button>
          Reservar Data
        </button>

      </section>

      <section className="about">

        <h2>Sobre Mim</h2>

        <p>
          Mais de 10 anos de experiência
          em instalações e manutenção
          elétrica residencial e comercial.
        </p>

      </section>

      <footer>

        <p>
          Usuário Logado:
          {" "}
          {usuario?.email}
        </p>

        <button onClick={sair}>
          Sair
        </button>

      </footer>
    </>
  );
}