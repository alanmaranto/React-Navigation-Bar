import React from "react";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import "./Toolbar.css";

const Toolbar = ({ drawerClickHandler}) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
          <DrawerToggleButton drawerClickHandler={drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <a href="/">The logo</a>
      </div>
      <div className="spacer"/>
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;
