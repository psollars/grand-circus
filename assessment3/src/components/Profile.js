import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {

  render() {
    return (
      <div className="Profile">
        <h2>Profile</h2>
        <h3>Welcome, {this.props.loggedInUser.name}!</h3>
        <div className="profile-deets">
          <img src={this.props.loggedInUser.img} />
          <ul>
            <li>Email: {this.props.loggedInUser.email}</li>
            <li>Phone Number: {this.props.loggedInUser.phone}</li>
            <li>Location: {this.props.loggedInUser.location}</li>
          </ul>
        </div>
        <a href="#" className="edit">Edit Profile</a>
      </div>
    );
  }

} //end component

function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser
  };
}

export default connect(mapStateToProps)(Profile);
