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
        <ItemListContainer/>
      </main>
    </div>
  )
};

export default App;
