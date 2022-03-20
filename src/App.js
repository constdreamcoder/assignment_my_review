import React from "react";
import styled from "styled-components";
import { Route, Swtich } from "react-router-dom";

import Home from "./Home";
import Review from "./Review";

function App() {
  const loop_num = [0, 1, 2, 3, 4];
  return (
    <div className="App">
      <Route path="/" exact>
        <Home loop_num={loop_num} />
      </Route>
      <Route path="/review" exact>
        <Review loop_num={loop_num} />
      </Route>
    </div>
  );
}

export default App;
