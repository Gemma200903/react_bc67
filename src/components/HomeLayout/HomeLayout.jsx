// react class component

// rcc
import React, { Component } from "react";
import Header from "./Header";
import ContentRed from "./ContentRed";
import ContentBlue from "./ContentBlue";

export default class HomeLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="d-flex">
        <ContentRed></ContentRed>
        <ContentBlue></ContentBlue>


        </div>
      </div>
    );
  }
}
