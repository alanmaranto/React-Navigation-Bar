import React from "react";
import "./Backdrop.css";

const Backdrop = ({ drawerClose }) => (
  <div className="backdrop" onClick={drawerClose}></div>
);

export default Backdrop;
