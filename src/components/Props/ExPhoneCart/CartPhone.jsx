import React, { Component } from "react";

export default class CartPhone extends Component {
  renderRowIphone = () => {
    let { dataCart, deleteDataCart, handleChangeQuantity } = this.props;
    return dataCart.map((product) => {
      return (
        <tr>
          <td>{product.tenSP}</td>
          <td>
            <img src={product.hinhAnh} width={50} alt="" />
          </td>
          <td>
            <button
              onClick={() => {
                handleChangeQuantity(product.maSP, -1);
              }}
              className="btn btn-danger"
            >
              -
            </button>
            <span className="mx-3">{product.soLuong}</span>
            <button onClick={() => {
                handleChangeQuantity(product.maSP, +1);
              }} className="btn btn-danger">+</button>
          </td>
          <td>{product.giaBan}</td>
          <td></td>
          <td>
            <button
              onClick={() => {
                deleteDataCart(product.maSP);
              }}
              className="btn btn-primary"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="my-5">
        <h5>Cart</h5>
        <table className="table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderRowIphone()}</tbody>
        </table>
      </div>
    );
  }
}
