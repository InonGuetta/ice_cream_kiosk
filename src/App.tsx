import { useState } from 'react'
import IceCreamCard from './components/IceCreamCard.tsx';
import './App.css'
import Header from './components/Header.tsx';
import Cart from './components/Cart.tsx';

function App() {
  const [cart, setCart] = useState({ count: 0, price: 0 });
  const taste = ["Vanilla", "Chocolate", "Lemon", "Orange", "Gum"];
  const images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgQRsDOA31lHD3K8QKo-_WPt8lJikShx_Spw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYpjFvFAPz6AEugjS2teKD976mJm7du6q4lw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mZkJ6RYeeBtdceJT4EbI_O5unqNIp6HpJw&s",
    "https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/bltbe582204aeeff242/66707b1b10fde34db2a4a164/facts-about-oranges-1200x675-1.jpg?q=70&width=3840&auto=webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Bl7Ubt_A99D2doHf2-rJ8xzp3ncsWdhwgA&s"];
  const counts = [10, 17, 30, 8, 25];
  const price = [12, 8, 7, 6, 9];

  const update_cart = (itemCount: number, itemPrice: number) => {
    setCart(item => ({
      count: item.count + itemCount,
      price: item.price + itemCount * itemPrice
    }));
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

export default App;
