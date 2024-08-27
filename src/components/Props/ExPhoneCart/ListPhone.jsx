import React, { Component } from "react";

export default class ListPhone extends Component {
  renderListPhone = () => {
    let { arrayIphone, handleAddProToCart } = this.props;

    return arrayIphone.map((iphone) => {
      return (
        <div className="card" style={{ width: "18rem" }}>
          <img src={iphone.hinhAnh} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{iphone.tenSP}</h5>
            <button onClick={()=>{
              handleAddProToCart(iphone)
            }} className="btn btn-success">Add to cart</button>
          </div>
        </div>
      );
    });
  };

  render() {
    return <div className="row">{this.renderListPhone()}</div>;
  }
}
