import './App.css';
import Header from './components/layout/Header'
import ItemResults from './components/layout/ItemResults';
import {ItemsProvider} from "./context/ItemsContext"

function App() {
  return (
    <ItemsProvider>
    <div className="App container">
      <Header/>
      <ItemResults/>
    </div>
    </ItemsProvider>
  );
}

export default App;
