import {createContext, useReducer} from "react"
import itemsReducer from "./ItemsReducer"

const ItemsContext = createContext()

export const ItemsProvider = ({children}) => {
    const initialState = {
        items: [], 
        item: {}
    }

    const [state, dispatch] = useReducer(itemsReducer, initialState)

    //fetch items
    const getItems = async () => {
        const response = await fetch("https://fakestoreapi.com/products?limit=5")
        const data = await response.json()
        dispatch({
            type: "GET_ITEMS",
            payload: data,
        })
      }

     //choose a single item
      const selectItem = async(id) => {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`)
          const item = await response.json()

          dispatch({
              type: "SELECT_ITEM",
              payload: item
          })
      }

    return <ItemsContext.Provider value={{
        items: state.items, 
        getItems, 
        selectItem

    }}>
        {children}
    </ItemsContext.Provider>
}

export default ItemsContext