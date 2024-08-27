import React, { Component } from "react";
/**
 * 1. Xây giao diện
 * 2. Xác định state
 * 3. Binding state lên giao giện
 * 4. Xử lý sự kiện => this.setState()
 */
export default class ChangeCar extends Component {
  state = {
    imgUrl: "./img/black-car.jpg",
  };

  handleChangeCar = (url) =>{
    this.setState({
      imgUrl: url,
    })

  }

  render() {
    return (
      <div className="container d-flex">
        <div className="w-50">
          <img width={"100%"} height={"300px"} src={this.state.imgUrl} alt="" />
        </div>
        <div className="w-50">
          <button onClick={()=>{
            this.handleChangeCar('./img/black-car.jpg')
           
          }} className="btn btn-dark">Black</button>
          <button onClick={()=>{
            this.handleChangeCar('./img/silver-car.jpg')
            
          }} className="btn btn-success">Silver</button>
          <button onClick={()=>{
            this.handleChangeCar('./img/red-car.jpg')
           
          }} className="btn btn-danger">Red</button>
        </div>
      </div>
    );
  }
}
