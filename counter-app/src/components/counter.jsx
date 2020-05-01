import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: [],
  };
  //   constructor() {
  //     super();
  //     this.handleIncreament = this.handleIncreament.bind(this);
  //   }
  handleIncreament = () => {
    console.log("increament clicked", this);
  };
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncreament}
          className="btn btn-secondary btn-sm"
        >
          Increament
        </button>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
