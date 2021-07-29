import { useEffect, useReducer, useRef } from "react";
import classes from "./MemoryGame.module.css";

//--------------------------------------------------------------------------------GAME IMG ASSETS
import special from "../Assets/MemoryGame/special.png";
import fantasyfront from "../Assets/MemoryGame/fantasy-front.png";
import fantasyback from "../Assets/MemoryGame/fantasy-back.png";
import fantasysword from "../Assets/MemoryGame/fantasy-sword.png";
import fantasyboot from "../Assets/MemoryGame/fantasy-boot.png";
import fantasyhand from "../Assets/MemoryGame/fantasy-hand.png";
import fantasyhead from "../Assets/MemoryGame/fantasy-head.png";
import fantasyshield from "../Assets/MemoryGame/fantasy-shield.png";
import fantasyarmor from "../Assets/MemoryGame/fantasy-armor.png";
import fantasydecoration from "../Assets/MemoryGame/fantasy-decoration.png";
import scififront from "../Assets/MemoryGame/scifi-front.png";
import scifiback from "../Assets/MemoryGame/scifi-back.png";
import scifisword from "../Assets/MemoryGame/scifi-sword.png";
import scifiboot from "../Assets/MemoryGame/scifi-boot.png";
import scifihand from "../Assets/MemoryGame/scifi-hand.png";
import scifihead from "../Assets/MemoryGame/scifi-head.png";
import scifishield from "../Assets/MemoryGame/scifi-shield.png";
import scifiarmor from "../Assets/MemoryGame/scifi-armor.png";
import scifidecoration from "../Assets/MemoryGame/scifi-decoration.png";
import vampirefront from "../Assets/MemoryGame/vampire-front.png";
import vampireback from "../Assets/MemoryGame/vampire-back.png";
import vampiresword from "../Assets/MemoryGame/vampire-sword.png";
import vampireboot from "../Assets/MemoryGame/vampire-boot.png";
import vampirehand from "../Assets/MemoryGame/vampire-hand.png";
import vampirehead from "../Assets/MemoryGame/vampire-head.png";
import vampireshield from "../Assets/MemoryGame/vampire-shield.png";
import vampirearmor from "../Assets/MemoryGame/vampire-armor.png";
import vampiredecoration from "../Assets/MemoryGame/vampire-decoration.png";
//--------------------------------------------------------------------------------GAME IMG ASSETS

function GameOperator(state, action) {
  //setting the number of pair card to be played
  if (action.type === "LEVEL") {
    const fantasysliceddeck = [fantasysword, fantasyshield, fantasyhead, fantasyhand, fantasyboot, fantasyarmor, special].slice(0, action.num);
    const scifisliceddeck = [scifisword, scifishield, scifihead, scifihand, scifiboot, scifiarmor, special].slice(0, action.num);
    const vampiresliceddeck = [vampiresword, vampireshield, vampirehead, vampirehand, vampireboot, vampirearmor, special].slice(0, action.num);
    return { ...state, fantasydeck: fantasysliceddeck, scifideck: scifisliceddeck, vampiredeck: vampiresliceddeck, ingame: true, time: action.time };
  }
  //resetting game bact to start
  if (action.type === "SHUFFLE") {
    const length = action.allcards.length;
    const nfil = Array(length).fill(0, 0, length);
    return { ...state, shuffleindex: action.shuffle, allcards: action.allcards, rotate: nfil };
  }
  //memoising card to check and to match, for later
  if (action.type === "CHECKING") {
    const update = [...state.rotate];
    update[action.index] = 180;
    return { ...state, isChecking: true, cardtocheck: action.card, rotate: update, alpha: action.index };
  }
  //matching state
  if (action.type === "MATCHING") {
    const update = [...state.rotate];
    update[action.index] = 180;
    const reuslt = state.cardtocheck === action.card;
    const debug = state.debug + 1;
    return { ...state, isChecking: false, cardtocheck: null, cardismatch: reuslt, rotate: update, omega: action.index, debug: debug };
  }
  //TO back to current state if mismatch or to rotate and stored if match
  if (action.type === "UPDATING") {
    const update = [...state.rotate];
    update[action.omega] = action.rotate;
    update[action.alpha] = action.rotate;
    return { ...state, rotate: update, time: action.time };
  }
  //setting timer
  if (action.type === "TIMER") {
    return { ...state, time: action.time };
  }
  //setting if finish or starting// determined if win of lose
  if (action.type === "RESULT") {
    return { ...state, startimg: action.startimg, ingame: false };
  }
}

