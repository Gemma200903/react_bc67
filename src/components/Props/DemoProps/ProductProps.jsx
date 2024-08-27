import React, { Component } from 'react'

export default class ProductProps extends Component {
  render() {
    let {productName, price, picUrl} = this.props;
    return (
      <div className='card mt-5'>
        <img width={70} height={70} src={picUrl} alt="" />
        <div className="card-body">
            <p>{productName}</p>
            <p>{price}</p>
        </div>
      </div>
    )
  }
}
