import api from "./api";

export async function buscarBilhete() {

    const { data } = await api.get("/bilhete");

    return data;

}