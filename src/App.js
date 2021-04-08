import NavBar from './components/navBar/navBar.js';
import ItemListContainer from "./components/itemListContainer"
import ItemDetailContainer from './components/itemDetailContainer/index.js';
import Cart from "./components/cart";
import {CartProvider} from './context/CartContext';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import "./App.css";

function App() {
  return (

    <BrowserRouter>
      <CartProvider>
      <>
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
      </>
      </CartProvider>
    </BrowserRouter>
    
  )
};

export default App;
