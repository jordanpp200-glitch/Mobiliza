import { useState } from "react";

export function ContactForm() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    servico: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const mensagem =
      `Olá, meu nome é ${form.nome}.
Telefone: ${form.telefone}
Serviço: ${form.servico}`;

    window.open(
      `https://wa.me/5511999999999?text=${encodeURIComponent(mensagem)}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nome"
        onChange={(e) =>
          setForm({ ...form, nome: e.target.value })
        }
      />

      <input
        placeholder="Telefone"
        onChange={(e) =>
          setForm({ ...form, telefone: e.target.value })
        }
      />

      <input
        placeholder="Serviço"
        onChange={(e) =>
          setForm({ ...form, servico: e.target.value })
        }
      />

      <button type="submit">
        Solicitar Orçamento
      </button>
    </form>
  );
}