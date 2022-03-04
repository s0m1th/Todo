import React, { Component } from "react";

class DateComponent extends Component {

  constructor(){
    super()
    this.state = {
      day: this.getToday(),
    };
  }

  getToday = () => {
    const today = new Date();
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
    };
    const day = today.toLocaleDateString("en-US", options);
    return day
  };

  render() {
    return (
      <div className="box">
        <h1>{this.state.day}</h1>
      </div>
    );
  }
}

export default DateComponent;
