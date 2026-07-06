import api from "./api";

// ============================
// Métodos disponíveis
// ============================

export async function listarMetodos() {

    const { data } = await api.get("/recharge/metodos");

    return data;

}

// ============================
// Saldo
// ============================

export async function buscarSaldo() {

    const { data } = await api.get("/recharge/saldo");

    return data;

}

// ============================
// Gerar PIX
// ============================

export async function gerarPix(valor) {

    const { data } = await api.post("/recharge/gerar-pix", {

        valor

    });

    return data;

}

// ============================
// Confirmar PIX
// ============================

export async function pagarPix(valor) {

    const { data } = await api.post("/recharge/pix", {

        valor

    });

    return data;

}

// ============================
// Cartão de Crédito
// ============================

export async function pagarCredito(dados) {

    const { data } = await api.post(

        "/recharge/credito",

        dados

    );

    return data;

}

// ============================
// Cartão de Débito
// ============================

export async function pagarDebito(dados) {

    const { data } = await api.post(

        "/recharge/debito",

        dados

    );

    return data;

}