function MemoryGame() {
  //initial state
  const [MemoryGame, setMemoryGame] = useReducer(GameOperator, {
    fantasydeck: [],
    scifideck: [],
    vampiredeck: [],
    allcards: [],
    shuffleindex: [],
    cardtocheck: null,
    isChecking: false,
    cardismatch: true,
    rotate: [0],
    alpha: null,
    omega: null,
    time: 70,
    ingame: false,
    debug: 1,
    startimg: " Start New Game",
  });

  //gathering all cards,/ each type {fantasy, scifi, vampire cards}
  const deck = [];
  MemoryGame.fantasydeck.forEach((item) => {
    deck.push({
      back: fantasyback,
      front: fantasyfront,
      decoration: fantasydecoration,
      fill: item,
    });
  });
  MemoryGame.scifideck.forEach((item) => {
    deck.push({
      back: scifiback,
      front: scififront,
      decoration: scifidecoration,
      fill: item,
    });
  });
  MemoryGame.vampiredeck.forEach((item) => {
    deck.push({
      back: vampireback,
      front: vampirefront,
      decoration: vampiredecoration,
      fill: item,
    });
  });

  //starting function
  //pairing cards and shuffling
  useEffect(() => {
    const allcards = [...deck, ...deck];
    const shuffle = [];
    function shufler(num) {
      return Math.trunc(Math.random() * num);
    }
    for (let i = 0; i < allcards.length; ) {
      let n = shufler(allcards.length);
      if (shuffle.includes(n)) {
        // eslint-disable-next-line
        i = i;
      }
      if (!shuffle.includes(n)) {
        shuffle.push(n);
        i++;
      }
    }
    setMemoryGame({ type: "SHUFFLE", shuffle: shuffle, allcards: allcards });
    // eslint-disable-next-line
  }, [MemoryGame.fantasydeck, MemoryGame.scifideck, MemoryGame.vampiredeck]);

  //function to call after match state
  //to rotate 180deg if match and o return if mismatch
  //to add 5 sec more if match
  useEffect(() => {
    const alpa = MemoryGame.alpha;
    const omega = MemoryGame.omega;
    const rotate = MemoryGame.cardismatch ? 180 : 0;
    const time = MemoryGame.cardismatch ? MemoryGame.time + 5 : MemoryGame.time;
    setTimeout(() => {
      setMemoryGame({ type: "UPDATING", alpha: alpa, omega: omega, rotate: rotate, time: time });
      if (!MemoryGame.rotate.includes(0)) setMemoryGame({ type: "RESULT", startimg: "VICTORY" });
    }, 700);
    // eslint-disable-next-line
  }, [MemoryGame.debug]);

  //setting time remaining and update
  useEffect(() => {
    let time = MemoryGame.time;
    const timer = setInterval(() => {
      setMemoryGame({ type: "TIMER", time: time-- });
    }, 500);
    if (time === 0) {
      setMemoryGame({ type: "RESULT", startimg: "YOU LOSE" });
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [MemoryGame.time]);

  function onOpenHandler(event) {
    const card = event.target.parentElement.parentElement.firstChild.children[1].src;
    const index = event.target.parentElement.parentElement.id;
    MemoryGame.isChecking ? setMemoryGame({ type: "MATCHING", card: card, index: index }) : setMemoryGame({ type: "CHECKING", card: card, index: index });
  }

  //laying the shuffled cards
  //render the result
  const cards = MemoryGame.shuffleindex.map((item, i) => {
    const rotate = MemoryGame.rotate[i];
    const card = MemoryGame.allcards[item];
    const handler = rotate === 180 ? null : onOpenHandler;
    return (
      <>
        <div className={classes.card} id={i} onClick={handler}>
          <div className={`${classes.cardfront} ${classes.cardface}`} style={{ transform: `rotateY(${180 - rotate}deg)` }}>
            <img alt="" className={classes.empty} src={card.front}></img>
            <img alt="" src={card.fill} className={`${classes.center} ${classes.fill}`}></img>
            <img alt="" src={card.decoration} className={`${classes.topleft} ${classes.fill}`}></img>
            <img alt="" src={card.decoration} className={`${classes.topright} ${classes.fill}`}></img>
            <img alt="" src={card.decoration} className={`${classes.bottomleft} ${classes.fill}`}></img>
            <img alt="" src={card.decoration} className={`${classes.bottomright} ${classes.fill}`}></img>
          </div>
          <div className={`${classes.cardback} ${classes.cardface}`} style={{ transform: `rotateY(${0 - rotate}deg)` }}>
            <img alt="" src={card.back} className={classes.empty}></img>
          </div>
        </div>
      </>
    );
  });

  const level = useRef();
  function onStartNewGameHandler() {
    const time = level.current.value * 10;
    setMemoryGame({ type: "LEVEL", num: level.current.value, time: time });
  }

  const starting = (
    <div className={classes.starting}>
      <span className={classes.results}>{MemoryGame.startimg}</span>
      <span className={classes.level}>Enter Level</span>
      <input type="number" max={7} min={1} defaultValue={7} ref={level} className={classes.input}></input>
      <button className={classes.btn} onClick={onStartNewGameHandler}>
        START
      </button>
    </div>
  );

  return (
    <div className={classes.memorygame}>
      {MemoryGame.ingame && <div className={classes.time}>REMAINING TIME: {MemoryGame.time}</div>}
      <div className={classes.table}>{cards}</div>
      {!MemoryGame.ingame && starting}
    </div>
  );
}

export default MemoryGame;
