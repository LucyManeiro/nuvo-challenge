import {useContext, useEffect, useState} from "react"
import Description from "../Description"
import Item from "../Item"
import ItemsContext from "../../context/ItemsContext"

function ItemResults() {
    const {items, getItems} = useContext(ItemsContext)
    const [productId, setProductId] = useState(null)
    
    useEffect(()=> {
      getItems()
    }, [])

    const handleClick = (e) => {
        e.preventDefault() 
        setProductId(e.target.id)
        // getDescription(e.target.id)
    }

   
    return (
        <>
        <div className="items-area">
         <div className="item-list">
            {items.map((item)=> (
                <Item key={item.id} item={item} handleClick={handleClick}/>
            ))}
        </div>
        <div className="description">
                <Description id={productId}/>
        </div>
        </div>
        
        </>
    )
}

export default ItemResults
