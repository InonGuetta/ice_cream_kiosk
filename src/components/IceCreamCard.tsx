import "../style/ice_cream_card.css";

import { useState } from "react";


export default function IceCreamCard(props: {
    nameIceCream: string;
    urlImg: string;
    iceCreamStock: number;
    iceCreamSelction: number;
}) {
    const [selection, setSelection] = useState(props.iceCreamSelction);
    const [stock, setStock] = useState(props.iceCreamStock);

    return (
        <>
            <div className="card">
                <h2>{props.nameIceCream}</h2>
                <img src={props.urlImg} alt="" />
                <button onClick={() => {
                    if (stock > 0) {
                        setStock(stock - 1)
                        setSelection(selection + 1)
                    }
                }}>Take</button>
                <button onClick={() => {
                    if (selection > 0) {
                        setStock(stock + 1)
                        setSelection(selection - 1)
                    }
                }}>Cancel</button>
                <p>{stock}</p>
                <p>{selection}</p>
            </div>
        </>
    )
}