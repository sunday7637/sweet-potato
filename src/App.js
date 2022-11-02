import React, { Fragment, useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";

import Header from "./Components/Layouts/Header";
import { Meals } from "./Components/Meals/Meals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler=()=>{
    setCartIsShown(true);
  }
  const hideCartHandler=()=>{
    setCartIsShown(false);
  }

  return (
    <Fragment className="App">
      {cartIsShown && <Cart onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;