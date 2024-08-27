import React, { Component } from 'react'
import Card from './Card'
import ProductProps from './ProductProps'
import PersonCard from './PersonCard'

export default class DemoProps extends Component {

  render() {
    let student = {
      name: "Veera",
      dateOfBirth: "2003",
      avt: "https://i.pravatar.cc?u=54",
      major: "IT",
      grade: "Merit"
    }
    return (
      <div className='container'>
        <div className="d-flex justify-content-around mt-5">
          <div className="w-25">
            <Card name = "Superman" age = {20}  picUrl = "https://i.pravatar.cc?u=15"></Card>
          </div>
          <div className="w-25">
            <Card name = "Arthur" age = {30} picUrl = "https://i.pravatar.cc?u=28"></Card>
          </div>
          <div className="w-25">
            <Card name = "Florentino" age = {40} picUrl = "https://i.pravatar.cc?u=24"></Card>
          </div>
        </div>

        <ProductProps productName ="iphone" price ={5000} picUrl = "https://i.pravatar.cc?u=52"></ProductProps>
        
        <PersonCard studentOb={student}></PersonCard>

      </div>
    )
  }
}
