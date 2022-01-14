
function Item({item, handleClick}) {

let itemName = null

    if(item){
        switch(item.id){
            case 1: 
            itemName="Backpack"
            break;
            case 2: 
            itemName="Slim-Fit T-Shirts"
            break;
            case 3: 
            itemName="Cotton Jacket"
            break;
            case 4: 
            itemName="Men's Slim Fit"
            break;
            case 5: 
            itemName="Women's Bracelet"
            break
            default:
            itemName="Item name not available"
            break;
        }
    }
    return (
        <>
        <div className="image-section">
            <img className="image" src={item.image} alt="item"/>  
        </div>
        <div className="name-button">
                <h3>{itemName}</h3>
                <button
                id={item.id}
                onClick={handleClick}
                 className="item-button">Click</button>
        </div>
         
        </>
    )
}

export default Item
