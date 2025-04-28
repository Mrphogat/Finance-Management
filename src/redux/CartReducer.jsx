import { ADD_TO_CART } from "./CartAction";
import { REMOVE_FROM_CART } from "./CartAction";
const initialstate={
    cart:[]
}
export const cartReducer = ( state=initialstate, action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return{
                ...state,
                cart:[...state.cart,action.payload]
            };
            case REMOVE_FROM_CART:
                return{
                    ...state,
                    cart:state.cart.filter((item) => item.id !== action.payload),
                }
                default:
                    return state;

    }
}