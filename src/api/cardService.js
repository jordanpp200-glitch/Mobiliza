import api from "./api";

export async function listarCartoes(){

    const {data}=await api.get("/cards");

    return data;

}

export async function salvarCartao(cartao){

    const {data}=await api.post("/cards",cartao);

    return data;

}

export async function excluirCartao(id){

    const {data}=await api.delete(`/cards/${id}`);

    return data;

}