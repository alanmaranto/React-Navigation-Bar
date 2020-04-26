import React from "react";
import './DrawerToggleButton.css';

const DrawerToggleButton = ({ drawerClickHandler }) => (
  <button className="toggle-button" onClick={drawerClickHandler}>
    <div className="toggle-button__line"></div>
    <div className="toggle-button__line"></div>
    <div className="toggle-button__line"></div>
  </button>
);

export default DrawerToggleButton;
