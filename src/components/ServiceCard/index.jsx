import "./style.css";

export function ServiceCard({ nome, preco, descricao }) {
  return (
    <div className="service-card">
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <span>{preco}</span>
    </div>
  );
}