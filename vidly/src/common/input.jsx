import React from "react";

const Input = ({ name, label, errors, ...rest }) => {
  return (
    <div className="from-group">
      <label htmlFor="username">{label}</label>
      <input {...rest} name={name} id={name} className="form-control" />
      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default Input;
