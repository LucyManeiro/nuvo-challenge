const itemsReducer = (state, action) => {

    switch(action.type){
        case "GET_ITEMS":
            return{
                ...state,
                items: action.payload,
            }
            
        case "SELECT_ITEM":
            return {
                ...state, 
                item: action.payload
            }
        default: 
            return state
    }
}

export default itemsReducer