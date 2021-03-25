import NavBar from './components/navBar/navBar.js';
import ItemListContainer from "./components/itemListContainer"
import ItemDetailContainer from './components/itemDetailContainer/index.js';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import "./App.css";

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <header className="header">
          <NavBar/>
        </header>
        <main>
          <Switch>
            <Route path="/category/:categoryId">
              <ItemListContainer greeting="mensaje enviado por la prop greeting"/>
            </Route>
            <Route path="/item/:itemId">
              <ItemDetailContainer/>
            </Route>
            <Route path="*">
              404
            </Route>

          </Switch>
        </main>
      </div>
    </BrowserRouter>
    
  )
};

export default App;
