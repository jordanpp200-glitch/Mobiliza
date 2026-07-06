import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBus, FaUser, FaEnvelope, FaPhone, FaIdCard, FaMapMarkerAlt, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { api } from "../../services/api.js";
import Swal from "sweetalert2";
import "./Register.css";

export default function Register() {

  const navigate = useNavigate();
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmar, setMostrarConfirmar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({

    nome: "",

    email: "",

    cpf: "",

    telefone: "",

    cep: "",

    endereco: "",

    numero: "",

    complemento: "",

    bairro: "",

    cidade: "",

    estado: "",

    senha: "",

    confirmarSenha: ""

  });

function alterar(e){

    const {name,value}=e.target;
    setForm((prev)=>({
        ...prev,
        [name]:value
    }));

    if(name==="cep"){
        buscarCEP(value);
    }
}
   async function buscarCEP(cep) {

        const cepLimpo = cep.replace(/\D/g, "");

        if (cepLimpo.length !== 8) return;

        try {

            const response = await fetch(
                `https://viacep.com.br/ws/${cepLimpo}/json/`
            );

            const dados = await response.json();

            if (dados.erro) return;

            setForm((prev) => ({
                ...prev,
                endereco: dados.logradouro,
                bairro: dados.bairro,
                cidade: dados.localidade,
                estado: dados.uf
            }));

        } catch (error) {

            console.log(error);

        }

    }

  
   function validarFormulario() {

    if (!form.nome.trim()) {
        Swal.fire("Atenção", "Informe seu nome.", "warning");
        return false;
    }

    if (!form.email.trim()) {
        Swal.fire("Atenção", "Informe seu e-mail.", "warning");
        return false;
    }

    if (!form.cpf.trim()) {
        Swal.fire("Atenção", "Informe seu CPF.", "warning");
        return false;
    }

    if (!form.telefone.trim()) {
        Swal.fire("Atenção", "Informe seu telefone.", "warning");
        return false;
    }

    if (!form.cep.trim()) {
        Swal.fire("Atenção", "Informe seu CEP.", "warning");
        return false;
    }

    if (!form.senha.trim()) {
        Swal.fire("Atenção", "Informe sua senha.", "warning");
        return false;
    }

    if (form.senha !== form.confirmarSenha) {
        Swal.fire(
            "Erro",
            "As senhas não conferem.",
            "error"
        );
        return false;
    }

    return true;

}

   async function handleRegister(e){

    e.preventDefault();

    if(!validarFormulario()) return;

    try{

        setLoading(true);

        await api.post("/auth/register",{

            nome:form.nome,
            email:form.email,
            cpf:form.cpf,
            telefone:form.telefone,
            cep:form.cep,
            endereco:form.endereco,
            numero:form.numero,
            complemento:form.complemento,
            bairro:form.bairro,
            cidade:form.cidade,
            estado:form.estado,
            senha:form.senha

        });

        Swal.fire({

            icon:"success",

            title:"Cadastro realizado!",

            text:"Você será redirecionado para o Login.",

            timer:2000,

            showConfirmButton:false

        }).then(()=>{

            navigate("/login");

        });

    }catch(error){

        Swal.fire({

            icon:"error",

            title:"Erro ao cadastrar",

            text:error.response?.data?.message ||
                 "Não foi possível realizar o cadastro."

        });

    }finally{

        setLoading(false);

    }

}

  return (

    <div className="register-page">

      <div className="register-background">

        <img

          src="/images/login-banner.png"

          className="register-background-image"

          alt=""

        />

        <div className="register-overlay"></div>

      </div>

      <div className="register-brand">

        <FaBus className="brand-icon" />

        <div>

          <h1>Mobiliza</h1>

          <span>Bilhete Virtual</span>

        </div>

      </div>

      <div className="register-card">
        <h2 className="register-title">

          Criar Conta

        </h2>

        <p className="register-subtitle">

          Cadastre-se para utilizar todos os recursos do Mobiliza.

        </p>

        <form className="register-form" onSubmit={handleRegister}>
          <div className="register-field">

            <label>

              Nome Completo

            </label>

            <div className="register-input-wrapper">

              <FaUser className="input-icon" />

              <input

                type="text"

                name="nome"

                value={form.nome}

                onChange={alterar}

                placeholder="Digite seu nome"

              />

            </div>

          </div>

          <div className="register-field">

            <label>

              Email

            </label>

            <div className="register-input-wrapper">

              <FaEnvelope className="input-icon" />

              <input

                type="email"

                name="email"

                value={form.email}

                onChange={alterar}

                placeholder="Digite seu email"

              />

            </div>

          </div>

          <div className="register-field">

            <label>CPF</label>

            <div className="register-input-wrapper">

              <FaIdCard className="input-icon" />

              <input
                type="text"
                name="cpf"
                value={form.cpf}
                onChange={alterar}
                placeholder="000.000.000-00"
              />

            </div>

          </div>

          <div className="register-field">

            <label>Telefone</label>

            <div className="register-input-wrapper">

              <FaPhone className="input-icon" />

              <input
                type="text"
                name="telefone"
                value={form.telefone}
                onChange={alterar}
                placeholder="(11) 99999-9999"
              />

            </div>

          </div>

          <div className="register-field">

            <label>CEP</label>

            <div className="register-input-wrapper">

              <FaMapMarkerAlt className="input-icon" />

              <input
                type="text"
                name="cep"
                value={form.cep}
                onChange={alterar}
                placeholder="00000-000"
              />

            </div>

          </div>

          <div className="register-field">

            <label>Endereço</label>

            <div className="register-input-wrapper">

              <FaMapMarkerAlt className="input-icon" />

              <input
                type="text"
                name="endereco"
                value={form.endereco}
                onChange={alterar}
                placeholder="Rua, Avenida..."
              />

            </div>

          </div>

          <div className="register-field">

            <label>Número</label>

            <div className="register-input-wrapper">

              <FaMapMarkerAlt className="input-icon" />

              <input
                type="text"
                name="numero"
                value={form.numero}
                onChange={alterar}
                placeholder="Número"
              />

            </div>

          </div>

          <div className="register-field">

            <label>Complemento</label>

            <div className="register-input-wrapper">

              <FaMapMarkerAlt className="input-icon" />

              <input
                type="text"
                name="complemento"
                value={form.complemento}
                onChange={alterar}
                placeholder="Apartamento, Bloco..."
              />

            </div>

          </div>

          <div className="register-field">

            <label>Bairro</label>

            <div className="register-input-wrapper">

              <FaMapMarkerAlt className="input-icon" />

              <input
                type="text"
                name="bairro"
                value={form.bairro}
                onChange={alterar}
                placeholder="Bairro"
              />

            </div>

          </div>

          <div className="register-field">

            <label>Cidade</label>

            <div className="register-input-wrapper">

              <FaMapMarkerAlt className="input-icon" />

              <input
                type="text"
                name="cidade"
                value={form.cidade}
                onChange={alterar}
                placeholder="Cidade"
              />

            </div>

          </div>

          <div className="register-field">

            <label>Estado</label>

            <div className="register-input-wrapper">

              <FaMapMarkerAlt className="input-icon" />

              <input
                type="text"
                name="estado"
                value={form.estado}
                onChange={alterar}
                placeholder="UF"
              />

            </div>

          </div>

          <div className="register-field">

            <label>Senha</label>

            <div className="register-input-wrapper">

              <FaLock className="input-icon" />

              <input
                type={mostrarSenha ? "text" : "password"}
                name="senha"
                value={form.senha}
                onChange={alterar}
                placeholder="Digite sua senha"
              />

              <button
                type="button"
                className="password-button"
                onClick={() => setMostrarSenha(!mostrarSenha)}
              >
                {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>

          </div>

          <div className="register-field">

            <label>Confirmar Senha</label>

            <div className="register-input-wrapper">

              <FaLock className="input-icon" />

              <input
                type={mostrarConfirmar ? "text" : "password"}
                name="confirmarSenha"
                value={form.confirmarSenha}
                onChange={alterar}
                placeholder="Confirme sua senha"
              />

              <button
                type="button"
                className="password-button"
                onClick={() => setMostrarConfirmar(!mostrarConfirmar)}
              >
                {mostrarConfirmar ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>

          </div>



        

        <button
          className="register-button"
          type="submit"
          disabled={loading}
        >
          {loading ? "Cadastrando..." : "Criar Conta"}
        </button>

</form>
        <p className="register-login-text">

          Já possui uma conta?

          <Link
            to="/login"
            className="register-login-link"
          >
            Entrar
          </Link>

        </p>

      </div>

    </div>

  )

}