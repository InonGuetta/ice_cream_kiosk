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
                
                <section className="grid_design">
                <button className="to_take" onClick={() => {
                    if (stock > 0) {
                        setStock(stock - 1)
                        setSelection(selection + 1)
                    }
                }}>Take</button>
                <button className="to_cancel" onClick={() => {
                    if (selection > 0) {
                        setStock(stock + 1)
                        setSelection(selection - 1)
                    }
                }}>Cancel</button>
                <p>{selection}</p>
                <p>{stock}</p>
                </section>
            </div>
        </>
    )
}