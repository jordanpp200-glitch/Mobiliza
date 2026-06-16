export default function Admin() {

  return (
    <div
      style={{
        padding:"40px",
        color:"white"
      }}
    >

      <h1>
        Painel Administrativo
      </h1>

      <table>

        <thead>
          <tr>
            <th>Cliente</th>
            <th>Data</th>
            <th>Serviço</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>João</td>
            <td>10/06/2026</td>
            <td>Troca de Tomada</td>
          </tr>
        </tbody>

      </table>

    </div>
  );
}