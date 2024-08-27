import React, { Component } from "react";

export default class Card extends Component {
  render() {
    let {name, age, picUrl} = this.props;
    return (
      <div className="card mx-2" style={{ width: "18rem" }}>
        <img src={picUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>{age}</p>
          
        </div>
      </div>
    );
  }
}
