import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import { buscarSaldo, gerarPix, pagarPix, pagarCredito, pagarDebito } from "../../api/rechargeService";
import { listarCartoes } from "../../api/cardService";
import CreditCardForm from "./components/CreditCardForm";
import DebitCardForm from "./components/DebitCardForm";
import PixPayment from "./components/PixPayment";
import SavedCards from "./components/SavedCards";

import "./Recharge.css";

export default function Recharge() {

    // ============================
    // Estados
    // ============================

    const [saldo, setSaldo] = useState(0);

    const [valor, setValor] = useState(20);

    const [metodo, setMetodo] = useState("PIX");

    const [pix, setPix] = useState(null);

    const [loading, setLoading] = useState(false);

    const [cartoes, setCartoes] = useState([]);

    const [cartaoSelecionado, setCartaoSelecionado] = useState(null);

    const [erro, setErro] = useState("");

    const [sucesso, setSucesso] = useState("");

    // ============================
    // Carrega dados da página
    // ============================

    useEffect(() => {

        carregarDados();

    }, []);

    // ============================
    // Carregar saldo e cartões
    // ============================

    async function carregarDados() {

        try {

            setErro("");

            const saldoAPI = await buscarSaldo();

            setSaldo(Number(saldoAPI.saldo ?? 0));

            const cards = await listarCartoes();

            setCartoes(cards ?? []);

        } catch (erro) {

            console.error(erro);

            setErro("Não foi possível carregar os dados.");

        }

    }

    // ============================
    // Gerar PIX ou iniciar pagamento
    // ============================

    async function continuar() {

        if (!valor || Number(valor) <= 0) {

            setErro("Informe um valor válido.");

            return;

        }

        setErro("");

        setSucesso("");

        try {

            setLoading(true);

            if (metodo === "PIX") {

                const resposta = await gerarPix(Number(valor));

                setPix(resposta);

                return;

            }

            if (!cartaoSelecionado) {

                setErro("Selecione um cartão.");

                return;

            }

            if (metodo === "CREDITO") {

                await pagarCredito({

                    cartaoId: cartaoSelecionado.id,

                    valor: Number(valor)

                });

            }

            if (metodo === "DEBITO") {

                await pagarDebito({

                    cartaoId: cartaoSelecionado.id,

                    valor: Number(valor)

                });

            }

            setSucesso("Recarga realizada com sucesso!");

            await carregarDados();

            // Atualiza Dashboard
            window.dispatchEvent(
                new Event("saldoAtualizado")
            );

        } catch (erro) {

            console.error(erro);

            setErro(

                erro.response?.data?.erro ||

                "Erro ao realizar a recarga."

            );

        } finally {

            setLoading(false);

        }

    }

    // ============================
    // Confirmar PIX
    // ============================

    async function confirmarPix() {

        try {

            setLoading(true);

            await pagarPix(Number(valor));

            setPix(null);

            setSucesso("Pagamento confirmado!");

            await carregarDados();

            // Atualiza Dashboard
            window.dispatchEvent(
                new Event("saldoAtualizado")
            );

        } catch (erro) {

            console.error(erro);

            setErro(

                erro.response?.data?.erro ||

                "Erro ao confirmar o PIX."

            );

        } finally {

            setLoading(false);

        }

    }

    // ============================
    // Crédito
    // ============================

    async function enviarCredito(cartao) {

        try {

            setLoading(true);

            await pagarCredito({

                ...cartao,

                valor: Number(valor)

            });

            setSucesso("Recarga realizada com sucesso!");

            await carregarDados();

            // Atualiza Dashboard
            window.dispatchEvent(
                new Event("saldoAtualizado")
            );

        } catch (erro) {

            console.error(erro);

            setErro(

                erro.response?.data?.erro ||

                "Erro ao realizar a recarga."

            );

        } finally {

            setLoading(false);

        }

    }

    // ============================
    // Débito
    // ============================

    async function enviarDebito(cartao) {

        try {

            setLoading(true);

            await pagarDebito({

                ...cartao,

                valor: Number(valor)

            });

            setSucesso("Recarga realizada com sucesso!");

            await carregarDados();

            // Atualiza Dashboard
            window.dispatchEvent(
                new Event("saldoAtualizado")
            );

        } catch (erro) {

            console.error(erro);

            setErro(

                erro.response?.data?.erro ||

                "Erro ao realizar a recarga."

            );

        } finally {

            setLoading(false);

        }

    }

    return (

        <div className="recharge-page">

            <Sidebar />

            <div className="recharge-content">

                <Topbar />

                <div className="recharge-container">

                    <div className="page-title">

                        <h1>Recargas</h1>

                        <p>

                            Recarregue seu bilhete virtual de forma rápida e segura.

                        </p>

                    </div>

                    {

                        erro && (

                            <div className="alert-error">

                                {erro}

                            </div>

                        )

                    }

                    {

                        sucesso && (

                            <div className="alert-success">

                                {sucesso}

                            </div>

                        )

                    }

                    <div className="saldo-card">

                        <span>Saldo Atual</span>

                        <h2>

                            R$

                            {" "}

                            {saldo.toFixed(2)}

                        </h2>

                    </div>

                    <div className="valor-card">

                        <h3>

                            Valor da recarga

                        </h3>

                        <div className="quick-values">

                            <button onClick={() => setValor(10)}>

                                R$ 10

                            </button>

                            <button onClick={() => setValor(20)}>

                                R$ 20

                            </button>

                            <button onClick={() => setValor(50)}>

                                R$ 50

                            </button>

                            <button onClick={() => setValor(100)}>

                                R$ 100

                            </button>

                            <button onClick={() => setValor(200)}>

                                R$ 200

                            </button>

                        </div>

                        <input

                            type="number"

                            placeholder="Digite outro valor"

                            value={valor}

                            onChange={(e) => setValor(Number(e.target.value))}

                        />

                    </div>

                    <div className="payment-selector">

                        <button

                            className={

                                metodo === "PIX"

                                    ?

                                    "active"

                                    :

                                    ""

                            }

                            onClick={() => setMetodo("PIX")}

                        >

                            PIX

                        </button>

                        <button

                            className={

                                metodo === "CREDITO"

                                    ?

                                    "active"

                                    :

                                    ""

                            }

                            onClick={() => setMetodo("CREDITO")}

                        >

                            Crédito

                        </button>

                        <button

                            className={

                                metodo === "DEBITO"

                                    ?

                                    "active"

                                    :

                                    ""

                            }

                            onClick={() => setMetodo("DEBITO")}

                        >

                            Débito

                        </button>

                    </div>

                    <SavedCards

                        cartoes={cartoes}

                        selecionar={setCartaoSelecionado}

                    />

                    {

                        cartaoSelecionado && (

                            <div className="selected-card">

                                <h3>

                                    Cartão selecionado

                                </h3>

                                <p>

                                    **** **** **** {" "}

                                    {

                                        cartaoSelecionado?.numero?.slice(-4)

                                    }

                                </p>

                                <small>

                                    {

                                        cartaoSelecionado?.nome

                                    }

                                </small>

                            </div>

                        )

                    }

                    {

                        metodo === "PIX" && (

                            <PixPayment

                                pix={pix}

                                confirmar={confirmarPix}

                            />

                        )

                    }

                    {

                        metodo === "CREDITO" && (

                            <CreditCardForm

                                valor={valor}

                                onSubmit={enviarCredito}

                            />

                        )

                    }

                    {

                        metodo === "DEBITO" && (

                            <DebitCardForm

                                valor={valor}

                                onSubmit={enviarDebito}

                            />

                        )

                    }

                    {

                        metodo === "PIX" && (

                            <button

                                className="btn-recarregar"

                                onClick={continuar}

                                disabled={loading}

                            >

                                {

                                    loading

                                        ?

                                        "Gerando PIX..."

                                        :

                                        "Gerar PIX"

                                }

                            </button>

                        )

                    }

                </div>

            </div>

        </div>

    );

}