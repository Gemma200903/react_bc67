import React, { Component } from "react";

export default class PersonCard extends Component {
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={this.props.studentOb.avt} className="card-img-top" alt="..." />
        <div className="card-body lh-1">
          <p>Student Name: {this.props.studentOb.name} </p>
          <p>Date of birth: {this.props.studentOb.dateOfBirth} </p>
          <p>Major: {this.props.studentOb.major}</p>
          <p>Grade: {this.props.studentOb.grade}</p>
          
          
        </div>
      </div>
    );
  }
}
