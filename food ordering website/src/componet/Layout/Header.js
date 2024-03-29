import { Fragment } from "react";
import MealImage from "../../Assest/meals.jpg"
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";
const Header = props =>{
    return (
        <Fragment >
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCardButton onClick = {props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={MealImage}/>
            </div>
        </Fragment>
    );

}

export default Header;