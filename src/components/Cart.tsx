import "../style/cart.css";

export default function Cart(props: { count: number, price: number }) {
    return (
        <>
            <div className="cart">
                <h1>Cart details</h1>
                <p>Items in cart - {props.count}</p>
                <p>to pay - {props.price}</p>
            </div>
        </>
    )
}