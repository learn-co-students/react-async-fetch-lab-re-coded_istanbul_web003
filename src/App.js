// create your App component here
import React, { Component } from "react";

class App extends Component {
  state = {
    fetchedData: "",
  };

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }
  render() {
    return null;
  }
}

export default App;
