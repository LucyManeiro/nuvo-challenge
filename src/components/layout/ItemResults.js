import Item from "../Item"
//import ItemsContext from "../../context/ItemsContext"

function ItemResults({items, handleClick}) {
    
return (
         <div className="item-list">
            {items.map((item)=> (
                <Item key={item.id} item={item} handleClick={handleClick}/>
            ))}
        </div>
    )
}

export default ItemResults
