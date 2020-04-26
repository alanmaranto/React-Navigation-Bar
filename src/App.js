import React, { Component } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleOnClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropOnClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    const { sideDrawerOpen } = this.state;
    let sideDrawer;
    let backdrop;

    if (sideDrawerOpen) {
      backdrop = <Backdrop drawerClose={this.backdropOnClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleOnClickHandler} />
        <SideDrawer showSideDraw={sideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: "64px" }}>
          <p>Page content</p>
        </main>
      </div>
    );
  }
}

export default App;
