import React, { Component } from "react";

class Navbar extends Component {
  render() {
    console.log("NavBar - render");
    const { totalCounter } = this.props;
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Nav{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounter}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
