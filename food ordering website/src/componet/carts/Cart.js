import Model from '../UI/Model';
import classes from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = props =>{
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItem = totalAmount>0;
    const cartItemRemoveHandler = id =>{
        cartCtx.removeItem(id);

    }
    const cartItemAddHandler = item =>{
        cartCtx.addItem({...item ,amount:1});

    }

    const cartItem = (
        <ul className= { classes['cart-items']}>
        {cartCtx.items.map((item) =>(
            <CartItem key={item.id} name = {item.name} amount={item.amount} price = {item.price} 
             onRemove={cartItemRemoveHandler.bind(null, item.id)}
             onAdd = {cartItemAddHandler.bind(null, item)}/>
        ))}
    
        </ul>
    );
    return (
        <Model onBackClick={props.onClose}>
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>

            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
              { hasItem &&  <button className={classes.button}>Order</button>}
            </div>
        </Model>    
    );

}

export default Cart;