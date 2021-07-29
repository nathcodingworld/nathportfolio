import { useState } from "react";

import classes from "./AssasinGuild.module.css";
//---------------------------------------------------------------------------------GAME ASSETS
import smoke from "../Assets/smoke.gif";
import eviserate from "../Assets/assasins-guild/eviserate-back.png";
import sikopath from "../Assets/assasins-guild/sikopath-back.png";
import hughrnext from "../Assets/assasins-guild/hughrnext-back.png";
import jennyside from "../Assets/assasins-guild/jennyside-back.png";
import anniemosity from "../Assets/assasins-guild/anniemosity-back.png";
import yufanasia from "../Assets/assasins-guild/yufanasia-back.png";
import evigun from "../Assets/assasins-guild/eviserate-tqw-front.png";
import evidagger from "../Assets/assasins-guild/eviserate-sam-front.png";
import evipoison from "../Assets/assasins-guild/eviserate-aij-front.png";
import eviaccident from "../Assets/assasins-guild/eviserate-aaa-front.png";
import jengun from "../Assets/assasins-guild/jennyside-tqw-front.png";
import jendagger from "../Assets/assasins-guild/jennyside-sam-front.png";
import jenpoison from "../Assets/assasins-guild/jennyside-aij-front.png";
import jenaccident from "../Assets/assasins-guild/jennyside-aaa-front.png";
import anngun from "../Assets/assasins-guild/anniemosity-tqw-front.png";
import anndagger from "../Assets/assasins-guild/anniemosity-sam-front.png";
import annpoison from "../Assets/assasins-guild/anniemosity-aij-front.png";
import annaccident from "../Assets/assasins-guild/anniemosity-aaa-front.png";
import sikgun from "../Assets/assasins-guild/sikopath-tqw-front.png";
import sikdagger from "../Assets/assasins-guild/sikopath-sam-front.png";
import sikpoison from "../Assets/assasins-guild/sikopath-aij-front.png";
import sikaccident from "../Assets/assasins-guild/sikopath-aaa-front.png";
import yufgun from "../Assets/assasins-guild/yufanasia-tqw-front.png";
import yufdagger from "../Assets/assasins-guild/yufanasia-sam-front.png";
import yufpoison from "../Assets/assasins-guild/yufanasia-aij-front.png";
import yufaccident from "../Assets/assasins-guild/yufanasia-aaa-front.png";
import huggun from "../Assets/assasins-guild/hughrnext-tqw-front.png";
import hugdagger from "../Assets/assasins-guild/hughrnext-sam-front.png";
import hugpoison from "../Assets/assasins-guild/hughrnext-aij-front.png";
import hugaccident from "../Assets/assasins-guild/hughrnext-aaa-front.png";
import vigilante from "../Assets/assasins-guild/marks-vigilante-front.png";
import businessman from "../Assets/assasins-guild/marks-businessman-front.png";
import armyofficer from "../Assets/assasins-guild/marks-armyofficer-front.png";
import politician from "../Assets/assasins-guild/marks-politician-front.png";
import thief from "../Assets/assasins-guild/marks-thief-front.png";
import scientist from "../Assets/assasins-guild/marks-scientist-front.png";
import clergyman from "../Assets/assasins-guild/marks-clergyman-front.png";
import gangster from "../Assets/assasins-guild/marks-gangster-front.png";
import marksback from "../Assets/assasins-guild/marks-back.png";
import bounty1 from "../Assets/assasins-guild/bounties1-front.png";
import bounty2 from "../Assets/assasins-guild/bounties2-front.png";
import bounty3 from "../Assets/assasins-guild/bounties3-front.png";
import bounty4 from "../Assets/assasins-guild/bounties4-front.png";
import bounty5 from "../Assets/assasins-guild/bounties5-front.png";
import bounty6 from "../Assets/assasins-guild/bounties6-front.png";
import bounty7 from "../Assets/assasins-guild/bounties7-front.png";
import bounty8 from "../Assets/assasins-guild/bounties8-front.png";
import bounty9 from "../Assets/assasins-guild/bounties9-front.png";
import bounty10 from "../Assets/assasins-guild/bounties10-front.png";
import bounty11 from "../Assets/assasins-guild/bounties11-front.png";
import bounty12 from "../Assets/assasins-guild/bounties12-front.png";
import bounty13 from "../Assets/assasins-guild/bounties13-front.png";
import bounty14 from "../Assets/assasins-guild/bounties14-front.png";
import bounty15 from "../Assets/assasins-guild/bounties15-front.png";
import bounty16 from "../Assets/assasins-guild/bounties16-front.png";
import bounty17 from "../Assets/assasins-guild/bounties17-front.png";
import bounty18 from "../Assets/assasins-guild/bounties18-front.png";
import bounty19 from "../Assets/assasins-guild/bounties19-front.png";
import bounty20 from "../Assets/assasins-guild/bounties20-front.png";
import bounty21 from "../Assets/assasins-guild/bounties21-front.png";
import bounty22 from "../Assets/assasins-guild/bounties22-front.png";
import bounty23 from "../Assets/assasins-guild/bounties23-front.png";
import bounty24 from "../Assets/assasins-guild/bounties24-front.png";
import bountyback from "../Assets/assasins-guild/bounties-back.png";
import evicon from "../Assets/assasins-guild/eviserate-icon.png";
import jencon from "../Assets/assasins-guild/jennyside-icon.png";
import anncon from "../Assets/assasins-guild/anniemosity-icon.png";
import sikcon from "../Assets/assasins-guild/sikopath-icon.png";
import hugcon from "../Assets/assasins-guild/hughrnext-icon.png";
import yufcon from "../Assets/assasins-guild/yufanasia-icon.png";
import police from "../Assets/assasins-guild/police.png";
import samplebonus14 from "../Assets/assasins-guild/aom14.png";
import samplebonus5 from "../Assets/assasins-guild/aom5.png";
import samplebonus9 from "../Assets/assasins-guild/aom9.png";
import playnext from "../Assets/assasins-guild/playnext.png";
import helpquit from "../Assets/assasins-guild/helpquit.png";
import step1 from "../Assets/assasins-guild/step1.png";
import step2 from "../Assets/assasins-guild/step2.png";
import step3 from "../Assets/assasins-guild/step3.png";
import step4 from "../Assets/assasins-guild/step4.png";
import step5 from "../Assets/assasins-guild/step5.png";
import repeat from "../Assets/assasins-guild/repeatstep.png";
//---------------------------------------------------------------------------------GAME ASSETS

