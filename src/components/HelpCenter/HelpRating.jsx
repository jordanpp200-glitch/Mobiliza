import { useState } from "react";
import "./HelpCenter.css";

const emojis = [

    { emoji:"😡", texto:"Muito Ruim" },
    { emoji:"😠", texto:"Ruim" },
    { emoji:"😞", texto:"Pouco útil" },
    { emoji:"😕", texto:"Confuso" },
    { emoji:"😐", texto:"Neutro" },
    { emoji:"🙂", texto:"Bom" },
    { emoji:"😊", texto:"Muito Bom" },
    { emoji:"😁", texto:"Excelente" },
    { emoji:"🤩", texto:"Incrível" },
    { emoji:"🚀", texto:"Perfeito" }

];

export default function HelpRating(){

    const [votado,setVotado]=useState(false);

    const [emojiSelecionado,setEmojiSelecionado]=useState(null);

    function votar(item){

        setEmojiSelecionado(item);

        setVotado(true);

    }

    return(

        <>

            <div className="help-rating">

                {

                    emojis.map((item,index)=>(

                        <button

                            key={index}

                            className={`emoji-button ${
                                emojiSelecionado===item.emoji
                                ? "ativo"
                                : ""
                            }`}

                            onClick={()=>votar(item.emoji)}

                        >

                            <span>{item.emoji}</span>

                            <small>{item.texto}</small>

                        </button>

                    ))

                }

            </div>

            {

                votado &&

                <div className="help-success">

                    💚 Obrigado pela sua avaliação.

                    Sua opinião ajuda a melhorar nossa Central de Ajuda.

                </div>

            }

        </>

    );

}