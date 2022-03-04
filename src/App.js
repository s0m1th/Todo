import React, { Component } from "react";
import DateComponent from "./components/date";
import List from "./components/list";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <DateComponent />
        <List/>
      </React.Fragment>
    );
  }
}

export default App;