//---------------------------------------------------------------------------------ALL GAME CARD DATA
//ALL TARGETS, and their index in deck array
const cardmark = [
  { name: "vigilante", indeck: [1, 2, 3], src: vigilante },
  { name: "businessman", indeck: [4, 5, 6], src: businessman },
  { name: "armyofficer", indeck: [7, 8, 9], src: armyofficer },
  { name: "politician", indeck: [10, 11, 12], src: politician },
  { name: "thief", indeck: [13, 14, 15], src: thief },
  { name: "scientist", indeck: [16, 17, 18], src: scientist },
  { name: "clergyman", indeck: [19, 20, 21], src: clergyman },
  { name: "gangster", indeck: [22, 23, 24], src: gangster },
];
//ALL BOUNTIES DATA
const bounties = [
  { key: 1, gun: 1000, dagger: 2000, poison: 4000, accident: 7000, src: bounty1 },
  { key: 2, gun: 1000, dagger: 2000, poison: 3000, accident: 6000, src: bounty2 },
  { key: 3, gun: 1000, dagger: 4000, poison: 4000, accident: 7000, src: bounty3 },
  { key: 4, gun: 1000, dagger: 3000, poison: 4000, accident: 6000, src: bounty4 },
  { key: 5, gun: 1000, dagger: 3000, poison: 5000, accident: 7000, src: bounty5 },
  { key: 6, gun: 1000, dagger: 3000, poison: 5000, accident: 5000, src: bounty6 },
  { key: 7, gun: 1000, dagger: 2000, poison: 5000, accident: 5000, src: bounty7 },
  { key: 8, gun: 1000, dagger: 2000, poison: 5000, accident: 6000, src: bounty8 },
  { key: 9, gun: 1000, dagger: 3000, poison: 3000, accident: 7000, src: bounty9 },
  { key: 10, gun: 1000, dagger: 4000, poison: 5000, accident: 6000, src: bounty10 },
  { key: 11, gun: 1000, dagger: 4000, poison: 5000, accident: 5000, src: bounty11 },
  { key: 12, gun: 1000, dagger: 4000, poison: 5000, accident: 7000, src: bounty12 },
  { key: 13, gun: 2000, dagger: 2000, poison: 5000, accident: 7000, src: bounty13 },
  { key: 14, gun: 2000, dagger: 3000, poison: 4000, accident: 7000, src: bounty14 },
  { key: 15, gun: 2000, dagger: 3000, poison: 3000, accident: 6000, src: bounty15 },
  { key: 16, gun: 2000, dagger: 2000, poison: 3000, accident: 7000, src: bounty16 },
  { key: 17, gun: 2000, dagger: 2000, poison: 5000, accident: 5000, src: bounty17 },
  { key: 18, gun: 2000, dagger: 2000, poison: 4000, accident: 5000, src: bounty18 },
  { key: 19, gun: 2000, dagger: 3000, poison: 5000, accident: 6000, src: bounty19 },
  { key: 20, gun: 2000, dagger: 3000, poison: 5000, accident: 5000, src: bounty20 },
  { key: 21, gun: 2000, dagger: 4000, poison: 4000, accident: 5000, src: bounty21 },
  { key: 22, gun: 2000, dagger: 4000, poison: 5000, accident: 6000, src: bounty22 },
  { key: 23, gun: 2000, dagger: 4000, poison: 5000, accident: 7000, src: bounty23 },
  { key: 24, gun: 2000, dagger: 4000, poison: 4000, accident: 7000, src: bounty24 },
];

