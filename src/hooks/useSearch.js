import { useMemo } from "react";

export default function useSearch(faqData, pesquisa) {

    const resultados = useMemo(() => {

        if (!pesquisa.trim()) return faqData;

        const texto = pesquisa.toLowerCase();

        return faqData.filter((item) => {

            return (

                item.pergunta.toLowerCase().includes(texto) ||

                item.categoria.toLowerCase().includes(texto) ||

                item.palavras.some((palavra) =>
                    palavra.toLowerCase().includes(texto)
                )

            );

        });

    }, [faqData, pesquisa]);

    return resultados;

}