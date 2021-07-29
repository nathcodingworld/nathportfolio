import React, { useReducer, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/PortFolio/Portfolio";
import Message from "./Components/Message/Message";
import PFPage from "./Components/UI/PFPage";
import AssasinGuild from "./Game/AssasinGuild";
import Todolist from "./Projects/Todolist";
import Trackinglist from "./Projects/Trackinglist";
import MemoryGame from "./Game/MemoryGame";

function whatContentToShow(state, action) {
  if (action.type === "assasinguild") return { assasinguild: true, memorygame: false, todolist: false, trackinglist: false };
  if (action.type === "todolist") return { todolist: true, memorygame: false, assasinguild: false, trackinglist: false };
  if (action.type === "trackinglist") return { trackinglist: true, memorygame: false, assasinguild: false, todolist: false };
  if (action.type === "memorygame") return { memorygame: true, trackinglist: false, assasinguild: false, todolist: false };
}

function App() {
  const [pageIsShown, setPageIsShown] = useState(false);
  const [showContent, setContentToShow] = useReducer(whatContentToShow, {
    assasinguild: false,
    memorygame: false,
    todolist: false,
    trackinglist: false,
  });

  function showPageHandler(event) {
    setPageIsShown(true);
    setContentToShow({ type: event.target.id });
  }

  function hidePageHandler() {
    setPageIsShown(false);
  }

  function PageEl() {
    if (pageIsShown === false) return "";
    if (pageIsShown === true)
      return (
        <PFPage onClose={hidePageHandler}>
          {showContent.assasinguild && <AssasinGuild></AssasinGuild>}
          {showContent.todolist && <Todolist></Todolist>}
          {showContent.trackinglist && <Trackinglist></Trackinglist>}
          {showContent.memorygame && <MemoryGame></MemoryGame>}
        </PFPage>
      );
  }

  return (
    <Router>
      <PageEl></PageEl>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={1000} classNames="rerun">
              <Switch location={location}>
                <Route path="/" exact>
                  <Home></Home>
                </Route>
                <Route path="/about" exact>
                  <About onOpen={showPageHandler}></About>
                </Route>
                <Route path="/portfolio" exact>
                  <Portfolio id="test" onOpen={showPageHandler}></Portfolio>
                </Route>
                <Route path="/message" exact>
                  <Message></Message>
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Router>
  );
}

export default App;
