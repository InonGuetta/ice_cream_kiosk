import { useState } from 'react'
import IceCreamCard from './components/IceCreamCard.tsx';
import './App.css'
import Header from './components/Header.tsx';

function App() {
  const [count, setCount] = useState(0)

  const taste = ["Vanilla", "Chocolate", "Lemon", "Orange", "Gum"]
  const images = ["../src/assets/pictures/vanilla.jpg", "../src/assets/pictures/Chocolate.jpg", "../src/assets/pictures/Lemon.webp", "../src/assets/pictures/orange2.jpg", "../src/assets/pictures/gum.webp"]


  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        {(() => {
          const iceCreamCards = [];
          for (let i = 0; i < taste.length; i++) {
            iceCreamCards.push(
              <IceCreamCard
                nameIceCream={taste[i]}
                urlImg={images[i]}
                iceCreamStock={50}
                iceCreamSelction={0}
              />
            );
          }
          return iceCreamCards;
        })()}
      </main>
    </>
  )
}

export default App
