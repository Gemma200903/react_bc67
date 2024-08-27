// react class component

/**
 * 1. import React, {Component}
 */
import React, {Component} from "react";

// khai báo react class component
export class Button extends Component{


    // render là phương thức của react trả về component
    render(){

        return <button className="btn btn-danger">Click tôi</button>
    }
}