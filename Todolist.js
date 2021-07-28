import { useReducer, useState } from "react";

import classes from "./Todolist.module.css";

import delcon from "../Assets/delete_icon.png";

function getTimeDate(state, action) {
  if (action.type === "DAYS") return { days: true, weeks: false, months: false };
  if (action.type === "WEEKS") return { days: false, weeks: true, months: false };
  if (action.type === "MONTHS") return { days: false, weeks: false, months: true };
}
function getDate(state, action) {
  if (action.type === "DAY") return { month: state.month, week: state.week, day: action.day };
  if (action.type === "WEEK") return { month: state.month, week: action.week, day: state.day };
  if (action.type === "MONTH") return { day: state.day, week: state.week, month: action.month };
}

function Todolist() {
  const [timedate, setTimeDate] = useReducer(getTimeDate, {
    days: false,
    weeks: false,
    months: true,
  });
  const [setdate, setDate] = useReducer(getDate, {
    day: 1,
    week: 0,
    month: 0,
  });

  const [dailyDataList, setDailyDataList] = useState([
    {
      date: null,
      todos: [],
      checked: [],
      events: [],
      places: [],
      notes: "",
      color: "white",
    },
  ]);
  const [weeklyDataList, setWeeklyDataList] = useState([
    {
      date: null,
      todos: [],
      checked: [],
      events: [],
      places: [],
      notes: "",
      color: "white",
    },
  ]);
  const [monthlyDataList, setMonthlyDataList] = useState([
    {
      date: null,
      todos: [],
      checked: [],
      events: [],
      places: [],
      notes: "",
      color: "white",
    },
  ]);

  //--------------------------DATA-------------------------------

  const curdate = new Date(2021, setdate.month, setdate.day);
  //-------------DAILY----------------//
  const newdata = {
    date: curdate.toDateString(),
    todos: [],
    checked: [],
    events: [],
    places: [],
    notes: "",
    color: "white",
  };
  let hasdata = dailyDataList
    .map((item) => {
      return item.date;
    })
    .includes(curdate.toDateString());

  let dataindex = 0;
  if (hasdata) {
    dataindex = dailyDataList
      .map((item) => {
        return item.date;
      })
      .indexOf(curdate.toDateString());
  }

  //-------------DAILY----------------//
  //-------------WEEKLY----------------//
  const wnewdata = {
    date: curdate.toDateString(),
    todos: [],
    checked: [],
    events: [],
    places: [],
    notes: "",
    color: "white",
  };
  let whasdata = weeklyDataList
    .map((item) => {
      return item.date;
    })
    .includes(curdate.toDateString());

  let wdataindex = 0;
  if (whasdata) {
    wdataindex = weeklyDataList
      .map((item) => {
        return item.date;
      })
      .indexOf(curdate.toDateString());
  }

  //-------------WEEKLY----------------//
  //-------------MONTHLY----------------//
  const mnewdata = {
    date: curdate.getMonth(),
    todos: [],
    checked: [],
    events: [],
    places: [],
    notes: "",
    color: "white",
  };
  let mhasdata = monthlyDataList
    .map((item) => {
      return item.date;
    })
    .includes(curdate.getMonth());

  let mdataindex = 0;
  if (mhasdata) {
    mdataindex = monthlyDataList
      .map((item) => {
        return item.date;
      })
      .indexOf(curdate.getMonth());
  }
  //-------------MONTHLY----------------//
  //--------------------------DATA-------------------------------//
  //-------------------------------------------------TIMETABLE----------------------------------------------//

  function thisday(num) {
    const day = setdate.week * 7 - new Date(2021, setdate.month, 1).getDay() + 1 + num;
    const thisdate = new Date(2021, setdate.month, day).toDateString().slice(4, 15);
    return thisdate;
  }
  function todays(num) {
    const day = setdate.week * 7 - new Date(2021, setdate.month, 1).getDay() + 1 + num;
    const thisdate = new Date(2021, setdate.month, day).toDateString();
    return thisdate;
  }

  function getdayHandler(event) {
    const day = setdate.week * 7 - new Date(2021, setdate.month, 1).getDay() + 1 + +event.target.id;
    setDate({ type: "DAY", day: day });
  }

  const alldates = dailyDataList.map((item) => {
    return item.date;
  });
  const iday1 = alldates.indexOf(todays(0));
  const iday2 = alldates.indexOf(todays(1));
  const iday3 = alldates.indexOf(todays(2));
  const iday4 = alldates.indexOf(todays(3));
  const iday5 = alldates.indexOf(todays(4));
  const iday6 = alldates.indexOf(todays(5));
  const iday7 = alldates.indexOf(todays(6));
  const colday1 = dailyDataList[iday1] ? dailyDataList[iday1].color : "white";
  const colday2 = dailyDataList[iday2] ? dailyDataList[iday2].color : "white";
  const colday3 = dailyDataList[iday3] ? dailyDataList[iday3].color : "white";
  const colday4 = dailyDataList[iday4] ? dailyDataList[iday4].color : "white";
  const colday5 = dailyDataList[iday5] ? dailyDataList[iday5].color : "white";
  const colday6 = dailyDataList[iday6] ? dailyDataList[iday6].color : "white";
  const colday7 = dailyDataList[iday7] ? dailyDataList[iday7].color : "white";

  const indays = (
    <>
      <div className={classes.days} id={0} style={{ backgroundColor: colday1 }} onClick={getdayHandler}>
        Sunday
        <label></label>
        {thisday(0)}
      </div>
      <div className={classes.days} id={1} style={{ backgroundColor: colday2 }} onClick={getdayHandler}>
        Monday
        <label></label>
        {thisday(1)}
      </div>
      <div className={classes.days} id={2} style={{ backgroundColor: colday3 }} onClick={getdayHandler}>
        Tuesday
        <label></label>
        {thisday(2)}
      </div>
      <div className={classes.days} id={3} style={{ backgroundColor: colday4 }} onClick={getdayHandler}>
        Wednesday
        <label></label>
        {thisday(3)}
      </div>
      <div className={classes.days} id={4} style={{ backgroundColor: colday5 }} onClick={getdayHandler}>
        Thursday
        <label></label>
        {thisday(4)}
      </div>
      <div className={classes.days} id={5} style={{ backgroundColor: colday6 }} onClick={getdayHandler}>
        Friday
        <label></label>
        {thisday(5)}
      </div>
      <div className={classes.days} id={6} style={{ backgroundColor: colday7 }} onClick={getdayHandler}>
        Saturday
        <label></label>
        {thisday(6)}
      </div>
    </>
  );

  function getweekHandler(event) {
    setDate({ type: "DAY", day: 1 + event.target.id * 6 });
    setDate({ type: "WEEK", week: event.target.id });
    if (setdate.week === event.target.id) {
      setTimeDate({ type: "DAYS" });
    }
  }

  function toweek(num) {
    const week = new Date(2021, setdate.month, num * 6 + 1);
    return week.toDateString();
  }

  const allweeks = weeklyDataList.map((item) => {
    return item.date;
  });
  const iweek1 = allweeks.indexOf(toweek(0));
  const iweek2 = allweeks.indexOf(toweek(1));
  const iweek3 = allweeks.indexOf(toweek(2));
  const iweek4 = allweeks.indexOf(toweek(3));
  const iweek5 = allweeks.indexOf(toweek(4));
  const colweek1 = weeklyDataList[iweek1] ? weeklyDataList[iweek1].color : "white";
  const colweek2 = weeklyDataList[iweek2] ? weeklyDataList[iweek2].color : "white";
  const colweek3 = weeklyDataList[iweek3] ? weeklyDataList[iweek3].color : "white";
  const colweek4 = weeklyDataList[iweek4] ? weeklyDataList[iweek4].color : "white";
  const colweek5 = weeklyDataList[iweek5] ? weeklyDataList[iweek5].color : "white";

  const inweeks = (
    <>
      <div className={classes.weeks} id={0} style={{ backgroundColor: colweek1 }} onClick={getweekHandler}>
        First week of {curdate.toLocaleString("default", { month: "long" })}
      </div>
      <div className={classes.weeks} id={1} style={{ backgroundColor: colweek2 }} onClick={getweekHandler}>
        Second week of {curdate.toLocaleString("default", { month: "long" })}
      </div>
      <div className={classes.weeks} id={2} style={{ backgroundColor: colweek3 }} onClick={getweekHandler}>
        Third week of {curdate.toLocaleString("default", { month: "long" })}
      </div>
      <div className={classes.weeks} id={3} style={{ backgroundColor: colweek4 }} onClick={getweekHandler}>
        Fourth week of {curdate.toLocaleString("default", { month: "long" })}
      </div>
      <div className={classes.weeks} id={4} style={{ backgroundColor: colweek5 }} onClick={getweekHandler}>
        Fifth week of {curdate.toLocaleString("default", { month: "long" })}
      </div>
    </>
  );

  function getmonthHandler(event) {
    setDate({ type: "DAY", day: 1 });
    setDate({ type: "WEEK", week: 0 });
    setDate({ type: "MONTH", month: event.target.id });
    if (setdate.month === event.target.id) {
      setTimeDate({ type: "WEEKS" });
    }
  }

  const allmonth = monthlyDataList.map((item) => {
    return item.date;
  });

  const imonth1 = allmonth.indexOf(0);
  const imonth2 = allmonth.indexOf(1);
  const imonth3 = allmonth.indexOf(2);
  const imonth4 = allmonth.indexOf(3);
  const imonth5 = allmonth.indexOf(4);
  const imonth6 = allmonth.indexOf(5);
  const imonth7 = allmonth.indexOf(6);
  const imonth8 = allmonth.indexOf(7);
  const imonth9 = allmonth.indexOf(8);
  const imonth10 = allmonth.indexOf(9);
  const imonth11 = allmonth.indexOf(10);
  const imonth12 = allmonth.indexOf(11);
  const colmonth1 = monthlyDataList[imonth1] ? monthlyDataList[imonth1].color : "white";
  const colmonth2 = monthlyDataList[imonth2] ? monthlyDataList[imonth2].color : "white";
  const colmonth3 = monthlyDataList[imonth3] ? monthlyDataList[imonth3].color : "white";
  const colmonth4 = monthlyDataList[imonth4] ? monthlyDataList[imonth4].color : "white";
  const colmonth5 = monthlyDataList[imonth5] ? monthlyDataList[imonth5].color : "white";
  const colmonth6 = monthlyDataList[imonth6] ? monthlyDataList[imonth6].color : "white";
  const colmonth7 = monthlyDataList[imonth7] ? monthlyDataList[imonth7].color : "white";
  const colmonth8 = monthlyDataList[imonth8] ? monthlyDataList[imonth8].color : "white";
  const colmonth9 = monthlyDataList[imonth9] ? monthlyDataList[imonth9].color : "white";
  const colmonth10 = monthlyDataList[imonth10] ? monthlyDataList[imonth10].color : "white";
  const colmonth11 = monthlyDataList[imonth11] ? monthlyDataList[imonth11].color : "white";
  const colmonth12 = monthlyDataList[imonth12] ? monthlyDataList[imonth12].color : "white";

  const inmonths = (
    <>
      <div className={classes.months} id={0} style={{ backgroundColor: colmonth1 }} onClick={getmonthHandler}>
        JANUARY
      </div>
      <div className={classes.months} id={1} style={{ backgroundColor: colmonth2 }} onClick={getmonthHandler}>
        FEBRUARY
      </div>
      <div className={classes.months} id={2} style={{ backgroundColor: colmonth3 }} onClick={getmonthHandler}>
        MARCH
      </div>
      <div className={classes.months} id={3} style={{ backgroundColor: colmonth4 }} onClick={getmonthHandler}>
        APRIL
      </div>
      <div className={classes.months} id={4} style={{ backgroundColor: colmonth5 }} onClick={getmonthHandler}>
        MAY
      </div>
      <div className={classes.months} id={5} style={{ backgroundColor: colmonth6 }} onClick={getmonthHandler}>
        JUNE
      </div>
      <div className={classes.months} id={6} style={{ backgroundColor: colmonth7 }} onClick={getmonthHandler}>
        JULY
      </div>
      <div className={classes.months} id={7} style={{ backgroundColor: colmonth8 }} onClick={getmonthHandler}>
        AUGUST
      </div>
      <div className={classes.months} id={8} style={{ backgroundColor: colmonth9 }} onClick={getmonthHandler}>
        SEPTEMBER
      </div>
      <div className={classes.months} id={9} style={{ backgroundColor: colmonth10 }} onClick={getmonthHandler}>
        OCTOBER
      </div>
      <div className={classes.months} id={10} style={{ backgroundColor: colmonth11 }} onClick={getmonthHandler}>
        NOVEMBER
      </div>
      <div className={classes.months} id={11} style={{ backgroundColor: colmonth12 }} onClick={getmonthHandler}>
        DECEMBER
      </div>
    </>
  );

  const timetable = (
    <div className={classes.timetable}>
      {timedate.days && indays}
      {timedate.weeks && inweeks}
      {timedate.months && inmonths}
    </div>
  );
  //-------------------------------------------------TIMETABLE----------------------------------------------//
  //-------------------------------------------------FILLINTABLE----------------------------------------------//

  function onentertodoHandle(event) {
    if (event.key === "Enter" && timedate.days) {
      let arr = [...dailyDataList];
      arr[dataindex].todos.push(event.target.value);
      setDailyDataList(arr);
      event.target.value = "";
    }
    if (event.key === "Enter" && timedate.weeks) {
      let arr = [...weeklyDataList];
      arr[wdataindex].todos.push(event.target.value);
      setWeeklyDataList(arr);
      event.target.value = "";
    }
    if (event.key === "Enter" && timedate.months) {
      let arr = [...monthlyDataList];
      arr[mdataindex].todos.push(event.target.value);
      setMonthlyDataList(arr);
      event.target.value = "";
    }
  }

  function onentereventHandle(event) {
    if (event.key === "Enter" && timedate.days) {
      let arr = [...dailyDataList];
      arr[dataindex].events.push(event.target.value);
      setDailyDataList(arr);
      event.target.value = "";
    }
    if (event.key === "Enter" && timedate.weeks) {
      let arr = [...weeklyDataList];
      arr[wdataindex].events.push(event.target.value);
      setWeeklyDataList(arr);
      event.target.value = "";
    }
    if (event.key === "Enter" && timedate.months) {
      let arr = [...monthlyDataList];
      arr[mdataindex].events.push(event.target.value);
      setMonthlyDataList(arr);
      event.target.value = "";
    }
  }

  function onenterplaceHandle(event) {
    if (event.key === "Enter" && timedate.days) {
      let arr = [...dailyDataList];
      arr[dataindex].places.push(event.target.value);
      setDailyDataList(arr);
      event.target.value = "";
    }
    if (event.key === "Enter" && timedate.weeks) {
      let arr = [...weeklyDataList];
      arr[wdataindex].places.push(event.target.value);
      setWeeklyDataList(arr);
      event.target.value = "";
    }
    if (event.key === "Enter" && timedate.months) {
      let arr = [...monthlyDataList];
      arr[mdataindex].places.push(event.target.value);
      setMonthlyDataList(arr);
      event.target.value = "";
    }
  }

  function onenternoteHandle(event) {
    if (timedate.days) {
      let arr = [...dailyDataList];
      arr[dataindex].notes = event.target.value;
      setDailyDataList(arr);
    }
    if (timedate.weeks) {
      let arr = [...weeklyDataList];
      arr[wdataindex].notes = event.target.value;
      setWeeklyDataList(arr);
    }
    if (timedate.months) {
      let arr = [...monthlyDataList];
      arr[mdataindex].notes = event.target.value;
      setMonthlyDataList(arr);
    }
  }

  function ontodoeraseHandle(event) {
    if (timedate.days) {
      let array = [...dailyDataList];
      array[dataindex].todos.splice(event.target.id, 1);
      array[dataindex].checked.splice(event.target.id, 1);
      setDailyDataList(array);
    }
    if (timedate.weeks) {
      let array = [...weeklyDataList];
      array[wdataindex].todos.splice(event.target.id, 1);
      array[wdataindex].checked.splice(event.target.id, 1);
      setWeeklyDataList(array);
    }
    if (timedate.months) {
      let array = [...monthlyDataList];
      array[mdataindex].todos.splice(event.target.id, 1);
      array[mdataindex].checked.splice(event.target.id, 1);
      setMonthlyDataList(array);
    }
  }

  function ontodocheckHandle(event) {
    if (timedate.days) {
      let array = [...dailyDataList];
      array[dataindex].checked[event.target.id] = event.target.checked;
      setDailyDataList(array);
    }
    if (timedate.weeks) {
      let array = [...weeklyDataList];
      array[wdataindex].checked[event.target.id] = event.target.checked;
      setWeeklyDataList(array);
    }
    if (timedate.months) {
      let array = [...monthlyDataList];
      array[mdataindex].checked[event.target.id] = event.target.checked;
      setMonthlyDataList(array);
    }
  }

  const timeDataList = timedate.days ? dailyDataList[dataindex] : timedate.weeks ? weeklyDataList[wdataindex] : monthlyDataList[mdataindex];

  const todoslist = timeDataList.todos.map((item, i) => {
    return (
      <div className={classes.todoline}>
        <input type="checkbox" checked={timeDataList.checked[i] ? timeDataList.checked[i] : false} onChange={ontodocheckHandle} id={i}></input>
        <div className={classes.todos}>{item}</div>
        <button id={i} className={classes.delbtn} onClick={ontodoeraseHandle}>
          <img src={delcon} alt="delete" className={classes.delcons}></img>
        </button>
      </div>
    );
  });

  function oneventeraseHandle(event) {
    if (timedate.days) {
      let array = [...dailyDataList];
      array[dataindex].events.splice(event.target.id, 1);
      setDailyDataList(array);
    }
    if (timedate.weeks) {
      let array = [...weeklyDataList];
      array[wdataindex].events.splice(event.target.id, 1);
      setWeeklyDataList(array);
    }
    if (timedate.months) {
      let array = [...monthlyDataList];
      array[mdataindex].events.splice(event.target.id, 1);
      setMonthlyDataList(array);
    }
  }

  const eventslist = timeDataList.events.map((item, i) => {
    return (
      <div className={classes.todoline}>
        <div className={classes.number}>{i + 1}</div>
        <div className={classes.todos}>{item}</div>
        <button id={i} className={classes.delbtn} onClick={oneventeraseHandle}>
          <img src={delcon} alt="delete" className={classes.delcons}></img>
        </button>
      </div>
    );
  });

  function onplaceseraseHandle(event) {
    if (timedate.days) {
      let array = [...dailyDataList];
      array[dataindex].places.splice(event.target.id, 1);
      setDailyDataList(array);
    }
    if (timedate.weeks) {
      let array = [...weeklyDataList];
      array[wdataindex].places.splice(event.target.id, 1);
      setWeeklyDataList(array);
    }
    if (timedate.months) {
      let array = [...monthlyDataList];
      array[mdataindex].places.splice(event.target.id, 1);
      setMonthlyDataList(array);
    }
  }

  const placeslist = timeDataList.places.map((item, i) => {
    return (
      <div className={classes.todoline}>
        <div className={classes.number}>{i + 1}</div>
        <div className={classes.todos}>{item}</div>
        <button id={i} className={classes.delbtn} onClick={onplaceseraseHandle}>
          <img src={delcon} alt="delete" className={classes.delcons}></img>
        </button>
      </div>
    );
  });

  function onenterdataHandle() {
    if (!hasdata && timedate.days) setDailyDataList([...dailyDataList, newdata]);
    if (!whasdata && timedate.weeks) setWeeklyDataList([...weeklyDataList, wnewdata]);
    if (!mhasdata && timedate.months) setMonthlyDataList([...monthlyDataList, mnewdata]);
  }

  const fillintable = (
    <div className={classes.fillintable}>
      <div className={classes.lists} style={{ backgroundColor: timeDataList.color }}>
        <div className={classes.todolisttitle}>TODO LIST</div>
        {todoslist}
        <input onKeyDown={onentertodoHandle} onFocus={onenterdataHandle} className={classes.todoinput}></input>
      </div>
      <div className={classes.events} style={{ backgroundColor: timeDataList.color }}>
        <div className={classes.todolisttitle}>EVENTS</div>
        {eventslist}
        <input onKeyDown={onentereventHandle} onFocus={onenterdataHandle} className={classes.todoinput}></input>
      </div>
      <div className={classes.places} style={{ backgroundColor: timeDataList.color }}>
        <div className={classes.todolisttitle}>PLACES</div>
        {placeslist}
        <input onKeyDown={onenterplaceHandle} onFocus={onenterdataHandle} className={classes.todoinput}></input>
      </div>
      <div className={classes.notes} style={{ backgroundColor: timeDataList.color }}>
        <div className={classes.todolisttitle}>NOTES</div>
        <textarea className={classes.notefil} rows="10" cols="40" onChange={onenternoteHandle} onFocus={onenterdataHandle} value={timeDataList.notes}></textarea>
      </div>
    </div>
  );
  //-------------------------------------------------FILLINTABLE----------------------------------------------//
  //-------------------------------------------------TOOGLEBUTTON----------------------------------------------//

  function showMonthlyHandler() {
    setDate({ type: "DAY", day: 1 });
    setTimeDate({ type: "MONTHS" });
  }
  function showWeeklyHandler() {
    setDate({ type: "DAY", day: 1 + setdate.week * 7 });
    setTimeDate({ type: "WEEKS" });
  }

  function shownextdayHandler() {
    let nextweek = +setdate.week + 1;
    setDate({ type: "WEEK", week: nextweek });
  }
  function showprevdayHandler() {
    let nextweek = setdate.week - 1;
    setDate({ type: "WEEK", week: nextweek });
  }

  const togglebtn = (
    <div className={classes.togglebtn}>
      {timedate.days && (
        <button className={classes.btn} onClick={showprevdayHandler}>
          PREV
        </button>
      )}
      {timedate.days && (
        <button className={classes.btn} onClick={showWeeklyHandler}>
          SHOW WEEKLY
        </button>
      )}
      {timedate.weeks && (
        <button className={classes.btn} onClick={showMonthlyHandler}>
          SHOW MONTHLY
        </button>
      )}
      {timedate.days && (
        <button className={classes.btn} onClick={shownextdayHandler}>
          NEXT
        </button>
      )}
    </div>
  );
  //-------------------------------------------------TOOGLEBUTTON----------------------------------------------//
  //-------------------------------------------------COLORBUTTON----------------------------------------------//

  function onsetcolorHandler(event) {
    if (timedate.days) {
      let arr = [...dailyDataList];
      arr[dataindex].color = event.target.id;
      setDailyDataList(arr);
    }
    if (timedate.weeks) {
      let arr = [...weeklyDataList];
      arr[wdataindex].color = event.target.id;
      setWeeklyDataList(arr);
    }
    if (timedate.months) {
      let arr = [...monthlyDataList];
      arr[mdataindex].color = event.target.id;
      setMonthlyDataList(arr);
    }
  }

  const colorbtn = (
    <div className={classes.colorbtn} onMouseEnter={onenterdataHandle}>
      <button className={classes.colors} style={{ backgroundColor: "skyblue" }} id={"skyblue"} onClick={onsetcolorHandler}></button>
      <button className={classes.colors} style={{ backgroundColor: "pink" }} id={"pink"} onClick={onsetcolorHandler}></button>
      <button className={classes.colors} style={{ backgroundColor: "lightgreen" }} id={"lightgreen"} onClick={onsetcolorHandler}></button>
      <button className={classes.colors} style={{ backgroundColor: "orange" }} id={"orange"} onClick={onsetcolorHandler}></button>
    </div>
  );

  //-------------------------------------------------COLORBUTTON----------------------------------------------//
  //-------------------------------------------------DATESTRING----------------------------------------------//
  const curdatestring = timedate.months ? curdate.toLocaleDateString("default", { month: "long" }) : curdate.toDateString();
  const datestring = <div className={classes.datestring}>{curdatestring}</div>;
  //-------------------------------------------------DATESTRING----------------------------------------------//
  //-------------------------------------------------TITLEHEADING----------------------------------------------//
  const titlehead = <div className={classes.titlehead}>TODO LIST</div>;
  //-------------------------------------------------TITLEHEADING----------------------------------------------//

  return (
    <div className={classes.todolist}>
      {titlehead}
      {datestring}
      {colorbtn}
      {togglebtn}
      {timetable}
      {fillintable}
    </div>
  );
}

export default Todolist;
