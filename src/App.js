import React from "react";
import Toolbar from "./components/Toolbar/Toolbar";
function App() {
  return (
    <div className="App">
      <Toolbar />
      <main style={{ marginTop: '64px'}}>
        <p>Page content</p>
      </main>
    </div>
  );
}

export default App;
