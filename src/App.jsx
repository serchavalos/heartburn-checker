import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Form } from "./pages/form.jsx";
import { Outcome } from "./pages/outcome.jsx";

const App = () => (
  <Router>
    <Route exact path="/" component={Form} />
    <Route
      path="/question/:questionId([a-z\-\_]+)/score/:score(\d+)"
      component={Form}
    />
    <Route path="/outcome/:outcomeId([a-z\-\_]+)" component={Outcome} />
  </Router>
);

export default App;
