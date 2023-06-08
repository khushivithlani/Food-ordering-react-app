import { useContext, useEffect, useState } from 'react';
import classes from './HeaderCardButton.module.css';
import {BsFillCartFill} from 'react-icons/bs'
import CartContext from '../../store/cart-context';
const HeaderCardButton = props =>{
    const [btnIsHighlighted, setBtnIsHiglighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const {items } = cartCtx;
    const numberOfCartItem = items.reduce((curNumber, item)=>{
        return curNumber+ item.amount;
    }, 0);
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(()=>{
        if(items.length === 0){
            return;
        }
        setBtnIsHiglighted(true);
       const  timer = setTimeout(()=>{
            setBtnIsHiglighted(false);
        }, 300);
            return () =>{
                clearTimeout(timer);
            };

    }, [items])
    return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}><BsFillCartFill/></span>
        <span >Your Cart</span>
        <span className={classes.badge }>{numberOfCartItem}</span>
    </button>
    );
}

export default HeaderCardButton;