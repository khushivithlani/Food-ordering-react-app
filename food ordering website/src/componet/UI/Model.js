import { Fragment } from 'react';
import classes from './Model.module.css';
import  ReactDOM  from 'react-dom';

const Backdrop = props =>{
    return (
        <div className={classes.backdrop} onClick={props.onBackClick}></div>
    );
}
const ModelOverlay = props =>{
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
}
const ModelElement = document.getElementById('overlays');
const Model = props =>{
   return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop onBackClick = {props.onBackClick}/>, ModelElement)}
        {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>, ModelElement)}
    </Fragment>
    );
}

export default Model;