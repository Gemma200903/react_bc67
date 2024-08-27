import React, { Component } from 'react'

export default class StateComponent extends Component {
    state ={
        fSize: 40,
    }
  render() {
    return (
      <div className='container'>
            <p style={{
                fontSize: this.state.fSize,
            }}>Lorem ipsum dolor sit amet.</p>


            <button onClick={()=>{
                let newState = {
                    fSize : this.state.fSize + 1
                }

            // this.setState() là 1 hàm có sẵn của react class component, nó sẽ nhận vào giá trị state mới và gọi hàm render ra giao diện

                this.setState(newState)
            }} className="btn btn-success">+ tăng</button>
      </div>
    )
  }
}
