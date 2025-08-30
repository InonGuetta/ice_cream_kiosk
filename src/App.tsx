import { useState } from 'react'
import IceCreamCard from './components/IceCreamCard.tsx';
import './App.css'
import Header from './components/Header.tsx';
import Cart from './components/Cart.tsx';

function App() {
  const [cart, setCart] = useState({ count: 0, price: 0 });
  const taste = ["Vanilla", "Chocolate", "Lemon", "Orange", "Gum"];
  const images = ["../src/assets/pictures/vanilla.jpg", "../src/assets/pictures/Chocolate.jpg", "../src/assets/pictures/Lemon.webp", "../src/assets/pictures/orange2.jpg", "../src/assets/pictures/gum.webp"];
  const counts = [10, 17, 30, 8, 25];
  const price = [12, 8, 7, 6, 9];

  const update_cart = (itemCount: number, itemPrice: number) => {
    setCart(item => ({
      count: item.count + itemCount,
      price: item.price + itemCount * itemPrice
    }))
    ;
  }
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        {(() => {
          const iceCreamCards = [];
          for (let i = 0; i < taste.length; i++) {
            iceCreamCards.push(
              <IceCreamCard
                nameIceCream={taste[i]}
                urlImg={images[i]}
                iceCreamStock={counts[i]}
                iceCreamPrice={price[i]}
                iceCreamSelction={0}
                update_cart={update_cart}
              />
            );
          }
          return iceCreamCards;
        })()}

      </main>
      <Cart count={cart.count} price={cart.price} />
    </>
  );
}

export default App
