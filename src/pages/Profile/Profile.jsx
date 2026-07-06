import { useEffect, useState } from "react";

import {

    FaUserCircle,
    FaUser,
    FaEnvelope,
    FaPhone,
    FaIdCard,
    FaMapMarkerAlt,
    FaBus,
    FaWallet,
    FaCreditCard,
    FaLock,
    FaCamera,
    FaSave,
    FaTrashAlt,
    FaPlus,
    FaCog

} from "react-icons/fa";

import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";

import api from "../../api/api";

import "./Profile.css";

export default function Profile() {

    const [usuario, setUsuario] = useState(null);

    const [bilhete, setBilhete] = useState(null);

    const [cartoes, setCartoes] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        carregarDados();

    }, []);

    async function carregarDados() {

        try {

            const perfil = await api.get("/profile");

            setUsuario(perfil.data);

            try {

                const bilheteResponse = await api.get("/bilhete");

                setBilhete(bilheteResponse.data);

            }

            catch {

                setBilhete(null);

            }

            try {

                const cartoesResponse = await api.get("/cards");

                setCartoes(cartoesResponse.data);

            }

            catch {

                setCartoes([]);

            }

        }

        catch (error) {

            console.log(error);

        }

        finally {

            setLoading(false);

        }

    }

    if (loading) {

        return (

            <div className="profile-loading">

                Carregando perfil...

            </div>

        );

    }

    if (!usuario) {

        return (

            <div className="profile-loading">

                Usuário não encontrado.

            </div>

        );

    }

    return (

        <div className="dashboard">

            <Sidebar />

            <main className="dashboard-content">

                <Topbar />

                <div className="profile-page">

                    {/* =======================================================
    HEADER
======================================================= */}

                    <div className="profile-header">

                        <div className="profile-avatar-area">

                            {

                                usuario.foto

                                    ?

                                    <img

                                        src={usuario.foto}

                                        alt={usuario.nome}

                                        className="profile-avatar"

                                    />

                                    :

                                    <FaUserCircle

                                        className="profile-avatar-icon"

                                    />

                            }

                            <button className="profile-photo-button">

                                <FaCamera />

                                Alterar Foto

                            </button>

                        </div>

                        <div className="profile-user-info">

                            <h1>

                                {usuario.nome}

                            </h1>

                            <p>

                                <FaEnvelope />

                                {usuario.email}

                            </p>

                            <span>

                                Cliente Premium

                            </span>

                        </div>

                        <div className="profile-actions">

                            <button className="btn-save">

                                <FaSave />

                                Salvar Alterações

                            </button>

                        </div>

                    </div>

                    {/* =======================================================
    DADOS PESSOAIS
======================================================= */}

                    <section className="profile-card">

                        <div className="profile-card-title">

                            <FaUser />

                            <h2>

                                Dados Pessoais

                            </h2>

                        </div>

                        <div className="profile-grid">

                            <div className="profile-field">

                                <label>

                                    Nome Completo

                                </label>

                                <input

                                    defaultValue={usuario.nome}

                                />

                            </div>

                            <div className="profile-field">

                                <label>

                                    CPF

                                </label>

                                <input

                                    defaultValue={usuario.cpf || ""}

                                />

                            </div>

                            <div className="profile-field">

                                <label>

                                    RG

                                </label>

                                <input

                                    defaultValue={usuario.rg || ""}

                                />

                            </div>

                            <div className="profile-field">

                                <label>

                                    Data de Nascimento

                                </label>

                                <input

                                    type="date"

                                    defaultValue={

                                        usuario.dataNascimento || ""

                                    }

                                />

                            </div>

                        </div>

                    </section>

                    {/* =======================================================
    CONTATO
======================================================= */}

                    <section className="profile-card">

                        <div className="profile-card-title">

                            <FaPhone />

                            <h2>Contato</h2>

                        </div>

                        <div className="profile-grid">

                            <div className="profile-field">

                                <label>E-mail</label>

                                <input
                                    type="email"
                                    defaultValue={usuario.email || ""}
                                />

                            </div>

                            <div className="profile-field">

                                <label>Telefone</label>

                                <input
                                    defaultValue={usuario.telefone || ""}
                                />

                            </div>

                            <div className="profile-field">

                                <label>WhatsApp</label>

                                <input
                                    defaultValue={usuario.whatsapp || ""}
                                />

                            </div>

                        </div>

                    </section>

                    {/* =======================================================
    ENDEREÇO
======================================================= */}

                    <section className="profile-card">

                        <div className="profile-card-title">

                            <FaMapMarkerAlt />

                            <h2>Endereço</h2>

                        </div>

                        <div className="profile-grid">

                            <div className="profile-field">

                                <label>CEP</label>

                                <input
                                    defaultValue={usuario.cep || ""}
                                />

                            </div>

                            <div className="profile-field">

                                <label>Rua</label>

                                <input
                                    defaultValue={usuario.endereco || ""}
                                />

                            </div>

                            <div className="profile-field">

                                <label>Número</label>

                                <input
                                    defaultValue={usuario.numero || ""}
                                />

                            </div>

                            <div className="profile-field">

                                <label>Complemento</label>

                                <input
                                    defaultValue={usuario.complemento || ""}
                                />

                            </div>

                            <div className="profile-field">

                                <label>Bairro</label>

                                <input
                                    defaultValue={usuario.bairro || ""}
                                />

                            </div>

                            <div className="profile-field">

                                <label>Cidade</label>

                                <input
                                    defaultValue={usuario.cidade || ""}
                                />

                            </div>

                            <div className="profile-field">

                                <label>Estado</label>

                                <input
                                    defaultValue={usuario.estado || ""}
                                />

                            </div>

                        </div>

                    </section>

                    {/* =======================================================
    BILHETE VIRTUAL
======================================================= */}

                    <section className="profile-card">

                        <div className="profile-card-title">

                            <FaBus />

                            <h2>Bilhete Virtual</h2>

                        </div>

                        {

                            bilhete

                                ?

                                <div className="profile-grid">

                                    <div className="profile-field">

                                        <label>Número do Bilhete</label>

                                        <input

                                            value={bilhete.numero}

                                            readOnly

                                        />

                                    </div>

                                    <div className="profile-field">

                                        <label>Saldo</label>

                                        <input

                                            value={`R$ ${Number(bilhete.saldo).toFixed(2)}`}

                                            readOnly

                                        />

                                    </div>

                                    <div className="profile-field">

                                        <label>Tipo</label>

                                        <input

                                            value={bilhete.tipo}

                                            readOnly

                                        />

                                    </div>

                                    <div className="profile-field">

                                        <label>Status</label>

                                        <input

                                            value="Ativo"

                                            readOnly

                                        />

                                    </div>

                                </div>

                                :

                                <p className="profile-empty">

                                    Nenhum bilhete cadastrado.

                                </p>

                        }

                    </section>

                    {/* =======================================================
    CARTÕES CADASTRADOS
======================================================= */}

                    <section className="profile-card">

                        <div className="profile-card-title">

                            <FaCreditCard />

                            <h2>

                                Cartões Cadastrados

                            </h2>

                        </div>

                        {

                            cartoes.length > 0

                                ?

                                <div className="cards-list">

                                    {

                                        cartoes.map((cartao) => (

                                            <div

                                                className="saved-card"

                                                key={cartao.id}

                                            >

                                                <div>

                                                    <strong>

                                                        {cartao.bandeira || "Cartão"}

                                                    </strong>

                                                    <p>

                                                        **** **** **** {cartao.final || cartao.numero?.slice(-4)}

                                                    </p>

                                                </div>

                                                <button

                                                    className="remove-card"

                                                >

                                                    <FaTrashAlt />

                                                </button>

                                            </div>

                                        ))

                                    }

                                </div>

                                :

                                <div className="profile-empty">

                                    Nenhum cartão cadastrado.

                                </div>

                        }

                        <button className="add-card">

                            <FaPlus />

                            Adicionar Novo Cartão

                        </button>

                    </section>

                    {/* =======================================================
    SEGURANÇA
======================================================= */}

                    <section className="profile-card">

                        <div className="profile-card-title">

                            <FaLock />

                            <h2>

                                Segurança

                            </h2>

                        </div>

                        <div className="security-actions">

                            <button>

                                Alterar Senha

                            </button>

                            <button>

                                Ativar Autenticação em Dois Fatores

                            </button>

                            <button>

                                Encerrar Sessões Ativas

                            </button>

                        </div>

                    </section>

                    {/* =======================================================
    PREFERÊNCIAS
======================================================= */}

                    <section className="profile-card">

                        <div className="profile-card-title">

                            <FaCog />

                            <h2>

                                Preferências

                            </h2>

                        </div>

                        <div className="profile-grid">

                            <div className="profile-field">

                                <label>

                                    Idioma

                                </label>

                                <select defaultValue="pt-BR">

                                    <option value="pt-BR">

                                        Português (Brasil)

                                    </option>

                                    <option value="en-US">

                                        English

                                    </option>

                                    <option value="es">

                                        Español

                                    </option>

                                </select>

                            </div>

                            <div className="profile-field">

                                <label>

                                    Tema

                                </label>

                                <select defaultValue="dark">

                                    <option value="dark">

                                        Escuro

                                    </option>

                                    <option value="light">

                                        Claro

                                    </option>

                                </select>

                            </div>

                            <div className="profile-field">

                                <label>

                                    Notificações

                                </label>

                                <select defaultValue="true">

                                    <option value="true">

                                        Ativadas

                                    </option>

                                    <option value="false">

                                        Desativadas

                                    </option>

                                </select>

                            </div>

                        </div>

                    </section>

                    {/* =======================================================
    BOTÕES
======================================================= */}

                    <section className="profile-actions-bottom">

                        <button className="profile-save">

                            <FaSave />

                            Salvar Alterações

                        </button>

                        <button className="profile-delete">

                            <FaTrashAlt />

                            Excluir Conta

                        </button>

                    </section>

                </div>

            </main>

        </div>

    );

}