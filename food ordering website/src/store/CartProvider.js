//import { act } from "react-dom/test-utils";
import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) =>{
    if(action.type === 'ADD'){
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex((item)=> item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updateCartItem;

        if(existingCartItem){
            const updateItem ={
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updateCartItem = [...state.items];
            updateCartItem[existingCartItemIndex] = updateItem;

        }else{

            updateCartItem = state.items.concat(action.item);
        }

        return{
            items: updateCartItem,
            totalAmount: updateTotalAmount
        }
    }
    if(action.type === 'REMOVE'){
        const existingCartItemIndex = state.items.findIndex((item)=> item.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];
        const updateTotalAmount = state.totalAmount - existingCartItem.price;
        let updateCartItem;
        if(existingCartItem.amount === 1){
            updateCartItem = state.items.filter(item => item.id !== action.id);
        }else{
            const updateItem = {...existingCartItem, amount:existingCartItem.amount-1};
            updateCartItem =[... state.items];
            updateCartItem[existingCartItemIndex] = updateItem;
        }
        return{
            items: updateCartItem,
            totalAmount: updateTotalAmount
        }

    }
return defaultCartState
}
const CartProvider = (props) =>{
    const [cartState, dispach] = useReducer(cartReducer, defaultCartState);
    const addItemTocartHandler = item =>{
          dispach({type: 'ADD', item:item});
        

    };
    const removeItemHandler = id =>{
        dispach({type:'REMOVE', id:id});

    }
 
    const cartContext ={
        items:cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemTocartHandler,
        removeItem: removeItemHandler
    }
return <CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>}

export default CartProvider;