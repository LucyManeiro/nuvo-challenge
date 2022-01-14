import './App.css';
import {useEffect, useState} from "react"
import Header from './components/layout/Header'
import ItemResults from './components/layout/ItemResults';
import Description from './components/layout/Description';

function App() {
  const [items, setItems] = useState([])
  const [item, setItem] = useState({})
  const [itemId, setItemId] = useState(null)
  const [starRating, setStarRating] = useState(0)
  
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
  const getDescription = async(id)=> {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  const data = await response.json()
  setItem(data)
  setStarRating(data.rating.rate)
  }
  getDescription(itemId)
},[itemId])
  
//event handler to reset item id when product button clicked
const handleClick = (e) => {
  e.preventDefault() 
  setItemId(e.target.id)
}

  return (
    <div className="App container">
      <Header/>
      <div className="items-area">
        <ItemResults items={items} handleClick={handleClick}/>
        <Description item={item} starRating={starRating}/>
      </div>
    </div>
  );
}

export default App;
