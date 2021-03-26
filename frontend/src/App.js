import React from "react";
import "./App.css";
import { HomePage } from "./containers/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CustomerAccessPage } from "./containers/CustomerAccessPage";
import { OffertsPage } from "./containers/OffertsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cars" exact component={OffertsPage} />
          <Route path="/:action" exact component={CustomerAccessPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
