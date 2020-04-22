import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import SavedPage from "./pages/SavedPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/saved" component={SavedPage} />
          <Route exact path="*" component={SearchPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
