import React, { Component } from "react";
import ListPhone from "./ListPhone";
import CartPhone from "./CartPhone";

const arrayIphone = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];

export default class ExPhoneCart extends Component {
  state = {
    arrayCartPhone: [
      {
        maSP: 1,
        tenSP: "VinSmart Live",
        manHinh: "AMOLED, 6.2, Full HD+",
        heDieuHanh: "Android 9.0 (Pie)",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 5700000,
        hinhAnh: "./img/vsphone.jpg",
        soLuong: 3,
      },
      {
        maSP: 2,
        tenSP: "Meizu 16Xs",
        manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
        heDieuHanh: "Android 9.0 (Pie); Flyme",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 7600000,
        hinhAnh: "./img/meizuphone.jpg",
        soLuong: 4,
      },
    ],
  };

  handleAddProToCart = (phoneClick) => {
    console.log("🚀 ~ ExPhoneCart ~ phoneClick:", phoneClick);
    // clone lại giỏ hàng hiện tại
    let arrCartNow = [...this.state.arrayCartPhone];

    // check pro đã tồn tại trong giỏ hàng hay chưa
    /**
     * find(): trả về nguyên thông tin phần từ
     * findIndex(): trả về vị trí phần tử đó
     */
    let findIphone = arrCartNow.find(
      (iphone) => iphone.maSP === phoneClick.maSP
    );
    if (findIphone) {
      findIphone.soLuong += 1;
    } else {
      let iphoneCart = { ...phoneClick, soLuong: 1 };
      arrCartNow.push(iphoneCart);
    }

    // trước khi thêm phone vào giỏ hàng thì thêm key là số lượng
    // let iphoneCart = {...phoneClick, soLuong: 1};
    // arrCartNow.push(iphoneCart);

    this.setState({
      arrayCartPhone: arrCartNow,
    });
  };

  handleDeleteCartItem = (id) => {
  console.log("🚀 ~ ExPhoneCart ~ id:", id);

  // clone lại giỏ hàng hiện tại
  let arrCartNow = [...this.state.arrayCartPhone];
  // Cách 1: findIndex()
  // let index = arrCartNow.findIndex((iphone)=> iphone.maSP === id)

  // if(index !== -1){
  //   arrCartNow.splice(index, 1);
  // }

  // Cách 2:
  // sử dung filter() để xóa
  arrCartNow = arrCartNow.filter((iphone)=> iphone.maSP !== id);

  this.setState({
    arrayCartPhone: arrCartNow,
  })


  };

  handleChangeQuantity = (productIdClick, quantity) =>{

    // clone giỏ hàng
    let arrCartNow = [...this.state.arrayCartPhone];

    // tìm sp click change quantity
    let phoneClick = arrCartNow.find((phone)=> phone.maSP == productIdClick);

    // nếu sp tồn tại thì 
    if(phoneClick){
      phoneClick.soLuong += quantity;

      if(phoneClick.soLuong < 1){
        this.handleDeleteCartItem(productIdClick);
        return;
    
      }
    }
   

    this.setState({
      arrayCartPhone: arrCartNow,
    })

    // ấn nút + => 3 + 1 = 4


    // ấn nut  => 3 + -1 =2

  }

  render() {
    return (
      <div className="container">
        <ListPhone
          arrayIphone={arrayIphone}
          handleAddProToCart={this.handleAddProToCart}
        ></ListPhone>
        <CartPhone
          dataCart={this.state.arrayCartPhone}
          deleteDataCart={this.handleDeleteCartItem}
          handleChangeQuantity = {this.handleChangeQuantity}
        ></CartPhone>
      </div>
    );
  }
}
