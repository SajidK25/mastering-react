import React from "react";

const Input = ({ value, name, onChange, label }) => {
  return (
    <div className="from-group">
      <label htmlFor="username">{label}</label>
      <input
        autoFocus
        value={value}
        name={name}
        onChange={onChange}
        id={name}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default Input;
