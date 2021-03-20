import NavBar from './components/navBar/navBar.js';
import ItemListContainer from "./components/itemListContainer"
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="header">
        <NavBar/>
      </header>
      <main>
        <ItemListContainer greeting="mensaje enviado por la prop greeting"/>
      </main>
    </div>
  )
};

export default App;
