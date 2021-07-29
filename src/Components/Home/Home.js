import classes from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.heading}>
        <h1 className={classes.intro}>
          Hello! i'am <div className={classes.name}> Nathaniel Morales</div>
        </h1>
        <h2 className={classes.pro}>A Programmer</h2>
        <Link to="/about">
          <button className={classes.btn}>About me</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
