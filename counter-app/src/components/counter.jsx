import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: [],
  };

  renderList() {
    if (this.state.tags.length === 0) return <h1>There are no tags</h1>;
    else
      return (
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
  }
  render() {
    return (
      <React.Fragment>
        {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increament</button> */}
        {this.state.tags.length === 0 && "Plz insert some tags"}
        <ul>{this.renderList()}</ul>
      </React.Fragment>
    );
  }
  //   getBadgeClasses() {
  //     let classes = "badge m-2 badge-";
  //     classes += this.state.count === 0 ? "warning" : "primary";
  //     return classes;
  //   }

  //   formatCount() {
  //     const { count } = this.state;
  //     return count === 0 ? "Zero" : count;
  //   }
}

export default Counter;
