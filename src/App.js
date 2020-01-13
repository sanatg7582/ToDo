import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ToDO from "./Component/ToDo";

const App = () => {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route path="/" component={ToDO} exact />

        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
