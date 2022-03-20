import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import Review from "./Review";

function App() {
  const loop_num = [0, 1, 2, 3, 4];
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home loop_num={loop_num} />
        </Route>
        <Route path="/review/:day_name" exact>
          <Review loop_num={loop_num} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
