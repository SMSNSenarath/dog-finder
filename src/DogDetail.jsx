import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DogDetails.css";

class DogDetails extends Component {
  render() {
    let { dog } = this.props;
    return (
      <div className="container">
        <div className="DogDetails row">
          <div className="col-11 col-lg-5">
            <div className="DogDetails-card card">
              <img src={dog.src} className="card-img-top" alt={dog.name} />
              <div className="card-body">
                <h2 className="cart-title">{dog.name}</h2>
                <h4 className="card-subtitle text-muted">
                  {dog.age} years old
                </h4>
              </div>
              <ul className="list-group list-group-flush">
                {dog.facts.map((fact, i) => (
                  <li className="list-group-item" key={i}>
                    {fact}
                  </li>
                ))}
              </ul>
              <div className="card-body">Go Back</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DogDetails;