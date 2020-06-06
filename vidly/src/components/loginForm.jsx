import React, { Component } from "react";
import Input from "../common/input";

class LoginForm extends Component {
  username = React.createRef();
  state = { account: { username: "", password: "", errors: {} } };

  validate = () => {
    return { username: "Username is required" };
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;
    //call server
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
          <Input
            name="username"
            value={account.username}
            onChange={this.handleChange}
            label="Username"
          />
          <Input
            name="password"
            value={account.password}
            onChange={this.handleChange}
            label="Password"
          />

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
