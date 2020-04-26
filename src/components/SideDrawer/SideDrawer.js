import React from "react";
import "./SideDrawer.css";

const SideDrawer = ({ showSideDraw }) => {
    let drawerClasses = 'side-drawer'
    if (showSideDraw) {
        drawerClasses = 'side-drawer open'
    }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
