import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = () =>{
        console.log('click');
        
    }

    sayHello = (name) =>{
        console.log("Xin chào", name);
        
    }
  render() {
    return (
      <div className='container'>
        
        <button onClick={this.handleClick} className="btn btn-success">Click me</button>

        <button onClick={()=>{
            console.log('nhấn');
            
        }} className="btn btn-primary">Nhấn tôi</button>

        <button onClick={ () =>{
            this.sayHello("Sam")
        }} className="btn btn-danger">Say Hello</button>

        <input onChange={ (e)=>{
            console.log("gõ");
            
        }} type="text" />
      </div>
    )
  }
}
