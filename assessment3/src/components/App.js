import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignIn from "./SignIn";
import Profile from "./Profile";

class App extends Component {

  render() {
    return (
      <div className="App">
        {this.props.loggedInUser ? 
          <Profile /> :
          <SignIn />
        }        
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser
  };
}

export default connect(mapStateToProps)(App);
