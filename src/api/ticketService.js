import api from "./api";

/*
===========================
BILHETE
===========================
*/

export async function obterBilhete(){

    const response = await api.get("/ticket");

    return response.data;

}

/*
===========================
ALTERAR SKIN
===========================
*/

export async function alterarSkin(id){

    const response = await api.put(

        `/ticket/skin/${id}`

    );

    return response.data;

}

/*
===========================
RECARREGAR SALDO
===========================
*/

export async function recarregar(valor){

    const response = await api.post(

        "/ticket/recarregar",

        {

            valor

        }

    );

    return response.data;

}