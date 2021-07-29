import classes from "./PFLink.module.css";

function PFLink(props) {
  return (
    <div>
      <div className={classes.pfcard}>
        <img src={props.src} alt="project" className={classes.img}></img>
        <a href={props.href} target="_blank" rel="noopener noreferrer">
          <button className={classes.btn}>Visit</button>
        </a>
      </div>
      <p className={classes.something}>{props.content}</p>
    </div>
  );
}

export default PFLink;
