import classes from "./PFCard.module.css";
import github from "../../Assets/github.png";

function PFCard(props) {
  return (
    <div>
      <div className={classes.pfcard}>
        <img src={props.src} alt="project" className={classes.img}></img>
        <button onClick={props.onClick} id={props.id} className={classes.btn}>
          Open?
        </button>
      </div>
      <div className={classes.link}>
        <img src={github} alt="github" className={classes.imgicon}></img>
        <a href={props.link} className={classes.anchor}>
          Review my code? on github
        </a>
      </div>
    </div>
  );
}

export default PFCard;
