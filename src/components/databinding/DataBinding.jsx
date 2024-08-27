import React, { Component } from "react";

export default class DataBinding extends Component {

     title = "hello bc67";
     person = {
        name: "Sam",
        age: 21,
        avt: 'https://i.pinimg.com/564x/a6/d3/01/a6d3011080d6bc6ec0ca1bb4dee1b28c.jpg',
      };
      renderContent = () =>{
        // return "Today is Thursday"
        let content1 = "Today is Monday";
        let content2 = "Today is Tuesday";
        let today = 1;
        if (today==1){
            return content1;
        }else{
            return content2;
        }
    }


  render() {


    return (
      <div>
        <p id="txt">{this.title}</p>

        <div className="card" style={{ width: "18rem" }}>
          <img src={this.person.avt} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.person.name}</h5>
            <p className="card-text">
              {this.person.age}
            </p>
          </div>
        </div>

        <p>{this.renderContent()}</p>
      </div>
    );
  }
}
