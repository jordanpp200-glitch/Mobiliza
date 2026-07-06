import api from "./api";

/*
===========================
REALIZAR COMPRA
===========================
*/

export async function realizarCompra(dados){

    const response = await api.post(

        "/compras",

        dados

    );

    return response.data;

}

/*
===========================
HISTÓRICO
===========================
*/

export async function listarCompras(){

    const response = await api.get("/compras");

    return response.data;

}