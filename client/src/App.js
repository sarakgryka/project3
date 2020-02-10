import React, { Component } from "react";
import { useAuth0 } from "./react-auth0-spa";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import MyAccount from "./pages/myAccount";
import Trips from "./pages/trips";
import history from "./utils/history";


// higher order component
/*
const { loading, user } = useAuth0();
    console.log(user)
    if (loading) {
      return <div>Loading...</div>;
    }
  was used in class (which you cannot do because it's a hook)
  can be converted to a functional component as a wrapper
  shown below
*/
function withAuth0(WrappedComponent) {
  return function WrappedWithAuth0(props) {
    const { loading, user } = useAuth0();
    // let loading = false;
    // let user = {
    //   nickname: "mwilliams2964",
    //   name: "mwilliams2964@gmail.com",
    //   picture: "https://s.gravatar.com/avatar/d557750bec05be4802cb6d3aa7a570c6?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fmw.png",
    //   updated_at: "2020-02-10T04:20:12.726Z",
    //   email: "mwilliams2964@gmail.com",
    //   email_verified: true,
    //   sub: "auth0|5e2a630654617b0e7cb9cfe7"
    // }
    // let loading = false;
    console.log(user);
    return <WrappedComponent loading={loading} user={user} {...props} />;
  }
}

class App extends Component {
  state = {
    value: "",
    steps: [],
    startCoords: {},
    endCoords: {},
    placesOfInterest: [],
    lodging: [],
    restaurants: []
  };
  render() {
    if (this.props.loading) {
      return <div>Loading...</div>;

    }

    return (
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => <Home state={this.state} />} />
            <Route exact path="/myAccount" render={() => <MyAccount setState={this.setState.bind(this)} state={this.state} />} />
            <Route exact path="/trips" render={() => <Trips setState={this.setState.bind(this)} state={this.state} />} />
            <Route exact path="/alltrips" />
          </Switch>
        </div>
      </Router>
    )
  }
}

////////////////////////////////////
// function App() {
//   const { loading, user } = useAuth0();
//   console.log(user)


//   return (

//     <Router history={history}>
//       <div className="App">
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/myAccount" component={MyAccount} />
//           <Route exact path="/trips" component={Trips} />
//           <Route exact path="/alltrips" />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

export default withAuth0(App);