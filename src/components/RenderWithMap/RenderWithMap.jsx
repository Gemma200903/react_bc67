import React, { Component } from "react";

const arPhone = [
  {
    id: 1,
    name: "iphone",
    price: 1000,
    img: "https://picsum.photos/id/5/200/200",
  },
  {
    id: 2,
    name: "sam sung",
    price: 1000,
    img: "https://picsum.photos/id/5/200/200",
  },
  {
    id: 3,
    name: "nokia",
    price: 1000,
    img: "https://picsum.photos/id/5/200/200",
  },
];
export default class RenderWithMap extends Component {
  renderLiNamePhone = () => {
    const content = [];
    for (let i = 0; i < arPhone.length; i++) {
      let contentLi = <li key={arPhone[i].id}>{arPhone[i].name}</li>;
      content.push(contentLi);
    }
    return content;

    // return [
    //   <li>{arPhone[0].name}</li>,
    //   <li>{arPhone[1].name}</li>,
    //   <li>{arPhone[2].name}</li>,
    // ];
  };
  renderLiWithMap = () => {
    return arPhone.map((phone, i) => {
      return <li>{phone.name}</li>;
    });
  };

  renderListTrPhone = () => {
    return arPhone.map((phone) => {
      return (
        <tr key={phone.id}>
          <td>{phone.id}</td>
          <td>{phone.name}</td>
          <td>
            <img src={phone.img} alt="" width={50} height={50} />
          </td>
          <td>{phone.price}</td>
        </tr>
      );
    });
  };

  renderListCardPhone = () => {
    return arPhone.map((phone, index) => {
      return (
        <div key={index} className="card" style={{ width: "18rem" }}>
          <img src={phone.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{phone.name}</h5>
            <p>{phone.price}</p>
            <button className="btn btn-success">Buy</button>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        {/* <ul>{[<li key="1">Hôm nay là thứ 6</li>, <li key="2">Bc67</li>]}</ul> */}
        <ul>{this.renderLiWithMap()}</ul>

        <table className="table">
          <thead>
            <tr>
              <td>Stt</td>
              <td>Tên Sản Phẩm</td>
              <td>Hình ảnh</td>
              <td>Gía</td>
            </tr>
          </thead>
          <tbody>{this.renderListTrPhone()}</tbody>
        </table>
        <div className="d-flex justify-content-between">
          {this.renderListCardPhone()}
        </div>
      </div>
    );
  }
}
