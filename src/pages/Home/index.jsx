import './style.css';

import { services } from "../../data/services";
import { ServiceCard } from "../../components/ServiceCard";
import { CalendarBooking } from "../../components/CalendarBooking";
import { ContactForm } from "../../components/ContactForm";
import { WhatsAppButton } from "../../components/WhatsAppButton";

// importe sua imagem corretamente
// import Trash from "../../assets/trash.png";

export default function Home() {

  const users = [];

  return (
    <>
     <section className="hero">
  <div className="hero-content">
    <div>
      <h1>Eletricista Profissional</h1>

      <p>
        Atendimento residencial, comercial e emergencial 24 horas.
      </p>

      <a
        href="https://wa.me/5511949115828"
        target="_blank"
        rel="noreferrer"
        className="hero-button"
      >
        Solicitar Orçamento
      </a>
    </div>

    <div className="qr-container">
      <img
        src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https://wa.me/5511949115828"
        alt="QR Code WhatsApp"
      />

      <p>Escaneie para falar no WhatsApp</p>
    </div>
  </div>
</section>
</>
)
}