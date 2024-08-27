import React, { Component } from 'react'

/**
 * 1. Xây dựng giao diện hoàn chỉnh 100%
 * 2. Xác nhận state là gì (string, number, bolean ?)
 * 3. Binding state lên giao diện
 * 4. Xử lý sự kiện để thay đổi state => this.setState()
 */

export default class ChangeColor extends Component {
    state ={
        color: "green",
    };
  render() {
    return (
      <div>
        <i style={
            {
                fontSize: 40,
                color: this.state.color,
            }
        } class="fa-light fa-truck-fast"></i>
        

        <br />
        
        <button onClick={()=>{
            this.setState({
                color: 'green',
            });
            
        }} className="btn btn-success">Xanh lá</button>

        <button onClick={()=>{
            this.setState({
                color: "blue",
            });
        }} className="btn btn-primary">Xanh dương</button>

        <button onClick={()=>{
            this.setState({
                color: "red",
            });
        }} className="btn btn-danger">Đỏ</button>

      </div>
    )
  }
}
