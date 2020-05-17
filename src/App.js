import React, { Component } from "react";
import {Button} from "./button/Button";
import {Section} from "./section/Section";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getValue = (e) => {
    const name = e.target.name;
    // e.persist();
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
      // [e.target.name]:prevState[e.target.name] +1
    }));
  };

  getTotal = () => {
    const {good, neutral, bad} = this.state;
    return good+neutral+bad
  };

  getPositive = () => {

    const {good} = this.state;
    return (this.getTotal())? Math.round(good*100/this.getTotal()) : 0;
  }


  render() {
    return (
      <>
        <h2>Please Leave feedback</h2>
        <Button getValue={this.getValue} />
        <h2>Statistics</h2>
        {this.getTotal()
        ? < Section  {...this.state } total = {this.getTotal()} positive={this.getPositive()}/>
        : <p>No feedback given</p>}
      </>
    );
  }
}