//ALL TEAMS and THEIR INFORMATION
const teams = [
  { name: "eviserate", icon: evicon, cardlay: [4, 4, 4], pol: 3, src: eviserate, cards: [evigun, evidagger, evipoison, eviaccident], bank: 0, playabe: [true, true, true] },
  { name: "hughrnext", icon: hugcon, cardlay: [4, 4, 4], pol: 3, src: hughrnext, cards: [huggun, hugdagger, hugpoison, hugaccident], bank: 0, playabe: [true, true, true] },
  { name: "jennyside", icon: jencon, cardlay: [4, 4, 4], pol: 3, src: jennyside, cards: [jengun, jendagger, jenpoison, jenaccident], bank: 0, playabe: [true, true, true] },
  { name: "enniemosity", icon: anncon, cardlay: [4, 4, 4], pol: 3, src: anniemosity, cards: [anngun, anndagger, annpoison, annaccident], bank: 0, playabe: [true, true, true] },
  { name: "sikopath", icon: sikcon, cardlay: [4, 4, 4], pol: 3, src: sikopath, cards: [sikgun, sikdagger, sikpoison, sikaccident], bank: 0, playabe: [true, true, true] },
  { name: "yufanasia", icon: yufcon, cardlay: [4, 4, 4], pol: 3, src: yufanasia, cards: [yufgun, yufdagger, yufpoison, yufaccident], bank: 0, playabe: [true, true, true] },
];

