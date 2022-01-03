import React from "react";
import Movie from "./Movie";
import Details from "./Details";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App(){
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Movie} />
        <Route  exact path="/details/:id" component={Details} />
      </Switch>
    </Router>
  )
}

export default App