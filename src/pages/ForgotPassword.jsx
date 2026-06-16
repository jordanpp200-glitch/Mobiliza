export default function ForgotPassword() {

  return (

    <div className="container">

      <form>

        <h1>Recuperar Senha</h1>

        <input
          type="email"
          placeholder="Digite seu email"
        />

        <button>
          Enviar recuperação
        </button>

      </form>

    </div>

  );
}