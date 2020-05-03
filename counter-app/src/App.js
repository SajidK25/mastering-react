import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log("Constructor - render");
  }
  componentDidMount() {
    console.log("component - Mount");
  }

  handleIncreament = (counter) => {
    // console.log("Increment", counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter); //parameter's counter
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    // counters[0].value++;
    // console.log(counters[0]);
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter); //parameter's counter
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  render() {
    console.log("App - render");
    return (
      <React.Fragment>
        <NavBar totalCounter={this.state.counters.length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncreament={this.handleIncreament}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
