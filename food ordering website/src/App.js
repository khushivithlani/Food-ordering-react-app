import { Fragment, useState } from "react";
import Cart from "./componet/carts/Cart";
import Header from "./componet/Layout/Header";
import Meals from "./componet/Meals/Meals";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true);
  }

  const hideCartHandler = () =>{
    setCartIsShown(false);
  }
  return (
    <CartProvider>
          {cartIsShown && <Cart onClose = {hideCartHandler}/>}
      <Header onShowCart = {showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
