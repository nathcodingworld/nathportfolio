import { useReducer, useState } from "react";

import classes from "./Todolist.module.css";
import delcon from "../Assets/delete_icon.png";

//.........................................................................INITIAL DATA....................................................................................//
//monthly todo data to be load every first time loading
const initialMonth = [
  { checked: [], color: "skyblue", date: 0, events: [], notes: "      \n\n        DOUBLE CLICK THE MONTHS TO \n    OPEN THE WEEKLY TODO LIST", places: [], todos: [] },
  { checked: [true], color: "pink", date: 3, events: [], notes: "\n\n             Start Learning Python\n", places: [], todos: ["start learning programing Language"] },
  {
    checked: [true, true, true],
    color: "skyblue",
    date: 4,
    events: [],
    notes: "\n\n        Study first the javascript, \n   css and react for web development \n   and apply for job\n\n      Before start Learning the other \n    Language,",
    places: [],
    todos: ["Start studying javascript", "choose front end frameworks", "enroll course on udemy"],
  },
  {
    checked: [true, true],
    color: "skyblue",
    date: 5,
    events: [],
    notes: "\n\n\n         Start creating your \n  portfolio to apply job for the next \n  month",
    places: [],
    todos: ["start Studyiing react", "Start creating your Portfolio"],
  },
  {
    checked: [],
    color: "lightgreen",
    date: 6,
    events: [],
    notes: "",
    places: [],
    todos: [""],
  },
];
//weekly todo data to be load every first time loading
const initialWeek = [
  {
    date: "Sat Jun 19 2021",
    todos: ["Start Building portfolio"],
    checked: [true],
    events: ["Lola,s Birthday this Week"],
    places: ["Gooing SomeWhere"],
    notes: "",
    color: "lightgreen",
  },
  {
    date: "Thu Jul 1 2021",
    todos: ["Start Building the assasins guild game", "Start building todo list app"],
    checked: [true, true],
    events: [],
    places: [],
    notes: "",
    color: "lightgreen",
  },
  {
    date: "Tue Jul 13 2021",
    todos: ["Start Building the expense tracker", "Start building mixormatch game"],
    checked: [true, true],
    events: [],
    places: [],
    notes: "\n\n      Last Project ",
    color: "lightgreen",
  },
  {
    date: "Sun Jul 25 2021",
    todos: ["Finalizing your portfolio", "make your portfolio responsive"],
    checked: [true, true],
    events: [],
    places: [],
    notes: "\n\n\n       Must Be Finnish",
    color: "lightgreen",
  },
];
//.......................................................................................................................................................................//

//.........................................................................DATA TO BE STORED..................................................................................//
//specify whether the monthly, weekly or daily todo are rendered on screen
function getTimeDate(state, action) {
  if (action.type === "DAYS") return { days: true, weeks: false, months: false };
  if (action.type === "WEEKS") return { days: false, weeks: true, months: false };
  if (action.type === "MONTHS") return { days: false, weeks: false, months: true };
}

