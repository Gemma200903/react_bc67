import React, { Component } from "react";

export default class CardIphone extends Component {
  render() {
    let {iphone, handleViewDetail } = this.props;
    return (
      <div  className="card col-4">
        <img src={iphone.hinhAnh} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{iphone.tenSP}</h5>
          <button
            onClick={() => {
              handleViewDetail(iphone);
            }}
            className="btn btn-success"
          >
            View Details
          </button>
        </div>
      </div>
    );
  }
}
