import React, { Component } from "react";

class LoginForm extends Component {
  username = React.createRef();
  //   componentDidMount() {
  //     this.username.current.focus();
  //   }
  handleSubmit = (e) => {
    e.preventDefault();
    //call server
    const username = this.username.current.value;
    console.log("submitted");
  };
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="from-group">
            <label htmlFor="username">User Name</label>
            <input
              autoFocus
              ref={this.username}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="from-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
