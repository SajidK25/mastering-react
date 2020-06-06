import React from "react";
const LoginForm = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div className="from-group">
          <label htmlFor="username">User Name</label>
          <input id="username" type="text" className="form-control" />
        </div>
        <div className="from-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="text" className="form-control" />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
