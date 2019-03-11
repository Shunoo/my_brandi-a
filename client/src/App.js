import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    response: ""
  };

  componentDidMount() {
    const testing = this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
    console.log(testing);
  }

  //exemplo
  callApi = async () => {
    const response = await fetch("/api/mensagem");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return <div />;
  }
}

export default App;
