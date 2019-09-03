import React, { Component } from "react";
import List from "./components/Container/AnimalsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <List />;
  }
}

export default App;
