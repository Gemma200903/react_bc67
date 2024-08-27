import React, { Component } from "react";

export default class ChangeAvt extends Component {
  state = {
    numberAvt: 3,
    age: 18,
  };
  render() {
    return (
      <div className="container">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={`https://i.pravatar.cc?u=${this.state.numberAvt}`}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <button
              onClick={() => {
                let numberRandom = Math.floor(Math.random() * 100);
                this.setState({
                  numberAvt: numberRandom,
                });
              }}
              className="btn btn-success"
            >
              Change Avt
            </button>


              <p>{this.state.age}</p>
            <button onClick={() =>{
              this.setState({
                age: 20,
              })
            }} className="btn btn-primary">Plus age</button>
          </div>
        </div>
      </div>
    );
  }
}
