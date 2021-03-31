import NavBar from './components/navBar/navBar.js';
import ItemListContainer from "./components/itemListContainer"
import ItemDetailContainer from './components/itemDetailContainer/index.js';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import "./App.css";

function App() {
  return (

    <BrowserRouter>
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
            <Route path="*">
              404
            </Route>
          </Switch>
        </main>
        <footer className="footer">
          FOOTER
        </footer>
      </>
    </BrowserRouter>
    
  )
};

export default App;
