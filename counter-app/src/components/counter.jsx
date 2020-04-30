import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imgUrl: "http://image.com/200",
  };
  style = {
    fontSize: 20,
    fontWeight: "bold",
  };
  render() {
    return (
      <React.Fragment>
        {/* <image src={this.state.imgUrl}></image> */}
        {/* <span style={this.style} className="badge badge-primary m-2"> */}
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increament</button>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count == 0 ? "Zero" : count;
  }
}

export default Counter;
