import classes from "./PFPage.module.css";
import reactDom from "react-dom";

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
}

function Overlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
      <button className={classes.btn} onClick={props.onClose}>
        CLOSE
      </button>
    </div>
  );
}

const portalElement = document.getElementById("overlays");

function PFPage(props) {
  return (
    <>
      {reactDom.createPortal(<Backdrop onClose={props.onClose}></Backdrop>, portalElement)}
      {reactDom.createPortal(<Overlay onClose={props.onClose}>{props.children}</Overlay>, portalElement)}
    </>
  );
}

export default PFPage;
