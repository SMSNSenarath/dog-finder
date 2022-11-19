import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetail";
import "./App.css";

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Fuzzy",
        age: 3,
        src: "Fuzzy.jpg",
        facts: [
          "Fuzzy loves eating popcorn.",
          "Fuzzy is a terrible guard dog.",
          "Fuzzy wants to cuddle with you!",
        ],
      },
      {
        name: "Dolly",
        age: 4,
        src: "Dolly.jpg",
        facts: [
          "Dolly has soo much energy!",
          "Dolly is highly intelligen.t",
          "Dolly loves people more than dogs.",
        ],
      },
      {
        name: "Rowdy",
        age: 5,
        src: "Rowdy.jpg",
        facts: [
          "Rowdy is not the brightest dog.",
          "Rowdy does not like walks or exercise.",
          "Rowdy loves eating food.",
        ],
      },
    ],
  };
  render() {
    const getDog = (props) => {
      let name = props.match.params.name;
      let currentDog = this.props.dogs.find(
        (dog) => dog.name.toLowerCase() === name.toLowerCase()
      );
      return <DogDetails {...props} dog={currentDog} />;
    };
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/dogs"
            render={() => <DogList dogs={this.props.dogs} />}
          />
          <Route exact path="/dogs/:name" render={getDog} />
        </Switch>
      </div>
    );
  }
}

export default App;
