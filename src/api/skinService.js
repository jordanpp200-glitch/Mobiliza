import api from "./api";

/*
===========================
LISTAR TODAS AS SKINS
===========================
*/
export async function listarSkins() {
    const response = await api.get("/skins");
    return response.data;
}

/*
===========================
MINHAS SKINS
===========================
*/
export async function listarMinhasSkins() {
    const response = await api.get("/skins/mine");
    return response.data;
}

/*
===========================
BUSCAR POR ID
===========================
*/
export async function buscarSkin(id) {
    const response = await api.get(`/skins/${id}`);
    return response.data;
}

/*
===========================
COMPRAR
===========================
*/
export async function comprarSkin(id) {
    const response = await api.post(`/skins/${id}/comprar`);
    return response.data;
}

/*
===========================
EQUIPAR
===========================
*/
export async function equiparSkin(id) {
    const response = await api.put(`/skins/${id}/equipar`);
    return response.data;
}