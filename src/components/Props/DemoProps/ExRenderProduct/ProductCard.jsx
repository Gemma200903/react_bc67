import React, { Component } from "react";

export default class ProductCard extends Component {
  render() {

    let {productInfo} = this.props;

    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={productInfo.img} className="card-img-top" alt="..." height={200} />
        <div className="card-body">
          <p><span className="fw-bold">Product Name:</span> {productInfo.productName}</p>
          <p><span className="fw-bold">Price:</span>{productInfo.price}</p>
          <p><span className="fw-bold">Description:</span> {productInfo.des}</p>
          
        </div>
      </div>
    );
  }
}
