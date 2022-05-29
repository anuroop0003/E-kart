
import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartconstant";

export default function CartReducer(state={cartItems: []},action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {cartItems: [...state.cartItems,action.payload]};
        case REMOVE_FROM_CART:
            return {cartItems: state.cartItems.filter((item) => {if(item.id !== action.payload) return item })}
        default:
            return state
    }

}