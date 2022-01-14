import './App.css';
import {useEffect, useState} from "react"
import Header from './components/Header'
import ItemResults from './components/ItemResults';
import Description from './components/Description';

function App() {

  const [items, setItems] = useState([])
  const [item, setItem] = useState({})
  const [itemId, setItemId] = useState(null)
  
//fetch all items
useEffect(()=> {
  const getItems = async () => {
  const response = await fetch("https://fakestoreapi.com/products?limit=5")
  const data = await response.json()
  setItems(data)
  }
  getItems()
}, [])

//get description for single item
useEffect(()=> {
  const getItem = async(itemId)=> {
  const response = await fetch(`https://fakestoreapi.com/products/${itemId}`)
  const data = await response.json()
  setItem(data)
  }
  getItem(itemId)
},[itemId])
  

//event handler to reset item id when product button clicked
const handleClick = (e) => {
  e.preventDefault() 
  setItemId(e.target.id)
}

  return (
    <div className="App">
      <Header/>
      <div className="items-area">
        <ItemResults items={items} handleClick={handleClick}/>
        <Description item={item}/>
      </div>
    </div>
  );
}

export default App;
