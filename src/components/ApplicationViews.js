import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import CandyList from "./candy/CandyList"
// import CandyTypeList from "./candyType/CandyTypeList"

export default class ApplicationViews extends Component {

candyLocationsFromAPI = [
{ id: 1, name: "Kandy Store 1", address: "123 Candy Street"},
{ id: 2, name: "Kandy Store 2", address: "456 S. Candy Ave"},
{ id: 3, name: "Kandy Store 3", address: "789 N. Candy Blvd"}
]

employeesFromAPI = [
    {id: 1, name: "Jonathan Sugaaddict"},
    {id: 2, name: "Walter Sweettooth"},
    {id: 3, name: "Amy Cavity"}
]

candyTypesFromAPI = [
    {id: 1, name: "Licorice"},
    {id: 2, name: "Candy Bars"},
    {id: 3, name: "Gummies"},
    {id: 4, name: "Hard Candies"}
]

individualCandiesFromAPI = [
    {id: 1, candyTypeId: 1, name: "Strawberry Twizzlers"},
    {id: 2, candyTypeId: 1, name: "Black Licorice"},
    {id: 3, candyTypeId: 2, name: "Snickers"},
    {id: 4, candyTypeId: 2, name: "Peanut Butter Twix"},
    {id: 5, candyTypeId: 3, name: "Hariboo Gummy Bears"},
    {id: 6, candyTypeId: 3, name: "Gummy Worms"},
    {id: 7, candyTypeId: 4, name: "Peppermints"},
    {id: 8, candyTypeId: 4, name: "Butter Scotch"}
]

state = {
    employees: this.employeesFromAPI,
    locations: this.candyLocationsFromAPI,
    candyTypes: this.candyTypesFromAPI,
    candies: this.individualCandiesFromAPI
}

render() {
    return (
        <React.Fragment>
            <Route exact path="/" render={(props) => {
                return <LocationList locations={this.state.locations} />
            }} />
            <Route path="/candies" render={(props) => {
                return <CandyList candies={this.state.candies} candyTypes={this.state.candyTypes} />
            }} />
            <Route path="/employees" render={(props) => {
                return <EmployeeList employees={this.state.employees} />
            }} />
        </React.Fragment>
        )
    }
}

