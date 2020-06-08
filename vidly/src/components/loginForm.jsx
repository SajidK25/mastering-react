import React, { Component } from "react";
import Form from "../common/Form";
import Input from "../common/input";
import Joi from "joi-browser";

class LoginForm extends Form {
  username = React.createRef();
  state = {
    account: { username: "", password: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    //call server
    console.log("submitted");
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            onChange={this.handleChange}
            label="Username"
            errors={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            onChange={this.handleChange}
            label="Password"
            errors={errors.password}
          />

          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
