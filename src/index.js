import React from "react";
import ReactDOM from "react-dom/client";
import { Card } from "./components/Card";
import { Button } from "./components/Button";
import HomeLayout from "./components/HomeLayout/HomeLayout";
import DataBinding from "./components/databinding/DataBinding";
import StyleComponent from "./components/StyleComponent/StyleComponent";
import HandleEvent from "./components/HandleEvent/HandleEvent";
import StateComponent from "./components/StateComponent/StateComponent";
import ChangeColor from "./components/StateComponent/ChangeColor";
import ChangeAvt from "./components/StateComponent/ChangeAvt";
import ChangeCar from "./components/StateComponent/ChangeCar";
import RenderWithMap from "./components/RenderWithMap/RenderWithMap";
import DemoProps from "./components/Props/DemoProps/DemoProps";
import ProductList from "./components/Props/DemoProps/ExRenderProduct/ProductList";
import ExViewDetail from "./components/Props/ExViewDetail/ExViewDetail";
import CardIphone from "./components/Props/ExViewDetail/CardIphone";
import ExPhoneCart from "./components/Props/ExPhoneCart/ExPhoneCart";

// tạo root trên thẻ div #root
const root = ReactDOM.createRoot(document.getElementById("root"));

// jsx
root.render(
  <div>
    {/* <button className='btn btn-success'>Click me</button>
    <Card></Card>
    <Button></Button> */}
    {/* <HomeLayout></HomeLayout> */}

    {/* <DataBinding></DataBinding> */}

    {/* <StyleComponent></StyleComponent>
    <p className="text-cyber">Xin chào bc67</p> */}

    {/* <HandleEvent></HandleEvent> */}
    {/* <StateComponent></StateComponent> */}
    {/* <ChangeColor></ChangeColor> */}
    {/* <ChangeAvt/> */}
    {/* <ChangeCar></ChangeCar> */}
    {/* <RenderWithMap></RenderWithMap> */}
    {/* <DemoProps></DemoProps> */}
    {/* <ProductList></ProductList> */}
    {/* <ExViewDetail></ExViewDetail> */}
    <ExPhoneCart></ExPhoneCart>
  </div>
);
