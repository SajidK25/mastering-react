import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.counter.value,
  };

  handleIncreament = (product) => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncreament({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increament
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          {" "}
          Delete
        </button>
      </div>
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