//Array of shuffle targets and their bounties
const shufmark = [];
const shufbount = [];
//three next per round
let numberofnext = 1;
//three pick to move to next round
let numberofpick = 0;
let isending = 0;
// ----------------------------------------------------------------------------------------------------
function AssasinGuild() {
  // eslint-disable-next-line
  const [myguild, setMyguild] = useState(4);
  const [enemyguild, setEnemyguild] = useState(5);
  const [pickmode, setPickmode] = useState(false);
  const [incard, setIncard] = useState();
  const [markarray, setMarkArray] = useState([]);
  const [bountyarray, setBountyArray] = useState([]);
  const [nextround, setNextround] = useState(false);
  const [firstsecondpick, setFirstSeconPick] = useState(false);
  const [secondsecondpick, setSecondSeconPick] = useState(false);
  const [thirdsecondpick, setThirdSeconPick] = useState(false);
  const [flip, setFlip] = useState(false);
  const [isStarting, setIsStarting] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [viewHelp, setViewHelp] = useState(false);

  function Card(props) {
    return <div className={classes.card}>{props.children}</div>;
  }

  //random function for ai move, and card shuffle
  function random(num, plus) {
    return Math.trunc(Math.random() * num + plus);
  }
  function shuffleHandler() {
    for (let i = 0; i < 24; ) {
      let n = random(24, 1);
      if (shufmark.includes(n)) {
        // eslint-disable-next-line
        i = i;
      }
      if (!shufmark.includes(n)) {
        shufmark.push(n);
        i++;
      }
    }
    for (let i = 0; i < 24; ) {
      let n = random(24, 1);
      if (shufbount.includes(n)) {
        // eslint-disable-next-line
        i = i;
      }
      if (!shufbount.includes(n)) {
        shufbount.push(n);
        i++;
      }
    }
  }
  // ---------------------------------------------------------------------------------ENEMY CARD
  //AI table side
  const enemycard = (
    <>
      <Card>
        {teams[enemyguild].cardlay[0] === 4 ? (
          <img src={teams[enemyguild].src} className={classes.imgop} alt=""></img>
        ) : flip ? (
          <img src={teams[enemyguild].cards[teams[enemyguild].cardlay[0]]} className={classes.img} alt=""></img>
        ) : (
          <img src={teams[enemyguild].src} className={classes.img} alt=""></img>
        )}
      </Card>
      <Card>
        {teams[enemyguild].cardlay[1] === 4 ? (
          <img src={teams[enemyguild].src} className={classes.imgop} alt=""></img>
        ) : flip ? (
          <img src={teams[enemyguild].cards[teams[enemyguild].cardlay[1]]} className={classes.img} alt=""></img>
        ) : (
          <img src={teams[enemyguild].src} className={classes.img} alt=""></img>
        )}
      </Card>
      <Card>
        {teams[enemyguild].cardlay[2] === 4 ? (
          <img src={teams[enemyguild].src} className={classes.imgop} alt=""></img>
        ) : flip ? (
          <img src={teams[enemyguild].cards[teams[enemyguild].cardlay[2]]} className={classes.img} alt=""></img>
        ) : (
          <img src={teams[enemyguild].src} className={classes.img} alt=""></img>
        )}
      </Card>
    </>
  );

  // ---------------------------------------------------------------------------------ENEMY CARD
  // ---------------------------------------------------------------------------------MY CARD

  /*,,,,,,,,,,,,,,,,,,picking mode for first round,,,,,,,,,,,,,,,,,,,,,*/
  function firstpickmodeHandler(event) {
    event.preventDefault();
    setPickmode(true);
    setIncard(0);
    numberofpick++;
  }
  function secondpickmodeHandler(event) {
    event.preventDefault();
    setPickmode(true);
    setIncard(1);
    numberofpick++;
  }
  function thirdpickmodeHandler(event) {
    event.preventDefault();
    setPickmode(true);
    setIncard(2);
    numberofpick++;
  }
  /*````````````````````````````````````````````````````````````````````*/

  /*,,,,,,,,,,,,,,,,,,picking mode for second round,,,,,,,,,,,,,,,,,,,,,*/
  function firstsecondpickmodeHandler(event) {
    event.preventDefault();
    setPickmode(true);
    setIncard(0);
    setFirstSeconPick(true);
  }
  function secondsecondpickmodeHandler(event) {
    event.preventDefault();
    setPickmode(true);
    setIncard(1);
    setSecondSeconPick(true);
  }
  function thirdsecondpickmodeHandler(event) {
    event.preventDefault();
    setPickmode(true);
    setIncard(2);
    setThirdSeconPick(true);
  }
  //``````````````````````````````````````````````````
  //player table side
  const mycard = (
    <>
      <Card>
        {teams[myguild].cardlay[0] >= 4 ? (
          !nextround ? (
            <img src={teams[myguild].src} className={classes.imgop} onClick={firstpickmodeHandler} alt=""></img>
          ) : (
            <img src={teams[myguild].src} className={classes.img} alt=""></img>
          )
        ) : !nextround ? (
          <img src={teams[myguild].cards[teams[myguild].cardlay[0]]} className={classes.img} alt=""></img>
        ) : !firstsecondpick ? (
          <img src={teams[myguild].src} className={classes.imgop} onClick={firstsecondpickmodeHandler} alt=""></img>
        ) : (
          <img src={teams[myguild].src} className={classes.img} alt=""></img>
        )}
      </Card>
      <Card>
        {teams[myguild].cardlay[1] >= 4 ? (
          !nextround ? (
            <img src={teams[myguild].src} className={classes.imgop} onClick={secondpickmodeHandler} alt=""></img>
          ) : (
            <img src={teams[myguild].src} className={classes.img} alt=""></img>
          )
        ) : !nextround ? (
          <img src={teams[myguild].cards[teams[myguild].cardlay[1]]} className={classes.img} alt=""></img>
        ) : !secondsecondpick ? (
          <img src={teams[myguild].src} className={classes.imgop} onClick={secondsecondpickmodeHandler} alt=""></img>
        ) : (
          <img src={teams[myguild].src} className={classes.img} alt=""></img>
        )}
      </Card>
      <Card>
        {teams[myguild].cardlay[2] >= 4 ? (
          !nextround ? (
            <img src={teams[myguild].src} className={classes.imgop} onClick={thirdpickmodeHandler} alt=""></img>
          ) : (
            <img src={teams[myguild].src} className={classes.img} alt=""></img>
          )
        ) : !nextround ? (
          <img src={teams[myguild].cards[teams[myguild].cardlay[2]]} className={classes.img} alt=""></img>
        ) : !thirdsecondpick ? (
          <img src={teams[myguild].src} className={classes.imgop} onClick={thirdsecondpickmodeHandler} alt=""></img>
        ) : (
          <img src={teams[myguild].src} className={classes.img} alt=""></img>
        )}
      </Card>
    </>
  );
  // ---------------------------------------------------------------------------------MY CARD
  // ---------------------------------------------------------------------------------MARKS CARDS
  // eslint-disable-next-line
  const markfirstlay = cardmark.filter((ind) => {
    if (markarray[0] && ind.indeck.includes(markarray[0])) return ind.src;
  });
  // eslint-disable-next-line
  const marksecondlay = cardmark.filter((ind) => {
    if (markarray[1] && ind.indeck.includes(markarray[1])) return ind.src;
  });
  // eslint-disable-next-line
  const markthirdlay = cardmark.filter((ind) => {
    if (markarray[2] && ind.indeck.includes(markarray[2])) return ind.src;
  });

  const marks = (
    <>
      <Card>{markarray[0] ? <img src={markfirstlay[0].src} className={classes.img} alt=""></img> : <img src={marksback} className={classes.imgop} alt=""></img>}</Card>
      <Card>{markarray[1] ? <img src={marksecondlay[0].src} className={classes.img} alt=""></img> : <img src={marksback} className={classes.imgop} alt=""></img>}</Card>
      <Card>{markarray[2] ? <img src={markthirdlay[0].src} className={classes.img} alt=""></img> : <img src={marksback} className={classes.imgop} alt=""></img>}</Card>
    </>
  );

  // ---------------------------------------------------------------------------------MARKS CARDS
  // ---------------------------------------------------------------------------------BOUNTY CARDS
  const guildcheck = (
    <>
      <div className={classes.gun}>
        <div className={classes.inside}>
          {teams.map((item) => {
            return item.cardlay[0] === 0 ? <img src={item.icon} className={classes.imgcon} alt=""></img> : "";
          })}
        </div>
        <div className={classes.inside}>
          {teams.map((item) => {
            return item.cardlay[1] === 0 ? <img src={item.icon} className={classes.imgcon} alt=""></img> : "";
          })}
        </div>
        <div className={classes.inside}>
          {teams.map((item) => {
            return item.cardlay[2] === 0 ? <img src={item.icon} className={classes.imgcon} alt=""></img> : "";
          })}
        </div>
      </div>
      <div className={classes.dagger}>
        <div className={classes.inside}>
          {teams.map((item) => {
            return item.cardlay[0] === 1 ? <img src={item.icon} className={classes.imgcon} alt=""></img> : "";
          })}
        </div>
        <div className={classes.inside}>
          {teams.map((item) => {
            return item.cardlay[1] === 1 ? <img src={item.icon} className={classes.imgcon} alt=""></img> : "";
          })}
        </div>
        <div className={classes.inside}>
          {teams.map((item) => {
            return item.cardlay[2] === 1 ? <img src={item.icon} className={classes.imgcon} alt=""></img> : "";
          })}
        </div>
      </div>
      <div className={classes.poison}>
        <div className={classes.inside}>
          {teams.map((item) => {
            return item.cardlay[0] === 2 ? <img src={item.icon} className={classes.imgcon} alt=""></img> : "";
          })}
        </div>
        <div className={classes.inside}>
          {teams.map((item) => {
            return item.cardlay[1] === 2 ? <img src={item.icon} className={classes.imgcon} alt=""></img> : "";
          })}
        </div>
        <div className={classes.inside}>
          {teams.map((item) => {
            return item.cardlay[2] === 2 ? <img src={item.icon} className={classes.imgcon} alt=""></img> : "";
          })}
        </div>
      </div>
      <div className={classes.accident}>
        <div className={classes.inside}>
          {teams.map((item) => {
            return item.cardlay[0] === 3 ? <img src={item.icon} className={classes.imgcon} alt=""></img> : "";
          })}
        </div>
        <div className={classes.inside}>
          {teams.map((item) => {
            return item.cardlay[1] === 3 ? <img src={item.icon} className={classes.imgcon} alt=""></img> : "";
          })}
        </div>
        <div className={classes.inside}>
          {teams.map((item) => {
            return item.cardlay[2] === 3 ? <img src={item.icon} className={classes.imgcon} alt=""></img> : "";
          })}
        </div>
      </div>
    </>
  );

  const bounty = (
    <>
      <Card>{bountyarray[0] ? <img src={bounties[bountyarray[0] - 1].src} className={classes.img} alt=""></img> : <img src={bountyback} className={classes.imgop} alt=""></img>}</Card>
      <Card>{bountyarray[1] ? <img src={bounties[bountyarray[1] - 1].src} className={classes.img} alt=""></img> : <img src={bountyback} className={classes.imgop} alt=""></img>}</Card>
      <Card>{bountyarray[2] ? <img src={bounties[bountyarray[2] - 1].src} className={classes.img} alt=""></img> : <img src={bountyback} className={classes.imgop} alt=""></img>}</Card>
      {flip && guildcheck}
    </>
  );
  // ---------------------------------------------------------------------------------BOUNTY CARDS
  // ---------------------------------------------------------------------------------PiCK PAGE
  //randoming the enemy ai move "ai choose a card to lay"
  function enemypickcard(ind) {
    for (let i = 0; i < 1; ) {
      const ran = random(4, 0);
      if (!teams[ind].cardlay.includes(ran)) {
        if (teams[ind].playabe[incard]) {
          teams[ind].cardlay[incard] = ran;
        } else {
          teams[ind].cardlay[incard] = 4;
        }
        i++;
      } else {
        // eslint-disable-next-line
        i = i;
      }
    }
  }

  //setting all move for every ai enemey "foreach in 6 enemy AI guild will choose their own diffent move"
  //"guild" is the enemy guilds and "incard" is the index where the card will be lay on.
  function setguncard(guild, card) {
    if (myguild === guild) {
      teams[myguild].cardlay[incard] = teams[myguild].playabe[incard] ? card : 5;
    } else {
      enemypickcard(guild);
    }
  }

  function setguncardHandler(event) {
    event.preventDefault();
    // if (numberofpick > 3 && !nextround) setFlip(false);
    setguncard(0, 0);
    setguncard(1, 0);
    setguncard(2, 0);
    setguncard(3, 0);
    setguncard(4, 0);
    setguncard(5, 0);
    setPickmode(false);
    if (numberofpick === 3) setFlip(true);
  }
  function setdagcardHandler(event) {
    event.preventDefault();
    // if (numberofpick < 3 && !nextround) setFlip(false);
    setguncard(0, 1);
    setguncard(1, 1);
    setguncard(2, 1);
    setguncard(3, 1);
    setguncard(4, 1);
    setguncard(5, 1);
    setPickmode(false);
    if (numberofpick === 3) setFlip(true);
  }
  function setpoicardHandler(event) {
    event.preventDefault();
    // if (numberofpick < 3 && !nextround) setFlip(false);
    setguncard(0, 2);
    setguncard(1, 2);
    setguncard(2, 2);
    setguncard(3, 2);
    setguncard(4, 2);
    setguncard(5, 2);
    setPickmode(false);
    if (numberofpick === 3) setFlip(true);
  }
  function setacccardHandler(event) {
    event.preventDefault();
    // if (numberofpick < 3 && !nextround) setFlip(false);
    setguncard(0, 3);
    setguncard(1, 3);
    setguncard(2, 3);
    setguncard(3, 3);
    setguncard(4, 3);
    setguncard(5, 3);
    setPickmode(false);
    if (numberofpick === 3) setFlip(true);
  }

  const pickPage = (
    <div className={classes.pickpage}>
      <Card>
        {!nextround ? (
          teams[myguild].cardlay.includes(0) ? (
            <img src={teams[myguild].cards[0]} className={classes.img} alt=""></img>
          ) : (
            <img src={teams[myguild].cards[0]} className={classes.img} onClick={setguncardHandler} alt=""></img>
          )
        ) : (
          <img src={teams[myguild].cards[0]} className={classes.img} onClick={setguncardHandler} alt=""></img>
        )}
      </Card>
      <Card>
        {!nextround ? (
          teams[myguild].cardlay.includes(1) ? (
            <img src={teams[myguild].cards[1]} className={classes.img} alt=""></img>
          ) : (
            <img src={teams[myguild].cards[1]} className={classes.img} onClick={setdagcardHandler} alt=""></img>
          )
        ) : (
          <img src={teams[myguild].cards[1]} className={classes.img} onClick={setdagcardHandler} alt=""></img>
        )}
      </Card>
      <Card>
        {!nextround ? (
          teams[myguild].cardlay.includes(2) ? (
            <img src={teams[myguild].cards[2]} className={classes.img} alt=""></img>
          ) : (
            <img src={teams[myguild].cards[2]} className={classes.img} onClick={setpoicardHandler} alt=""></img>
          )
        ) : (
          <img src={teams[myguild].cards[2]} className={classes.img} onClick={setpoicardHandler} alt=""></img>
        )}
      </Card>
      <Card>
        {!nextround ? (
          teams[myguild].cardlay.includes(3) ? (
            <img src={teams[myguild].cards[3]} className={classes.img} alt=""></img>
          ) : (
            <img src={teams[myguild].cards[3]} className={classes.img} onClick={setacccardHandler} alt=""></img>
          )
        ) : (
          <img src={teams[myguild].cards[3]} className={classes.img} onClick={setacccardHandler} alt=""></img>
        )}
      </Card>
    </div>
  );

  // ---------------------------------------------------------------------------------PiCK PAGE
  // ---------------------------------------------------------------------------------UI
  // on play next
  function onnextHandler() {
    setMarkArray(shufmark.splice(0, 3));
    setBountyArray(shufbount.splice(0, 3));
  }
  //checking the result in every player, in either whos win and whos gonna go in next round
  function oncheckresult(num) {
    let tocheck = [];
    teams.forEach((item) => tocheck.push(item.cardlay[num]));
    const win = Math.min(...tocheck);
    const winner = teams.filter((item) => item.cardlay[num] === win);
    if (winner.length === 1) {
      const bountkey = bounties.filter((bon) => bon.key === bountyarray[num]);
      if (win === 0) winner[0].bank += bountkey[0].gun;
      if (win === 1) winner[0].bank += bountkey[0].dagger;
      if (win === 2) winner[0].bank += bountkey[0].poison;
      if (win === 3) winner[0].bank += bountkey[0].accident;
      teams.forEach((item) => (item.cardlay[num] = 4));
      markarray[num] = "";
      bountyarray[num] = "";
    } else {
      // teams.forEach(item=> item.cardlay.forEach(ins => {ins===4? item.playabe = false:item.playabe = true}))
      teams.forEach((item) => {
        item.playabe[num] = false;
      });
      winner.forEach((item) => {
        item.playabe[num] = true;
      });
    }
  }
  //checking the results
  function oncheckHandler(event) {
    event.preventDefault();
    oncheckresult(0);
    oncheckresult(1);
    oncheckresult(2);
    setNextround(true);
    setThirdSeconPick(false);
    setFirstSeconPick(false);
    setSecondSeconPick(false);

    if (numberofnext === 2) {
      onnextHandler();
      numberofnext = 0;
      setNextround(false);
    }
    numberofnext++;
    numberofpick = 0;
    if (nextround) setFlip(false);
    isending++;
    if (isending === 16) setIsEnd(true);
  }
  //on view guide
  function onviewhelpHandler() {
    setViewHelp(true);
    setFlip(true);
  }

  const ui = (
    <>
      {flip && (
        <button className={classes.check} onClick={oncheckHandler}>
          <img className={classes.imgcheck} src={playnext} alt=""></img>
          <span className={classes.textcheck}>NEXT</span>
        </button>
      )}
      <button className={classes.check} onClick={onviewhelpHandler}>
        <img className={classes.imgcheck} src={helpquit} alt=""></img>
        <span className={classes.textcheck}>HELP</span>
      </button>
    </>
  );

  // on resume game
  function onhidehelpHandler() {
    setViewHelp(false);
  }
  /*---------------------------------------VIEW GUIDE------------------------------- */
  const viewthehelp = (
    <div className={classes.start}>
      <div className={classes.help}>
        <img src={step1} alt="" className={classes.helpimg}></img>
        <img src={step2} alt="" className={classes.helpimg}></img>
        <img src={step3} alt="" className={classes.helpimg}></img>
        <img src={step4} alt="" className={classes.helpimg}></img>
        <img src={step5} alt="" className={classes.helpimg}></img>
        <img src={repeat} alt="" className={classes.helpimg}></img>
      </div>
      <button className={classes.play} onClick={onhidehelpHandler}>
        RESUME
      </button>
    </div>
  );
  //on play button in starting page
  function onplayHandler(event) {
    event.preventDefault();
    shuffleHandler();
    onnextHandler();
    setIsStarting(true);
  }

  const starting = (
    <div className={classes.start}>
      <div className={classes.help}>
        <img src={step1} alt="" className={classes.helpimg}></img>
        <img src={step2} alt="" className={classes.helpimg}></img>
        <img src={step3} alt="" className={classes.helpimg}></img>
        <img src={step4} alt="" className={classes.helpimg}></img>
        <img src={step5} alt="" className={classes.helpimg}></img>
        <img src={repeat} alt="" className={classes.helpimg}></img>
      </div>
      <button className={classes.play} onClick={onplayHandler}>
        CLICK HERE TO START THE GAME
      </button>
    </div>
  );

  //ranking the all players
  const banks = teams.map((item) => {
    return item.bank;
  });
  banks.sort((a, b) => {
    return b - a;
  });
  const rankings = banks.map((item) => {
    const banks = teams.map((item) => {
      return item.bank;
    });
    const indexes = banks.indexOf(item);
    return (
      <>
        <div className={classes.ranking}>
          <img src={teams[indexes].icon} alt="" className={classes.imgcon}></img>
          <span className={classes.namescores}>{teams[indexes].name}</span>
          <span className={classes.bankscores}>${item}</span>
        </div>
      </>
    );
  });

  //on show game result
  const ending = (
    <div className={classes.start}>
      <div className={classes.rank}>{rankings}</div>
    </div>
  );
  // ---------------------------------------------------------------------------------UI
  // ---------------------------------------------------------------------------------ENEMYGUILDS
  //navigating to different guilds--------
  function toggleyufHandler(event) {
    event.preventDefault();
    setEnemyguild(5);
  }
  function toggleannHandler(event) {
    event.preventDefault();
    setEnemyguild(3);
  }
  function togglejenHandler(event) {
    event.preventDefault();
    setEnemyguild(2);
  }
  function togglehugHandler(event) {
    event.preventDefault();
    setEnemyguild(1);
  }
  function toggleeviHandler(event) {
    event.preventDefault();
    setEnemyguild(0);
  }
  //navigating to different guilds--------

  const enemyguilds = (
    <>
      <button className={classes.guilds} onClick={toggleyufHandler}>
        <img className={classes.imgcon} src={yufcon} alt=""></img>
        <label className={classes.guildbank}>{"$" + teams[5].bank}</label>
      </button>
      <button className={classes.guilds} onClick={toggleeviHandler}>
        <img className={classes.imgcon} src={evicon} alt=""></img>
        <label className={classes.guildbank}>{"$" + teams[0].bank}</label>
      </button>
      <button className={classes.guilds} onClick={togglehugHandler}>
        <img className={classes.imgcon} src={hugcon} alt=""></img>
        <label className={classes.guildbank}>{"$" + teams[1].bank}</label>
      </button>
      <button className={classes.guilds} onClick={togglejenHandler}>
        <img className={classes.imgcon} src={jencon} alt=""></img>
        <label className={classes.guildbank}>{"$" + teams[2].bank}</label>
      </button>
      <button className={classes.guilds} onClick={toggleannHandler}>
        <img className={classes.imgcon} src={anncon} alt=""></img>
        <label className={classes.guildbank}>{"$" + teams[3].bank}</label>
      </button>
    </>
  );

  // ---------------------------------------------------------------------------------ENEMYGUILDS
  // ---------------------------------------------------------------------------------ME
  const me = (
    <>
      <img src={teams[myguild].icon} className={classes.imgmcon} alt=""></img>
      <label className={classes.mebank}>{"$" + teams[myguild].bank}</label>
    </>
  );
  // ---------------------------------------------------------------------------------ME
  // ---------------------------------------------------------------------------------FOE

  const enemy = (
    <>
      <img src={teams[enemyguild].icon} className={classes.imgmcon} alt=""></img>
      <label className={classes.mebank}>{"$" + teams[enemyguild].bank}</label>
    </>
  );
  // ---------------------------------------------------------------------------------FOE
  // ---------------------------------------------------------------------------------DECKS

  const decks = (
    <>
      <Card>
        <img src={marksback} className={classes.img} alt=""></img>
        <div className={classes.remainings}>{shufmark.length}</div>
      </Card>
    </>
  );

  // ---------------------------------------------------------------------------------DECKS
  // ---------------------------------------------------------------------------------MYPOLICE
  const mypolice = (
    <>
      <img src={police} className={classes.imgpol} alt=""></img>
      <img src={police} className={classes.imgpol} alt=""></img>
      <img src={police} className={classes.imgpol} alt=""></img>
    </>
  );
  // ---------------------------------------------------------------------------------MYPOLICE
  // ---------------------------------------------------------------------------------BOARD
  const assasinofthemonth = (
    <>
      <img src={samplebonus14} className={classes.imgbon} alt=""></img>
      <img src={samplebonus5} className={classes.imgbon} alt=""></img>
      <img src={samplebonus9} className={classes.imgbon} alt=""></img>
    </>
  );
  // ---------------------------------------------------------------------------------BOARD

  return (
    <div className={classes.assasinguild} style={{ backgroundImage: `url(${smoke})` }}>
      <div className={classes.enemycard}>{enemycard}</div>
      <div className={classes.marks}>{marks}</div>
      <div className={classes.bounty}>{bounty}</div>
      <div className={classes.enemyguilds}>{enemyguilds}</div>
      <div className={classes.enemypolice}></div>
      <div className={classes.mypolice}>{mypolice}</div>
      <div className={classes.decks}>{decks}</div>
      <div className={classes.me}>{me}</div>
      <div className={classes.foe}>{enemy}</div>
      <div className={classes.board}>{assasinofthemonth}</div>
      <div className={classes.status}></div>
      <div className={classes.mycard}>{mycard}</div>
      <div className={classes.ui}>{ui}</div>
      {pickmode ? pickPage : ""}
      {viewHelp ? viewthehelp : ""}
      {!isStarting ? starting : ""}
      {isEnd ? ending : ""}
    </div>
  );
}

export default AssasinGuild;
