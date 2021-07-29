import classes from "./About.module.css";
import Header from "../UI/Header";

import todo from "../../Assets/todolist.png";
import track from "../../Assets/tracker.png";
import cgame from "../../Assets/cardgame.png";
import mgame from "../../Assets/memorygame.png";
import htmlcss from "../../Assets/htmlcss.jpg";
import sass from "../../Assets/sass.png";
import javascript from "../../Assets/javascript.png";
import react from "../../Assets/react.png";
import nat from "../../Assets/nat.jpg";
import PFCard from "../UI/PFCard";
import { useReducer } from "react";

function toggling(state, action) {
  if (action.type === "SKILLS") {
    return { ...state, hearts: { skills: true, projects: false, languages: false } };
  }
  if (action.type === "PROJECTS") {
    return {
      heads: { aboutme: false, me: false, todolist: true, trackinglist: false, cardgame: false, memorygame: false },
      hearts: { skills: false, projects: true, number: 0, languages: false },
    };
  }
  if (action.type === "NEXT") {
    return {
      heads: { aboutme: false, me: false, todolist: false, trackinglist: true, cardgame: false, memorygame: false },
      hearts: { skills: false, projects: true, number: 1, languages: false },
    };
  }
  if (action.type === "GAME") {
    return {
      heads: { aboutme: false, me: false, todolist: false, trackinglist: false, cardgame: true, memorygame: false },
      hearts: { skills: false, projects: true, number: 2, languages: false },
    };
  }
  if (action.type === "NEXTGAME") {
    return {
      heads: { aboutme: false, me: false, todolist: false, trackinglist: false, cardgame: false, memorygame: true },
      hearts: { skills: false, projects: true, number: 3, languages: false },
    };
  }
  if (action.type === "ABOUT") {
    return {
      heads: { aboutme: true, me: false, todolist: false, trackinglist: false, cardgame: false, memorygame: false },
      hearts: { skills: false, projects: false, number: 3, languages: true },
    };
  }
  if (action.type === "ME") {
    return { ...state, heads: { aboutme: false, me: true, todolist: false, trackinglist: false, cardgame: false, memorygame: false } };
  }
}

