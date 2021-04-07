import NavBar from './components/navBar/navBar.js';
import ItemListContainer from "./components/itemListContainer"
import ItemDetailContainer from './components/itemDetailContainer/index.js';
import Cart from "./components/cart";
import CartContext from "./context/cartContext";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import "./App.css";

function App() {
  return (

    <BrowserRouter>
      <>
      <CartContext.Provider value="">
        <header className="header">
          <NavBar/>
        </header>
        <main className="main">
          <Switch>
            <Route exact path="/">
              <ItemListContainer/>
            </Route>
            <Route path="/category/:categoryId">
              <ItemListContainer />
            </Route>
            <Route path="/item/:itemId">
              <ItemDetailContainer/>
            </Route>
            <Route exact path="/cart">
              <Cart/>
            </Route>
            <Route path="*">
              404
            </Route>
          </Switch>
        </main>
        <footer className="footer">
          FOOTER
        </footer>
      </CartContext.Provider>
      </>
    </BrowserRouter>
    
  )
};

export default App;
