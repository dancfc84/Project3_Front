import React, { Fragment } from 'react'
import classes from "./Modal.module.css"
import ReactDOM from "react-dom"



const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />; // onClose is in the App.js file
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        {props.children}
      </div>
    </div>
  );
};

//create the backdrop and the overlay components in this file,  seperated out into the overlay div in index.html using react.createPortal
//Modal/Overlay is when you select something that takes over the whole screen, like the checkout



const Modal = (props) => {
  return <Fragment>
    {/* 
    {ReactDOM.createPortal(
      <Backdrop onClose={props.onClose} />,
      document.getElementById("overlays")
    )}

    {ReactDOM.createPortal(
      <ModalOverlay>{props.children}</ModalOverlay>,
      document.getElementById("overlays")
    )} */}
  </Fragment>
}



export default Modal;