function About(props) {
  const [parts, setParts] = useReducer(toggling, {
    hearts: { languages: true },
    heads: { aboutme: true },
  });

  function onTogglingHandler(event) {
    setParts({ type: event.target.id });
  }

  const me = (
    <>
      <h2 className={classes.headtitle}>About me</h2>
      <p className={classes.headbody}>
        I'm{" "}
        <span className={classes.link} id="ME" onClick={onTogglingHandler}>
          nathaniel morales
        </span>
        , a beginner web developer that has a passion for learning everything in programming, though this is not the degree I study in college, I'm still want to be a programmer or to do programming
        and make an amazing project in the future
      </p>
      <p className={classes.headbody1}>
        For the past three months of studying in HTML, CSS, javascript, and react and by implementing it in{" "}
        <span className={classes.link} id="PROJECTS" onClick={onTogglingHandler}>
          sample projects
        </span>
        , I can say that I'm now ready to dive into the next step by doing a real-world project and for the skills that I have,{" "}
        <span className={classes.link} id="SKILLS" onClick={onTogglingHandler}>
          this is how I rate it
        </span>
        .
      </p>
    </>
  );

  const nath = (
    <>
      <div className={classes.nath}>
        <img className={classes.profilepic} src={nat} alt="nath"></img>
        <label>Nathaniel Morales</label>
      </div>
      <span className={classes.profile}>
        <span className={classes.profilelabel}>University: </span>
        <span className={classes.profileinit}>Our Lady of Fatima University</span>
      </span>
      <span className={classes.profile}>
        <span className={classes.profilelabel}>Degree: </span>
        <span className={classes.profileinit}>Bachelor of science in civil engineering</span>
      </span>
      <span className={classes.profile}>
        <span className={classes.profilelabel}>Address: </span>
        <span className={classes.profileinit}>Sindalan, City of San Fernando, Pampanga, Philippines</span>
      </span>
      <span className={classes.profile}>
        <span className={classes.profilelabel}>birthyear: </span>
        <span className={classes.profileinit}>1996</span>
      </span>
      <button className={classes.btn} id="ABOUT" onClick={onTogglingHandler}>
        About me
      </button>
    </>
  );

  const todolist = (
    <>
      <h2 className={classes.headtitle}>Todo List</h2>
      <p className={classes.headbody}>
        This is the second project I made in this portfolio, In this project, I try to make it more complex and advance. I use more here the date API in javascript and use the useState, useReducer
        hooks of react.
      </p>
      <button className={classes.btn} id="NEXT" onClick={onTogglingHandler}>
        next project
      </button>
    </>
  );
  const tracker = (
    <>
      <h2 className={classes.headtitle}>Expense Tracker</h2>
      <p className={classes.headbody}>
        In this project I tried to make it more advance, I use here everything I know in react and javascript and practice all hooks I know. I also use little math in this project.
      </p>
      <button className={classes.btn} id="GAME" onClick={onTogglingHandler}>
        next project
      </button>
    </>
  );
  const gamecard = (
    <>
      <h2 className={classes.headtitle}>Card Game</h2>
      <p className={classes.headbody}>
        This game is the first project I made in this portfolio, I found the game on the internet when I'm searching for assets for building a game. I found that in this project, there's a lot of
        logic to be done so I code it to practice it. Though this game is not complete yet, but still playable.
      </p>
      <p className={classes.headbody1}>This i my first time building project using react and i only use useState hook.</p>
      <button className={classes.btn} id="NEXTGAME" onClick={onTogglingHandler}>
        next project
      </button>
    </>
  );
  const memorygame = (
    <>
      <h2 className={classes.headtitle}>Memory Game</h2>
      <p className={classes.headbody}> In this projects, i try to implement the dont repeat method and make an efficient code. </p>
      <button className={classes.btn} id="ABOUT" onClick={onTogglingHandler}>
        About me
      </button>
    </>
  );

  const languages = (
    <div className={classes.languages}>
      <img className={classes.img} alt="" src={htmlcss}></img>
      <img className={classes.img} alt="" src={javascript}></img>
      <img className={classes.img} alt="" src={sass}></img>
      <img className={classes.img} alt="" src={react}></img>
    </div>
  );

  const myskills = [
    { skills: "Fast Learner", rate: 90 },
    { skills: "Mathematics", rate: 90 },
    { skills: "Logic", rate: 80 },
    { skills: "Analytics", rate: 70 },
    { skills: "coding", rate: 70 },
    { skills: "design", rate: 40 },
    { skills: "graphics", rate: 30 },
  ];
  const rates = myskills.map((item) => {
    return (
      <>
        <div className={classes.skilldiv}>
          <span className={classes.skillname}>{item.skills}</span>
          <div className={classes.skilltube}>
            <div className={classes.skillfill} style={{ width: `${item.rate}%` }}>
              <div className={classes.skillrate}></div>
            </div>
          </div>
        </div>
      </>
    );
  });
  const skills = (
    <>
      <h1 className={classes.hearttitle}>Skills</h1>
      <div className={classes.heartbody}>{rates}</div>
    </>
  );

  const myprojects = [
    { name: "todolist", img: todo, link: "#github" },
    { name: "trackinglist", img: track, link: "#" },
    { name: "assasinguild", img: cgame, link: "#" },
    { name: "memorygame", img: mgame, link: "#" },
  ];
  const project = myprojects.map((item, i) => {
    return (
      <>
        {parts.hearts.number === i && (
          <div className={classes.projectdiv}>
            <PFCard src={item.img} id={item.name} link={item.link} onClick={props.onOpen}></PFCard>
          </div>
        )}
      </>
    );
  });

  const projects = (
    <>
      <h1 className={classes.hearttitle}>Projects</h1>
      <div className={classes.heartbody}>{project}</div>
    </>
  );

  return (
    <section className={classes.section}>
      <Header></Header>
      <div className={classes.about}>
        <div className={classes.sidebar}></div>
        {parts.heads.aboutme && <div className={classes.head}>{me}</div>}
        {parts.heads.me && <div className={classes.head}>{nath}</div>}
        {parts.heads.todolist && <div className={classes.head}>{todolist}</div>}
        {parts.heads.trackinglist && <div className={classes.head}>{tracker}</div>}
        {parts.heads.cardgame && <div className={classes.head}>{gamecard}</div>}
        {parts.heads.memorygame && <div className={classes.head}>{memorygame}</div>}
        {parts.hearts.skills && <div className={classes.heart}>{skills}</div>}
        {parts.hearts.languages && <div className={classes.heart}>{languages}</div>}
        {parts.hearts.projects && <div className={classes.heart}>{projects}</div>}
      </div>
    </section>
  );
}

export default About;
