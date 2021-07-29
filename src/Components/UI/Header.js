import classes from "./Header.module.css";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className={classes.sectionheader}>
      <div className={classes.navs}>
        <div className={classes.nav}>
          <NavLink to="/" className={classes.links}>
            Home
          </NavLink>
        </div>
        <div className={classes.nav}>
          <NavLink to="/about" className={classes.links} activeStyle={{ borderBottom: "5px solid aqua" }}>
            About
          </NavLink>
        </div>
        <div className={classes.nav}>
          <NavLink to="/portfolio" className={classes.links} activeStyle={{ borderBottom: "5px solid aqua" }}>
            Portfolio
          </NavLink>
        </div>
        <div className={classes.nav}>
          <NavLink to="/message" className={classes.links} activeStyle={{ borderBottom: "5px solid aqua" }}>
            Message
          </NavLink>
        </div>
      </div>
      <div className={classes.design}></div>
    </header>
  );
}

export default Header;
