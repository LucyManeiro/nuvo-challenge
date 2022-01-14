import { Link } from "react-scroll";
import {BiChevronLeftCircle} from "react-icons/bi"
function Item({item, handleClick, selectedClass}) {

let itemName = null

//this will create the proper display name based on the item.id
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
            <div className="images item">
                <img className="image" src={item.image} alt="item"/>  
            </div>
        
           <div className="name-button item">
                <h4>{itemName}</h4>
                <Link 
                    smooth to="top"
                    activeClass="active"
                    duration={500}> 
                <BiChevronLeftCircle
                        id={item.id}
                        onClick={handleClick}
                        className="item-button"
                /> 
                </Link>
            </div>
         </>
    )
}

export default Item
