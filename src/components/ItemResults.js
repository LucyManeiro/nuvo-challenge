import Item from "./Item"

function ItemResults({items, handleClick}) {
    
//component will map through items to create each item on the left
return (
    <div className="group">
         <div className="item-list item">
            {items.map((item)=> (
                <Item key={item.id} item={item} handleClick={handleClick}/>
            ))}
        </div>
    </div>
    )
}

export default ItemResults
