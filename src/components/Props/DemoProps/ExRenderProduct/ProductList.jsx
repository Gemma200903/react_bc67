import React, { Component } from 'react'
import ProductCard from './ProductCard'

const listProduct = [
    {
        img: "https://picsum.photos/id/20/200/200",
        productName: "Nike Air Max 270 Sneakers",
        price: 2000,
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, atque!",

    },
    {
        img: "https://picsum.photos/id/15/200/200",
        productName: "Ray-Ban Aviator Sunglasses",
        price: 2000,
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, atque!",

    },
    {
        img: "https://picsum.photos/id/12/200/200",
        productName: "Chanel Classic Flap Bag",
        price: 2000,
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, atque!",

    },
]


export default class ProductList extends Component {
    renderProductCard = () =>{
        return listProduct.map((product) =>{
            return <ProductCard productInfo ={product}></ProductCard>
        })
    }
  render() {
    return (
      <div className='container'>
        <div className="d-flex justify-content-around">
            {this.renderProductCard()}
        </div>
      </div>
    )
  }
}