// Data ID or Data Key Of The data stored
// the data id is a date string
function getDate(state, action) {
  if (action.type === "DAY") return { month: state.month, week: state.week, day: action.day };
  if (action.type === "WEEK") return { month: state.month, week: action.week, day: state.day };
  if (action.type === "MONTH") return { day: state.day, week: state.week, month: action.month };
}
//------------------------------------------------------------------------------------------------------------------------||TODOLIST||-----
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

  //DAILY todos data To be stored
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

  //WEEKLY todos data To be stored
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
    ...initialWeek,
  ]);

  //MONTHLY todos data To be stored
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
    ...initialMonth,
  ]);

  //----------------------------------------------------------DATA-------------------------------//
  //Data ID TO be look up
  const curdate = new Date(2021, setdate.month, setdate.day);

  //-----------------------------------------------------------------------DAILY----------------//

  //initial Daily todo Data TO be registered in Storage
  const newdata = {
    date: curdate.toDateString(),
    todos: [],
    checked: [],
    events: [],
    places: [],
    notes: "",
    color: "white",
  };

  //Boolean,  If the Daliy Data id has already Registered in The storage
  let hasdata = dailyDataList
    .map((item) => {
      return item.date;
    })
    .includes(curdate.toDateString());

  //index, determined the index of the ID
  let dataindex = 0;
  if (hasdata) {
    dataindex = dailyDataList
      .map((item) => {
        return item.date;
      })
      .indexOf(curdate.toDateString());
  }

  //---------------------------------------------------------------------WEEKLY----------------//
  //initial Weekly todo Data To be registered in Storage
  const wnewdata = {
    date: curdate.toDateString(),
    todos: [],
    checked: [],
    events: [],
    places: [],
    notes: "",
    color: "white",
  };
  //Boolean,  If the weekly Data id has already Registered in The storage
  let whasdata = weeklyDataList
    .map((item) => {
      return item.date;
    })
    .includes(curdate.toDateString());

  //index, determined the index of the ID
  let wdataindex = 0;
  if (whasdata) {
    wdataindex = weeklyDataList
      .map((item) => {
        return item.date;
      })
      .indexOf(curdate.toDateString());
  }

  //------------------------------------------------------------------MONTHLY----------------//
  //initial Monthly todo Data To be registered in Storage
  const mnewdata = {
    date: curdate.getMonth(),
    todos: [],
    checked: [],
    events: [],
    places: [],
    notes: "",
    color: "white",
  };

  //Boolean,  If the Monthly Data id has already Registered in The storage
  let mhasdata = monthlyDataList
    .map((item) => {
      return item.date;
    })
    .includes(curdate.getMonth());

  //index, determined the index of the ID
  let mdataindex = 0;
  if (mhasdata) {
    mdataindex = monthlyDataList
      .map((item) => {
        return item.date;
      })
      .indexOf(curdate.getMonth());
  }
  //--------------------------------------------------------------------------------------------------------//

  //-------------------------------------------------TIMETABLE----------------------------------------------//

  //function to determined data of the next (days === num) of the current date
  function thisday(num) {
    const day = setdate.week * 7 - new Date(2021, setdate.month, 1).getDay() + 1 + num;
    const thisdate = new Date(2021, setdate.month, day).toDateString().slice(4, 15);
    return thisdate;
  }

  //function to determined if the next (days === num) has "color" data stored in storage and to be rendered
  function todays(num) {
    const day = setdate.week * 7 - new Date(2021, setdate.month, 1).getDay() + 1 + num;
    const thisdate = new Date(2021, setdate.month, day).toDateString();
    return thisdate;
  }
  //getting all the dates stored
  const alldates = dailyDataList.map((item) => {
    return item.date;
  });
  //looking in the array if it has "color" data
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

  //Updating the days of the current date ID based on the clicked days in the table
  function getdayHandler(event) {
    const day = setdate.week * 7 - new Date(2021, setdate.month, 1).getDay() + 1 + +event.target.id;
    setDate({ type: "DAY", day: day });
  }

  //DAYS TABLE
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

  //function to determined if the next (weeks === num) has "color" data stored in storage and to be rendered
  function toweek(num) {
    const week = new Date(2021, setdate.month, num * 6 + 1);
    return week.toDateString();
  }
  //getting all the dates stored
  const allweeks = weeklyDataList.map((item) => {
    return item.date;
  });
  //looking in the array if it has "color" data
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

  //Updating the week of the current date ID based on the clicked week in the table
  function getweekHandler(event) {
    setDate({ type: "DAY", day: 1 + event.target.id * 6 });
    setDate({ type: "WEEK", week: event.target.id });
    if (setdate.week === event.target.id) {
      setTimeDate({ type: "DAYS" });
    }
  }

  //WEEKS TABLE
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

  //getting all the dates stored
  const allmonth = monthlyDataList.map((item) => {
    return item.date;
  });
  //looking in the array if it has "color" data
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

  //Updating the month of the current date ID based on the clicked month in the table
  function getmonthHandler(event) {
    setDate({ type: "DAY", day: 1 });
    setDate({ type: "WEEK", week: 0 });
    setDate({ type: "MONTH", month: event.target.id });
    if (setdate.month === event.target.id) {
      setTimeDate({ type: "WEEKS" });
    }
  }

  //MONTHS TABLE
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

  //whether day, weeks ,or month table are rendered in screen
  const timetable = (
    <div className={classes.timetable}>
      {timedate.days && indays}
      {timedate.weeks && inweeks}
      {timedate.months && inmonths}
    </div>
  );
  //-----------------------------------------------------------------------------------------------------------//

  //-------------------------------------------------FILLINTABLE----------------------------------------------//

  //Registering Date ID and the initial data
  function onenterdataHandle() {
    if (!hasdata && timedate.days) setDailyDataList([...dailyDataList, newdata]);
    if (!whasdata && timedate.weeks) setWeeklyDataList([...weeklyDataList, wnewdata]);
    if (!mhasdata && timedate.months) setMonthlyDataList([...monthlyDataList, mnewdata]);
  }

  //function to add the input todos  in storage, whether in days, weeks or months storage
  function onentertodoHandle(event) {
    //days storage
    if (event.key === "Enter" && timedate.days) {
      let arr = [...dailyDataList];
      arr[dataindex].todos.push(event.target.value);
      setDailyDataList(arr);
      event.target.value = "";
    }
    //weeks storage
    if (event.key === "Enter" && timedate.weeks) {
      let arr = [...weeklyDataList];
      arr[wdataindex].todos.push(event.target.value);
      setWeeklyDataList(arr);
      event.target.value = "";
    }
    //months storage
    if (event.key === "Enter" && timedate.months) {
      let arr = [...monthlyDataList];
      arr[mdataindex].todos.push(event.target.value);
      setMonthlyDataList(arr);
      event.target.value = "";
    }
  }

  //function to add the input events  in storage, whether in days, weeks or months storage
  function onentereventHandle(event) {
    //days storage
    if (event.key === "Enter" && timedate.days) {
      let arr = [...dailyDataList];
      arr[dataindex].events.push(event.target.value);
      setDailyDataList(arr);
      event.target.value = "";
    }
    //weeks storage
    if (event.key === "Enter" && timedate.weeks) {
      let arr = [...weeklyDataList];
      arr[wdataindex].events.push(event.target.value);
      setWeeklyDataList(arr);
      event.target.value = "";
    }
    //months storage
    if (event.key === "Enter" && timedate.months) {
      let arr = [...monthlyDataList];
      arr[mdataindex].events.push(event.target.value);
      setMonthlyDataList(arr);
      event.target.value = "";
    }
  }

  //function to add the input places  in storage, whether in days, weeks or months storage
  function onenterplaceHandle(event) {
    //days storage
    if (event.key === "Enter" && timedate.days) {
      let arr = [...dailyDataList];
      arr[dataindex].places.push(event.target.value);
      setDailyDataList(arr);
      event.target.value = "";
    }
    //weeks storage
    if (event.key === "Enter" && timedate.weeks) {
      let arr = [...weeklyDataList];
      arr[wdataindex].places.push(event.target.value);
      setWeeklyDataList(arr);
      event.target.value = "";
    }
    //months storage
    if (event.key === "Enter" && timedate.months) {
      let arr = [...monthlyDataList];
      arr[mdataindex].places.push(event.target.value);
      setMonthlyDataList(arr);
      event.target.value = "";
    }
  }

  //function to add the input notes  in storage, whether in days, weeks or months storage
  function onenternoteHandle(event) {
    //days storage
    if (timedate.days) {
      let arr = [...dailyDataList];
      arr[dataindex].notes = event.target.value;
      setDailyDataList(arr);
    }
    //weeks storage
    if (timedate.weeks) {
      let arr = [...weeklyDataList];
      arr[wdataindex].notes = event.target.value;
      setWeeklyDataList(arr);
    }
    //months storage
    if (timedate.months) {
      let arr = [...monthlyDataList];
      arr[mdataindex].notes = event.target.value;
      setMonthlyDataList(arr);
    }
  }

  //function to remove the todos in storage, whether in days, weeks or months storage
  function ontodoeraseHandle(event) {
    //in days storage
    if (timedate.days) {
      let array = [...dailyDataList];
      array[dataindex].todos.splice(event.target.id, 1);
      array[dataindex].checked.splice(event.target.id, 1);
      setDailyDataList(array);
    }
    //in weeks storage
    if (timedate.weeks) {
      let array = [...weeklyDataList];
      array[wdataindex].todos.splice(event.target.id, 1);
      array[wdataindex].checked.splice(event.target.id, 1);
      setWeeklyDataList(array);
    }
    //in months storage
    if (timedate.months) {
      let array = [...monthlyDataList];
      array[mdataindex].todos.splice(event.target.id, 1);
      array[mdataindex].checked.splice(event.target.id, 1);
      setMonthlyDataList(array);
    }
  }

  //function to remove the events in storage,
  function oneventeraseHandle(event) {
    //in days storage
    if (timedate.days) {
      let array = [...dailyDataList];
      array[dataindex].events.splice(event.target.id, 1);
      setDailyDataList(array);
    }
    //in weeks storage
    if (timedate.weeks) {
      let array = [...weeklyDataList];
      array[wdataindex].events.splice(event.target.id, 1);
      setWeeklyDataList(array);
    }
    //in months storage
    if (timedate.months) {
      let array = [...monthlyDataList];
      array[mdataindex].events.splice(event.target.id, 1);
      setMonthlyDataList(array);
    }
  }
  //function to remove the place in storage,
  function onplaceseraseHandle(event) {
    //in days storage
    if (timedate.days) {
      let array = [...dailyDataList];
      array[dataindex].places.splice(event.target.id, 1);
      setDailyDataList(array);
    }
    //in weeks storage
    if (timedate.weeks) {
      let array = [...weeklyDataList];
      array[wdataindex].places.splice(event.target.id, 1);
      setWeeklyDataList(array);
    }
    //in months storage
    if (timedate.months) {
      let array = [...monthlyDataList];
      array[mdataindex].places.splice(event.target.id, 1);
      setMonthlyDataList(array);
    }
  }

  //setting the todo to "checked"
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

  //getting data in storage, whether in day, weeks or months storage
  const timeDataList = timedate.days ? dailyDataList[dataindex] : timedate.weeks ? weeklyDataList[wdataindex] : monthlyDataList[mdataindex];

  //Rendered the todos based on the data in storage "timedatalist" ↑↑
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

  //Rendered the events based on the data in storage "timedatalist" ↑↑
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

  //Rendered the place based on the data in storage "timedatalist" ↑↑
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

  //The table where the data to be rendered
  //inputing data to add, remove or register in the storage
  const fillintable = (
    <div className={classes.fillintable}>
      <div className={classes.lists} style={{ backgroundColor: timeDataList.color }}>
        <div className={classes.todolisttitle}>TODO LIST</div>
        {todoslist}
        <input placeholder="Write and Enter" onKeyDown={onentertodoHandle} onFocus={onenterdataHandle} className={classes.todoinput}></input>
      </div>
      <div className={classes.events} style={{ backgroundColor: timeDataList.color }}>
        <div className={classes.todolisttitle}>EVENTS</div>
        {eventslist}
        <input placeholder="Write and Enter" onKeyDown={onentereventHandle} onFocus={onenterdataHandle} className={classes.todoinput}></input>
      </div>
      <div className={classes.places} style={{ backgroundColor: timeDataList.color }}>
        <div className={classes.todolisttitle}>PLACES</div>
        {placeslist}
        <input placeholder="Write and Enter" onKeyDown={onenterplaceHandle} onFocus={onenterdataHandle} className={classes.todoinput}></input>
      </div>
      <div className={classes.notes} style={{ backgroundColor: timeDataList.color }}>
        <div className={classes.todolisttitle}>NOTES</div>
        <textarea className={classes.notefil} rows="10" cols="40" onChange={onenternoteHandle} onFocus={onenterdataHandle} value={timeDataList.notes}></textarea>
      </div>
    </div>
  );
  //------------------------------------------------------------------------------------------------------------//

  //-------------------------------------------------TOOGLEBUTTON----------------------------------------------//

  //go to months table
  function showMonthlyHandler() {
    setDate({ type: "DAY", day: 1 });
    setTimeDate({ type: "MONTHS" });
  }
  //go to weeks table
  function showWeeklyHandler() {
    setDate({ type: "DAY", day: 1 + setdate.week * 7 });
    setTimeDate({ type: "WEEKS" });
  }
  //go to next week
  function shownextdayHandler() {
    let nextweek = +setdate.week + 1;
    setDate({ type: "WEEK", week: nextweek });
  }
  //go to previous week
  function showprevdayHandler() {
    let nextweek = setdate.week - 1;
    setDate({ type: "WEEK", week: nextweek });
  }

  //button jsx
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
  //-----------------------------------------------------------------------------------------------------------//

  //-------------------------------------------------COLORBUTTON----------------------------------------------//

  //function to set color in the table,. data add in the storage
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

  //color buttons jsx
  const colorbtn = (
    <div className={classes.colorbtn} onMouseEnter={onenterdataHandle}>
      <button className={classes.colors} style={{ backgroundColor: "skyblue" }} id={"skyblue"} onClick={onsetcolorHandler}></button>
      <button className={classes.colors} style={{ backgroundColor: "pink" }} id={"pink"} onClick={onsetcolorHandler}></button>
      <button className={classes.colors} style={{ backgroundColor: "lightgreen" }} id={"lightgreen"} onClick={onsetcolorHandler}></button>
      <button className={classes.colors} style={{ backgroundColor: "orange" }} id={"orange"} onClick={onsetcolorHandler}></button>
    </div>
  );
  //---------------------------------------------------------------------------------------------------------//

  //-------------------------------------------------DATESTRING----------------------------------------------//
  const curdatestring = timedate.months ? curdate.toLocaleDateString("default", { month: "long" }) : curdate.toDateString();
  const datestring = <div className={classes.datestring}>{curdatestring}</div>;
  //---------------------------------------------------------------------------------------------------------//

  //-------------------------------------------------TITLEHEADING----------------------------------------------//
  const titlehead = <div className={classes.titlehead}>TODO LIST</div>;
  //-----------------------------------------------------------------------------------------------------------//

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
