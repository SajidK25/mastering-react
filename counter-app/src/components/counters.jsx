import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - render");
    const {
      onReset,
      counters,
      onIncreament,
      onDecrement,
      onDelete,
    } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncreament={onIncreament}
            onDecrement={onDecrement}
            counter={counter}
            // value={counter.value}
            // id={counter.id}
            // selected
          >
            <h4>Counter # {counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
