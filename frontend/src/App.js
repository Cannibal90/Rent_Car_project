import React from "react";
import "./App.css";
import { HomePage } from "./containers/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CustomerAccessPage } from "./containers/CustomerAccessPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={CustomerAccessPage} />
          <Route path="/register" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
