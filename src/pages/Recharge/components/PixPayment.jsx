export default function PixPayment({

    pix,

    confirmar

}){

    if(!pix){

        return null;

    }

    return(

        <div className="pix-card">

            <h2>

                Pagamento via PIX

            </h2>

            <img

                src="/images/qrcode.png"

                alt="QR Code"

            />

            <textarea

                readOnly

                value={pix.copiaCola}

            />

            <button

                onClick={confirmar}

            >

                Confirmar pagamento

            </button>

        </div>

    );

}