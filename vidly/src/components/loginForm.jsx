import React, { Component } from "react";

class LoginForm extends Component {
  username = React.createRef();
  state = { account: { username: "", password: "" } };
  handleSubmit = (e) => {
    e.preventDefault();
    //call server
    const username = this.username.current.value;
    console.log("submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="from-group">
            <label htmlFor="username">User Name</label>
            <input
              autoFocus
              value={account.username}
              name="username"
              onChange={this.handleChange}
              ref={this.username}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="from-group">
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              name="password"
              onChange={this.handleChange}
              id="password"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
