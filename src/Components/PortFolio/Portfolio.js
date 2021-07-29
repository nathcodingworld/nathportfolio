import { useReducer } from "react";

import classes from "./Portfolio.module.css";
import PFCard from "../UI/PFCard";
import Header from "../UI/Header";
import PFLink from "../UI/PFLink";

import todo from "../../Assets/todolist.png";
import track from "../../Assets/tracker.png";
import cgame from "../../Assets/cardgame.png";
import mgame from "../../Assets/memorygame.png";
import natour from "../../Assets/natour.png";
import forkify from "../../Assets/forkify.png";
import mapty from "../../Assets/mapty.png";
import foodproject from "../../Assets/foodproject.png";

const fromtutorial = [
  {
    name: "natour",
    img: natour,
    link: "https://nathaniel-natour.netlify.app/",
    content: "Natours is an HTML and CSS only website design by jonas schmedtmann an instructor on udemy, I found his course on youtube teaching CSS and HTML, I code with him and create this project",
  },
  {
    name: "forkify",
    img: forkify,
    link: "https://nathaniel-forkify.netlify.app/",
    content:
      "Forkify is designed by jonas schmedtmann created for his javascript course, he put all the javascript he teaches in this project. I code with him and practice javascript classes, modules, async-await, and more",
  },
  {
    name: "foodproject",
    img: foodproject,
    link: "https://nathaniel-foodproject.firebaseapp.com",
    content: "FoodProject is a react app design by Maximilian Schwarzmüller for his course, I learned and practice here in this project props, hooks, the JSX, and more",
  },
  {
    name: "mapty",
    img: mapty,
    link: "https://nathaniel-mapty.netlify.app/",
    content:
      "mapty is another app design by jonas schmedtmann for his javascript course. in this project, I practice function, arrays, and object-oriented programming. I also practice to use third-party libraries in this project.",
  },
];

const fromproject = [
  { name: "todolist", img: todo, link: "#github" },
  { name: "trackinglist", img: track, link: "#" },
  { name: "assasinguild", img: cgame, link: "#" },
  { name: "memorygame", img: mgame, link: "#" },
];

const item = {
  all: false,
  games: false,
  projects: false,
  tutorials: false,
};

function setItem(state, action) {
  if (action.type === "All") {
    return { fromTutorial: [...fromtutorial], fromProject: [...fromproject], item: { ...item, all: true }, design: 0 };
  }
  if (action.type === "Games") {
    const games = fromproject.slice(2, 4);
    return { fromTutorial: [], fromProject: [...games], item: { ...item, games: true }, design: 25 };
  }
  if (action.type === "Projects") {
    return { fromTutorial: [], fromProject: [...fromproject], item: { ...item, projects: true }, design: 50 };
  }
  if (action.type === "From Tutorials") {
    return { fromTutorial: [...fromtutorial], fromProject: [], item: { ...item, tutorials: true }, design: 75 };
  }
}

function Portfolio(props) {
  const [itemList, setItemList] = useReducer(setItem, { fromTutorial: [...fromtutorial], fromProject: [...fromproject], item: { ...item }, design: 0 });

  const projects = itemList.fromProject.map((item, i) => {
    return (
      <div className={classes.foranimation}>
        <PFCard src={item.img} id={item.name} link={item.link} onClick={props.onOpen} key={item.name + i}></PFCard>
      </div>
    );
  });

  const tutorials = itemList.fromTutorial.map((item, i) => {
    return (
      <div className={classes.foranimation}>
        <PFLink src={item.img} href={item.link} content={item.content} key={item.name + i}></PFLink>
      </div>
    );
  });

  function onSettingItemHandler(event) {
    event.preventDefault();
    setItemList({ type: event.target.innerText });
  }

  const button = ["All", "Games", "Projects", "From Tutorials"].map((item) => {
    return (
      <button className={classes.portbtn} onClick={onSettingItemHandler} key={item}>
        {item}
      </button>
    );
  });

  return (
    <section className={classes.section}>
      <Header></Header>
      <div className={classes.portfolio}>
        <header className={classes.porthead}>{button}</header>
        <div className={classes.design} style={{ marginLeft: `${itemList.design}%` }}>
          <div className={classes.topline}></div>
        </div>
        <div className={classes.projects}>
          {projects}
          {tutorials}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
