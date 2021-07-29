import { useReducer, useState, useRef, useEffect } from "react";

import classes from "./Trackinglist.module.css";

import addcon from "../Assets/additem.png";
import remcon from "../Assets/removeitem.png";

//----------------------------------------------------------------------INITIAL DATA---------------------//

//initial sample expense data
const initialexpense = [
  {
    cost: "25000",
    date: { day: "Sunday", date: "Jul 25 2021" },
    name: "new Flat Screen Tv",
  },
  {
    cost: "10000",
    date: { day: "Thursday", date: "Aug 05 2021" },
    name: "bills",
  },
  {
    cost: "15000",
    date: { day: "Tuesday", date: "Aug 31 2021" },
    name: "appartment rent",
  },
  {
    cost: "15000",
    date: { day: "Wednesday", date: "Set 01 2021" },
    name: "Foods",
  },
];
//initial sample  bussines daily income data
const initialdata = [
  {
    cost: "5000",
    date: { day: "Sunday", date: "Aug 01 2021" },
    name: "day 1 store open",
  },
  {
    cost: "4000",
    date: { day: "Monday", date: "Aug 02 2021" },
    name: "Day 2",
  },
  {
    cost: "3500",
    date: { day: "Tuesday", date: "Aug 03 2021" },
    name: "Day 3",
  },
  {
    cost: "5000",
    date: { day: "Wednesday", date: "Aug 04 2021" },
    name: "Day 4 new menu added",
  },
  {
    cost: "2000",
    date: { day: "Thursday", date: "Aug 05 2021" },
    name: "Day 5- lockdown",
  },
  {
    cost: "1000",
    date: { day: "Friday", date: "Aug 06 2021" },
    name: "Day 6- Extended",
  },
  {
    cost: "2800",
    date: { day: "Saturday", date: "Aug 07 2021" },
    name: "Day 7 50% customer protocol",
  },
  {
    cost: "2800",
    date: { day: "Sunday", date: "Aug 08 2021" },
    name: "Day 8 new Menu added",
  },
];
//--------------------------------------------------------------------------------------------------------//

function calculateSalaryData(state, action) {
  //for log in initial sample data
  if (action.type === "INITIAL") {
    return { ...state, datainput: [...state.datainput, ...action.initialbudget] };
  }
  //inputing input expense data in budget storage/table
  if (action.type === "INPUT") {
    const dayin = action.date.toLocaleDateString("locale", { weekday: "long" });
    const datein = action.date.toDateString().slice(4, 15);
    if (action.cost < 0) return { ...state };
    return {
      ...state,
      datainput: [
        ...state.datainput,
        {
          date: { day: dayin, date: datein },
          name: action.name,
          cost: action.cost,
        },
      ],
    };
  }
  //outputing the summary data in output budget table
  if (action.type === "OUTPUT") {
    return {
      ...state,
      dataoutput: {
        name: action.lanme,
        amount: action.lamount,
        date: action.ldate,
      },
    };
  }
  //updating budget table when one of data deleted
  if (action.type === "UPDATE") {
    return { ...state, datainput: [...action.updatedatainput] };
  }
  //setting the maximun budget for the whole expense data
  if (action.type === "SALARY") {
    if (action.salary < 0) return { ...state };
    return { ...state, saraly: action.salary };
  }
  //rendered bar graph to visualize budget/expense data
  if (action.type === "GRAPH") {
    const maxamount = Math.max(...action.graph);
    const remaining = state.saraly - action.totalsalary;
    return {
      ...state,
      datagraph: [...action.graph],
      maxamount: maxamount,
      remaining: remaining,
    };
  }
}

function calculateExpenseData(state, action) {
  //for log in initial expense data
  if (action.type === "INITIAL") {
    return { ...state, datainput: [...state.datainput, ...action.initialexpenses] };
  }
  //inputing input expense data in expenselist storage/table
  if (action.type === "INPUT") {
    const dayin = action.date.toLocaleDateString("locale", { weekday: "long" });
    const datein = action.date.toDateString().slice(4, 15);
    if (action.cost < 0) return { ...state };
    return {
      ...state,
      datainput: [
        ...state.datainput,
        {
          date: { day: dayin, date: datein },
          name: action.name,
          cost: action.cost,
        },
      ],
    };
  }
  //outputing the summary data in output expense table
  if (action.type === "OUTPUT") {
    return {
      ...state,
      dataoutput: {
        name: action.lanme,
        amount: action.lamount,
        date: action.ldate,
      },
    };
  }
  //updating expense table when one of data deleted
  if (action.type === "UPDATE") {
    return { ...state, datainput: [...action.updatedatainput] };
  }
  //rendered bar graph to visualize expenses data
  if (action.type === "GRAPH") {
    const maxamount = Math.max(...action.graph);
    return { ...state, maxexpense: maxamount, totalexpense: action.total };
  }
}

