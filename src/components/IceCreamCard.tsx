import "../style/ice_cream_card.css";
import { useState } from "react";

export default function IceCreamCard(props: {
    nameIceCream: string;
    urlImg: string;
    iceCreamStock: number;
    iceCreamSelction: number;
    iceCreamPrice: number;
    update_cart: (itemCount: number, itemPrice: number) => void;
}) {
    const [selection, setSelection] = useState(props.iceCreamSelction);
    const [stock, setStock] = useState(props.iceCreamStock);

    return (
        <>
            <div className="card">
                <h2>{props.nameIceCream}</h2>
                <img src={props.urlImg} alt="" />

                <section className="grid_design">
                    <button
                        className={stock === 0 ? "sold_out_bitton" : "to_take"}
                        onClick={() => {
                            if (stock > 0) {
                                setStock(stock - 1)
                                setSelection(selection + 1)
                                props.update_cart(1, props.iceCreamPrice)
                            }
                        }}>Take</button>
                    <button className="to_cancel" onClick={() => {
                        if (selection > 0) {
                            setStock(stock + 1)
                            setSelection(selection - 1)
                            props.update_cart(-1, props.iceCreamPrice)
                        }
                    }}>Cancel</button>
                    <p>{selection}</p>
                    <p>{stock}</p>
                    <p>PRICE {props.iceCreamPrice}</p>
                    <p
                        className={stock === 0 ? "sold_out" : "non_sold_out"}
                    >"We are sorry, but it's sold out"
                    </p>
                </section>
            </div>
        </>
    )
}