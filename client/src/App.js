import React from "react";
import { useAuth0 } from "./react-auth0-spa";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import MyAccount from "./pages/myAccount";
import Trips from "./pages/trips";


function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/myAccount" component={MyAccount} />
          <Route exact path="/trips" component={Trips} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;