function calculateIncomeData(state, action) {
  //for log in the initial data
  if (action.type === "INITIAL") {
    return { ...state, datainput: [...state.datainput, ...action.initialdata] };
  }
  //inputing the input daily income data to daily income list table
  if (action.type === "INPUT") {
    const dayin = action.date.toLocaleDateString("locale", { weekday: "long" });
    const datein = action.date.toDateString().slice(4, 15);
    if (action.cost < 0) return { ...state };
    return {
      ...state,
      datainput: [
        ...state.datainput,
        {
          date: { day: dayin, date: datein },
          name: action.name,
          cost: action.cost,
        },
      ],
    };
  }
  //render bar graph to visualize if above or below the average the income value
  if (action.type === "GRAPH") {
    const maxamount = Math.max(...action.graph);
    return {
      ...state,
      maxheight: maxamount,
      dataoutput: {
        ddays: [...action.ddays],
        totalgooddays: action.gooddays,
        totalbaddays: action.baddays,
        report: action.report,
      },
    };
  }
  //upadate daily income list if one data have been deleted
  if (action.type === "UPDATE") {
    return { ...state, datainput: [...action.updatedatainput] };
  }
  //setting The average Daily income
  if (action.type === "INCOME") {
    if (action.income < 0) return { ...state };
    return { ...state, averageincome: action.income };
  }
  //to review the summary or the data (daily)
  if (action.type === "REVIEW") {
    return {
      ...state,
      datareview: {
        dday: action.dday,
        name: action.name,
        amount: action.amount,
        date: action.date,
      },
    };
  }
}

