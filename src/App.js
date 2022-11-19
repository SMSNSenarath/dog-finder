import React, { Component } from "react";
import Navbar from "./Navbar";
import Routes from "./Routes";
import "./App.css";

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Fuzzy",
        age: 3,
        src: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        facts: [
          "Fuzzy loves eating popcorn.",
          "Fuzzy is a terrible guard dog.",
          "Fuzzy wants to cuddle with you!",
        ],
      },
      {
        name: "Dolly",
        age: 4,
        src: "https://images.unsplash.com/photo-1575859431774-2e57ed632664?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        facts: [
          "Dolly has soo much energy!",
          "Dolly is highly intelligen.t",
          "Dolly loves people more than dogs.",
        ],
      },
      {
        name: "Rowdy",
        age: 5,
        src: "https://images.unsplash.com/photo-1585559700398-1385b3a8aeb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        facts: [
          "Rowdy is not the brightest dog.",
          "Rowdy does not like walks or exercise.",
          "Rowdy loves eating food.",
        ],
      },
    ],
  };
  render() {
    return (
      <div className="App">
        <div>
          <Navbar dogs={this.props.dogs} />
          <div className="container">
            <Routes dogs={this.props.dogs} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
