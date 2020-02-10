import React, { Component } from "react";
import API from "../utils/API";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import AccountDetails from "../components/AccountDetails"


class MyAccount extends Component {

  // deleteTrip = id => {
  //   API.deleteTrip(id)
  //   .then(() => {
  //     API.getAllTrips()
  //   })
  // }

  // handleDelete = id => {
  //   this.deleteTrip(id)
  // }

  render() {
    return (
      <div>
        <NavBar />
        <AccountDetails user={this.props.user} handleDelete={this.props.handleDelete} />
        <Footer />
      </div>
    );
  }
}

// function MyAccount(props) {
//   return (
// <div>
//   <NavBar />
//   <AccountDetails />
//   <Footer />
// </div>
//   );
// }

export default MyAccount;
