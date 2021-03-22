import NavBar from './components/navBar/navBar.js';
import ItemListContainer from "./components/itemListContainer"
import "./App.css"
import ItemDetailContainer from './components/itemDetailContainer/index.js';

function App() {
  return (
    <div className="App">
      <header className="header">
        <NavBar/>
      </header>
      <main>
        <ItemListContainer greeting="mensaje enviado por la prop greeting"/>
        <ItemDetailContainer/>
      </main>
    </div>
  )
};

export default App;