//determined whether expense tracker, budget planer or monitor income will render on screen
function toggleTypeOfTrack(state, action) {
  if (action.type === "EXPENSE") {
    return { expense: true, budget: false, income: false };
  }
  if (action.type === "BUDGET") {
    return { salary: false, budget: true, income: false };
  }
  if (action.type === "INCOME") {
    return { salary: false, budget: false, income: true };
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////---------CALCULATOR
function toCalculate(state, action) {
  if (action.type === "INPUT") {
    const operator = state.operation === "=" ? undefined : state.operation;
    return { ...state, operation: operator, current: action.current };
  }
  if (action.type === "MOVE") {
    if (action.operator === "=") return { ...state };
    return { operation: action.operator, previous: action.previous, current: "" };
  }
  if (action.type === "DELETE") {
    const current = state.current.slice(0, -1);
    return { ...state, current: current };
  }
  if (action.type === "CLEAR") {
    return { operation: undefined, previous: "", current: "" };
  }
  if (action.type === "OPERATOR") {
    return { ...state, operation: action.operator };
  }
  if (action.type === "COMPUTE") {
    let answer;
    const prev = parseFloat(state.previous);
    const cur = parseFloat(state.current);
    if (isNaN(prev) || isNaN(cur)) return { ...state };
    switch (state.operation) {
      case "+":
        answer = prev + cur;
        break;
      case "-":
        answer = prev - cur;
        break;
      case "*":
        answer = prev * cur;
        break;
      case "÷":
        answer = prev / cur;
        break;
      default:
        return { ...state, previous: "", current: cur };
    }
    const operator = action.operator;
    const previous = action.operator === "=" ? "" : answer.toString();
    const current = action.operator === "=" ? answer.toString() : "";
    return { operation: operator, previous: previous, current: current };
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Trackinglist() {
  const [salaryDataState, setSalaryDataState] = useReducer(calculateSalaryData, {
    saraly: 70000,
    remaining: 70000,
    maxamount: 0,
    datainput: [],
    dataoutput: {
      amount: 0,
      name: "Hover the bar graph",
      date: "yyyy/mm/dd",
    },
    datagraph: [],
  });
  const [expensesDataState, setExpensesDataState] = useReducer(calculateExpenseData, {
    maxexpense: 0,
    totalexpense: 0,
    datainput: [],
    dataoutput: {
      amount: 0,
      name: "Hover the bar graph",
      date: "yyyy/mm/dd",
    },
  });

  const [incomeDataState, setIncomeDataState] = useReducer(calculateIncomeData, {
    averageincome: 3000,
    maxheight: 0,
    datainput: [],
    dataoutput: {
      totalgooddays: 0,
      totalbaddays: 0,
      ddays: [],
      report: 0,
    },
    datareview: {
      dday: 0,
      amount: 0,
      name: "hover the bar graph",
      date: "yyyy/mm/dd",
    },
  });

  const [typeOfTrack, setTypeOfTrack] = useReducer(toggleTypeOfTrack, {
    budget: false,
    expense: true,
    income: false,
  });

  const [calculatorstate, setCalculatorState] = useReducer(toCalculate, {
    previous: "",
    current: "",
    operation: undefined,
  });

  const [isAddingState, setIsAddingState] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);

  //getting the datainput whether in expense tracker storage, budget planer storage or monitor income storage
  const trackdatainput = typeOfTrack.budget ? salaryDataState.datainput : typeOfTrack.expense ? expensesDataState.datainput : incomeDataState.datainput;

  //setting data in (inputing, outputing, graph),  whether in expense tracker storage, budget planer storage or monitor income storage
  const setTrackDataState = typeOfTrack.budget ? setSalaryDataState : typeOfTrack.expense ? setExpensesDataState : setIncomeDataState;

  //Deleting data on the strage
  function onDeleteDataHandler(event) {
    trackdatainput.splice(event.target.id, 1);
    const newarray = [...trackdatainput];
    setTrackDataState({ type: "UPDATE", updatedatainput: newarray });
  }

  useEffect(() => {
    //loging in the initial sample data once
    setExpensesDataState({ type: "INITIAL", initialexpenses: initialexpense });
    setSalaryDataState({ type: "INITIAL", initialbudget: initialexpense });
    setIncomeDataState({ type: "INITIAL", initialdata: initialdata });
  }, []);

  //rendering the list of input data in the input list table
  const datatable = trackdatainput.map((item, i) => {
    return (
      <div className={classes.datacard}>
        <div className={classes.dates}>
          <div className={classes.day}>{item.date.day}</div>
          <div className={classes.date}>{item.date.date}</div>
        </div>
        <div className={classes.names}>{item.name}</div>
        <div className={classes.amounts}>₱{item.cost}</div>
        <div className={classes.btns} id={`${i}`} onClick={onDeleteDataHandler}>
          <img src={remcon} className={classes.remcon} alt="" id={`${i}`}></img>
        </div>
      </div>
    );
  });

  //-----------------------------------------------------------------INPUTLIST--------------------//

  //reference to get the inputed value
  const nameref = useRef();
  const numberref = useRef();
  const dateref = useRef();

  //opening the adding card and to submit new data
  function onAddingHandler() {
    setIsAddingState(true);
    const newdate = new Date(dateref.current.value);
    setTrackDataState({
      type: "INPUT",
      date: newdate,
      name: nameref.current.value,
      cost: numberref.current.value,
    });
    nameref.current.value = "";
    numberref.current.value = 0;
    dateref.current.value = 2021 / 0 / 1;
  }
  //on cancel to submit data,   closing the card,  true to render the add button
  function onCancelHandler() {
    setIsAddingState(true);
  }

  //opening the adding card,,   false to render the add button
  function onNotAddingHandler() {
    setIsAddingState(false);
  }

  //the card to be open when adding data
  const addingtable = (
    <div className={classes.addingcard}>
      <input ref={dateref} type="date" className={classes.addingdates}></input>
      <input ref={nameref} type="text" placeholder="name" className={classes.addingnames}></input>
      <input ref={numberref} type="number" defaultValue={0} className={classes.addingamounts}></input>
      <button className={classes.submit} onClick={onAddingHandler}>
        ADD
      </button>
      <button className={classes.submit} onClick={onCancelHandler}>
        CNCL
      </button>
    </div>
  );

  // add button
  const addicon = (
    <div className={classes.addcon} onClick={onNotAddingHandler}>
      <img src={addcon} alt=""></img>
    </div>
  );
  //-----------------------------------------------------------------------------------------------//

  //--------START-OF--------------------------------------------------------VISUALGRAPH--------------------//

  //--------START-OF---------BUDGET VISUALIZATION DATA---------//

  //to be called after submiting new data
  //to calculate total height of the bar in graph and the added height in the bar in graph
  useEffect(() => {
    function calculateData() {
      //setting all expense amount data into one array
      let totalcost = salaryDataState.datainput.map((item) => {
        return +item.cost;
      });
      //determining height of the graph in every index "from first to last  data added in the list"
      let height = [];
      for (let i = 1; i <= totalcost.length; ) {
        let arraytoreduce = totalcost.slice(0, i);
        let amounttopush = arraytoreduce.reduce((acc, item) => {
          return acc + item;
        }, 0);
        height.push(amounttopush);
        i++;
      }
      //getting the total of expense amounts
      const totalsalary = totalcost.reduce((acc, item) => {
        return acc + item;
      }, 0);
      return [height, totalsalary];
    }
    //destructuring and set into the bar graph table  "for visualization"
    const [height, totalsalary] = calculateData();
    setSalaryDataState({
      type: "GRAPH",
      graph: height,
      totalsalary: totalsalary,
    });
  }, [salaryDataState.datainput, salaryDataState.saraly]);

  //determining if the total expense exceeds the budget
  const maxheight = Math.max(salaryDataState.maxamount, salaryDataState.saraly);
  //if exceeds the budget line will change height position depends in its percentage in total expense
  const lineheight = (salaryDataState.saraly * 100) / maxheight;

  //setting or updating the budget amount
  function updateSalaryHandler(event) {
    if (event.key === "Enter") {
      setSalaryDataState({ type: "SALARY", salary: event.target.value });
      setIsUpdating(false);
    }
  }

  //--------END-OF---------BUDGET VISUALIZATION DATA---------//

  //--------START-OF---------BUDGET TABLE-----------------//

  //rendering the bars in graph
  const salarycontent = salaryDataState.datagraph.map((item, i) => {
    //determining if the budget or the total expense is the 100% height
    const maxheight = Math.max(salaryDataState.maxamount, salaryDataState.saraly);
    const debug = salaryDataState.datainput[i] ? salaryDataState.datainput[i] : 0;
    //percentage of height of the added expense  "the red bar in the graph"
    const addheight = (debug.cost * 100) / item;
    //percentage of the height in current index
    const height = (item * 100) / maxheight;
    return (
      <>
        <div className={classes.expensetotal} id={i} style={{ height: `${height}%` }} onMouseEnter={onReviewHandler}>
          <div id={i} className={classes.expensecurrent} style={{ height: `${addheight}%` }}></div>
        </div>
      </>
    );
  });

  //rendering the budget line in the graph
  const salary = (
    <div className={classes.graph}>
      <div style={{ bottom: `${lineheight}%` }} className={classes.line}>
        <div className={classes.test} onClick={updatingHandler}>
          Budget: ₱{salaryDataState.saraly}
        </div>
        {isUpdating && <input type="number" onKeyDown={updateSalaryHandler}></input>}
      </div>
      {salarycontent}
    </div>
  );
  //-------END-OF-----------BUDGET TABLE-----------------//

  //-------START-OF----------EXPENSE VISUALIZATION DATA---------//

  //to be called after submiting new data
  //to calculate total height of the bar in graph
  useEffect(() => {
    function calculateMax() {
      //setting all expense amount into one array
      const array = expensesDataState.datainput.map((item) => {
        return +item.cost;
      });
      return array;
    }
    //to calculate height for each index in the array
    const height = calculateMax();
    //to get the total expense amount
    const total = calculateMax().reduce((acc, item) => {
      return acc + item;
    }, 0);
    //set to the bar graph table " for visualization"
    setExpensesDataState({ type: "GRAPH", graph: height, total: total });
  }, [expensesDataState.datainput]);

  //to view the output data in output table when hovering the graph, whether in expense tracker or budget planner
  function onReviewHandler(event) {
    //data to be outputed {"expense amount, description and date"}
    const unite = typeOfTrack.expense ? expensesDataState : salaryDataState;
    const amnt = unite.datainput[event.target.id].cost;
    const nme = unite.datainput[event.target.id].name;
    const dys = unite.datainput[event.target.id].date.day;
    const dts = unite.datainput[event.target.id].date.date;
    const dte = dys + " " + dts;
    const setUnite = typeOfTrack.expense ? setExpensesDataState : setSalaryDataState;
    //setting data into the ouput table
    setUnite({
      type: "OUTPUT",
      lamount: amnt,
      lanme: nme,
      ldate: dte,
    });
  }
  //--------END-OF-------------EXPENSE VISUALIZATION DATA---------//

  //--------START-OF----------EXPENSE TABLE-----------------//

  //rendering the bars in the graph
  const expensecontent = expensesDataState.datainput.map((item, i) => {
    const height = (item.cost * 100) / expensesDataState.maxexpense;
    return (
      <>
        <div id={i} className={classes.expenses} style={{ height: `${height}%` }} onMouseEnter={onReviewHandler}></div>
      </>
    );
  });

  const expense = <div className={classes.graph}>{expensecontent}</div>;

  //-------END-OF-----------EXPENSE TABLE-----------------//

  //-------START-OF----------INCOME VISUALIZATION DATA---------//

  //to be called after submiting new data
  //to calculate if the data is above or below the average
  useEffect(() => {
    function calculateHeight() {
      //setting all data amount into one array
      const array = incomeDataState.datainput.map((item) => {
        return +item.cost;
      });
      //setting all positives and negatives from subtracting the average into one array
      const ddayarray = array.map((item) => {
        return item - incomeDataState.averageincome;
      });
      //total of all prositives from subtracting the average
      const goodday = ddayarray
        .filter((item) => item >= 0)
        .reduce((acc, item) => {
          return acc + item;
        }, 0);
      //total of all negatives from subtracting the average
      const badday = ddayarray
        .filter((item) => item < 0)
        .reduce((acc, item) => {
          return acc + item;
        }, 0);
      //result, determining if you earn or lost a money
      const dayreport = ddayarray.reduce((acc, item) => {
        return acc + item;
      }, 0);
      //to be set
      return [array, ddayarray, goodday, badday, dayreport];
    }
    //destructuring and set into the bar graph table and output table  "for visualization"
    const [height, dday, goodday, badday, dayreport] = calculateHeight();
    setIncomeDataState({
      type: "GRAPH",
      graph: height,
      ddays: dday,
      gooddays: goodday,
      baddays: badday,
      report: dayreport,
    });
  }, [incomeDataState.datainput, incomeDataState.averageincome]);

  //determining the max height
  const maxincomeheight = Math.max(incomeDataState.averageincome, incomeDataState.maxheight);
  //setting the position height of average line
  let incomeaveheight = (incomeDataState.averageincome * 100) / maxincomeheight;

  //to open for updating or seting average data
  function updatingHandler() {
    setIsUpdating(true);
  }
  //setting or updating the average income
  function updateAveIncomeHandler(event) {
    if (event.key === "Enter") {
      setIncomeDataState({ type: "INCOME", income: event.target.value });
      setIsUpdating(false);
    }
  }

  //to view the output data in output table when hovering the bars in graph
  function onDataReviewHandler(event) {
    setIsReviewing(true);
    //data to be review
    const dday = incomeDataState.dataoutput.ddays[event.target.id];
    const amm = incomeDataState.datainput[event.target.id].cost;
    const nam = incomeDataState.datainput[event.target.id].name;
    const dd = incomeDataState.datainput[event.target.id].date.day;
    const dt = incomeDataState.datainput[event.target.id].date.date;
    const dat = dd + " " + dt;
    //seting data into the output table
    setIncomeDataState({
      type: "REVIEW",
      dday: dday,
      amount: amm,
      name: nam,
      date: dat,
    });
  }

  //back to defaul when mouse leave the bars in the graph, "default = reviewing the total positives and total negatives"
  function onDataSumaryViewHandler(event) {
    setIsReviewing(false);
  }

  //-----------------INCOME VISUALIZATION DATA---------//
  //------------------INCOME TABLE-----------------//

  //rendering the bars in the graph
  const incomecontent = incomeDataState.datainput.map((item, i) => {
    //initial data
    let color = "white";
    let height = incomeaveheight;
    let curheight = 0;
    //height percentage of the positives data
    if (+item.cost > +incomeDataState.averageincome) {
      height = (item.cost * 100) / maxincomeheight;
      curheight = 100 - (incomeDataState.averageincome * 100) / item.cost;
      color = "aqua";
    }
    //height percentage of the negatives data
    if (+item.cost < +incomeDataState.averageincome) {
      height = incomeaveheight;
      curheight = 100 - (item.cost * 100) / incomeDataState.averageincome;
      color = "crimson";
    }
    return (
      <>
        <div className={classes.average} id={i} style={{ height: `${height}%` }} onMouseEnter={onDataReviewHandler} onMouseLeave={onDataSumaryViewHandler}>
          <div className={classes.rate} style={{ height: `${curheight}%`, backgroundColor: color }} id={i}></div>
        </div>
      </>
    );
  });

  //rendering the average line in the graph
  const income = (
    <div className={classes.graph}>
      <div style={{ bottom: `${incomeaveheight}%` }} className={classes.line}>
        <div className={classes.test} onClick={updatingHandler}>
          Average: ₱{incomeDataState.averageincome}
        </div>
        {isUpdating && <input type="number" onKeyDown={updateAveIncomeHandler}></input>}
      </div>
      {incomecontent}
    </div>
  );

  //------END-OF------------INCOME TABLE-----------------//

  //------END-OF-----------------------------------------------------------VISUALGRAPH--------------------//

  //------START-OF-----------------------------------------------------------OUTPUT--------------------//

  //-------START-OF----------OUTPUT DATA-------------------------//

  //The title of the output in the output table
  const outputtitle = typeOfTrack.expense ? "EXPENSES" : typeOfTrack.budget ? "BUDGET" : "DATA";

  //if monitoring data , color "aqua" for al positives., color "crimson" for all negatives
  const repcolor = incomeDataState.dataoutput.report >= 0 ? "aqua" : "crimson";
  const ddayrev = incomeDataState.datareview.dday >= 0;
  const ddaycol = ddayrev ? "aqua" : "crimson";

  //Total amount of expense in expense tracker
  const outputexptotal = (
    <>
      TOTAL Expense: <span>₱{expensesDataState.totalexpense}</span>
    </>
  );

  //the remaining amount of budget in budget planner
  const outputremtotal = (
    <>
      REMAINING: <span>₱{salaryDataState.remaining}</span>
    </>
  );

  //The Result if your earn or lost money in monitoring business daily income
  const outputreptotal = (
    <>
      REPORT:
      <span style={{ color: repcolor }} className={classes.totalreport}>
        Total {incomeDataState.dataoutput.report >= 0 ? "Earn" : "Lost"} ₱{incomeDataState.dataoutput.report}
      </span>
    </>
  );

  //getting data to be output
  const unitedstate = typeOfTrack.expense ? expensesDataState : salaryDataState;

  //output Table for reviewing expense data when hovering the bars in the graph
  const outputexpsumary = (
    <>
      <div className={classes.sumryprops}>
        Amount:
        <span className={classes.animation}>₱{unitedstate.dataoutput.amount}</span>
      </div>
      <div className={classes.sumrysubt}>
        <span className={classes.animation}>{unitedstate.dataoutput.name}</span>
        <span className={classes.animation}>{unitedstate.dataoutput.date}</span>
      </div>
    </>
  );

  //output Table for reviewing the totals of positives and negatives
  const outputrepsumary = (
    <>
      <div className={classes.sumrygood}>
        Good days total earn:
        <span className={classes.animation}>+₱{incomeDataState.dataoutput.totalgooddays}</span>
      </div>
      <div className={classes.sumrybad}>
        Bad days total lost:
        <span className={classes.animation}>-₱{incomeDataState.dataoutput.totalbaddays * -1}</span>
      </div>
    </>
  );

  //output Table for reviewing data of incomes when hovering the bars in the graph
  const outputrevsumary = (
    <>
      <div className={classes.sumryprops} style={{ color: ddaycol }}>
        {ddayrev ? "Above" : "Below"} average of:
        <span>
          {ddayrev ? "+" : "-"}₱{Math.abs(incomeDataState.datareview.dday)}
        </span>
      </div>
      <div className={classes.sumrysubt}>
        <span>{incomeDataState.datareview.name}</span>
        <span>{incomeDataState.datareview.date}</span>
        <span>${incomeDataState.datareview.amount}</span>
      </div>
    </>
  );

  //data to be rendered
  const outputtotal = typeOfTrack.budget ? outputremtotal : typeOfTrack.expense ? outputexptotal : outputreptotal;
  const outputsumary = typeOfTrack.income ? (isReviewing ? outputrevsumary : outputrepsumary) : outputexpsumary;

  //------END-OF-----------OUTPUT DATA-------------------------//

  //------START-OF------------OUTPUT TABLE-----------------//

  //rendering output table with data
  const sumarytable = (
    <>
      <div className={classes.title}>{outputtitle}</div>
      <div className={classes.sumary}>{outputsumary}</div>
      <div className={classes.total}>{outputtotal}</div>
    </>
  );
  //------END-OF-----------OUTPUT TABLE-----------------//

  //------END-OF----------------------------------------------------------OUTPUT--------------------//

  //------START-OF-----------------------------------------------------------HEAD--------------------//

  //navigating whether expense tracker, budget planer or monitor income
  function onChangeToBudgetHandler() {
    setTypeOfTrack({ type: "BUDGET" });
  }
  function onChangeToExpenseHandler() {
    setTypeOfTrack({ type: "EXPENSE" });
  }
  function onChangeToIncomeHandler() {
    setTypeOfTrack({ type: "INCOME" });
  }

  //setting Head title
  const heading = typeOfTrack.budget ? "Budget Planner" : typeOfTrack.expense ? "Expense Tracker" : "Monitor Daily Income";

  //rendering Heading
  const headtitle = (
    <>
      <h2 className={classes.heading}>{heading}</h2>
      <div>
        {!typeOfTrack.budget && (
          <button className={classes.btn} onClick={onChangeToBudgetHandler}>
            budget planner
          </button>
        )}
        {!typeOfTrack.income && (
          <button className={classes.btn} onClick={onChangeToIncomeHandler}>
            monitor income
          </button>
        )}
        {!typeOfTrack.expense && (
          <button className={classes.btn} onClick={onChangeToExpenseHandler}>
            expense tracker
          </button>
        )}
      </div>
    </>
  );
  //--------END-OF---------------------------------------------------------HEAD--------------------//

  //--------START-OF---------------------------------------------------------CALCULATOR--------------------//

  function onInputToHandler(event) {
    const cur = calculatorstate.operation === "=" ? "" : calculatorstate.current.toString();
    if (event.target.innerText === "." && cur.includes(".")) return;
    const current = cur + event.target.innerText.toString();
    setCalculatorState({ type: "INPUT", current: current });
  }
  function onToOperateHandler(event) {
    const cur = calculatorstate.current.toString();
    const prev = calculatorstate.previous.toString();
    const oprt = event.target.innerText;

    if (cur === "" || cur === ".") {
      const operator = oprt === "=" ? undefined : oprt;
      setCalculatorState({ type: "OPERATOR", operator: operator });
      return;
    }
    if (prev !== "") setCalculatorState({ type: "COMPUTE", operator: oprt });
    if (prev === "") setCalculatorState({ type: "MOVE", previous: cur, operator: oprt });
  }
  function onToDeleteHandler(event) {
    if (event.target.innerText === "del") setCalculatorState({ type: "DELETE" });
    if (event.target.innerText === "ac") setCalculatorState({ type: "CLEAR" });
  }

  const numberbtns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."].map((item) => {
    return (
      <button className={classes.number} onClick={onInputToHandler}>
        {item}
      </button>
    );
  });
  const operatorbtns = ["+", "-", "*", "÷"].map((item) => {
    return (
      <button className={classes.operator} onClick={onToOperateHandler}>
        {item}
      </button>
    );
  });
  const calculator = (
    <div className={classes.calcu}>
      <div className={classes.prev}>
        {calculatorstate.previous}
        {calculatorstate.operation}
      </div>
      <div className={classes.cur}>{calculatorstate.current}</div>
      <div className={classes.acdel}>
        <button className={classes.ac} onClick={onToDeleteHandler}>
          ac
        </button>
        <button className={classes.del} onClick={onToDeleteHandler}>
          del
        </button>
      </div>
      <div className={classes.operators}>{operatorbtns}</div>
      <div className={classes.numbers}>
        {numberbtns}
        <button className={classes.equals} onClick={onToOperateHandler}>
          =
        </button>
      </div>
    </div>
  );

  //----------END-OF-------------------------------------------------------CALCULATOR--------------------//

  return (
    <div className={classes.trackinglist}>
      <div className={classes.headtitle}>{headtitle}</div>
      <div className={classes.inputlist}>
        {datatable}
        {!isAddingState && addingtable}
        {isAddingState && addicon}
      </div>
      <div className={classes.outputlist}>{sumarytable}</div>
      <div className={classes.visualgraph}>{typeOfTrack.budget ? salary : typeOfTrack.expense ? expense : income}</div>
      <div className={classes.calculator}>{calculator}</div>
    </div>
  );
}

export default Trackinglist;
