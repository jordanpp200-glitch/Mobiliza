import api from "./api";

/*
===========================
USUÁRIO
===========================
*/

export async function perfil(){

    const response = await api.get(

        "/usuarios/perfil"

    );

    return response.data;

}

/*
===========================
ATUALIZAR
===========================
*/

export async function atualizarPerfil(dados){

    const response = await api.put(

        "/usuarios",

        dados

    );

    return response.data;

}