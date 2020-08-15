import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

class SignIn extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username : "",
      password : ""
    };
  }

  render() {
    return (
      <div className="SignIn">
        <h2>Sign In</h2>
        <form>
            <input className="username" type="text" placeholder="Username" value={this.state.username} onChange={this.handleUsername} />
            <input className="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handlePassword}/>
            <div className="login-btn" onClick={this.handleSubmit}>Sign In</div>
        </form>
        <a href="#" className="forgot">Forgot your password?</a>
      </div>
    );
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    });
  };

  handleSubmit = (event) => {
    // event.preventDefault();
    this.props.login(
      this.state.username, 
      this.state.password
    )
  };

} //end component

const mapActionsToProps = {
  login
};

export default connect(null, mapActionsToProps)(SignIn);
        