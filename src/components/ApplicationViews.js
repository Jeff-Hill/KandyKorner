import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import CandyList from "./candy/CandyList"
// import CandyTypeList from "./candyType/CandyTypeList"

export default class ApplicationViews extends Component {

state = {
    employees: [],
    locations: [],
    candyTypes: [],
    candies: []
}

componentDidMount() {
    const newState = {}

    fetch("http://localhost:5002/locations")
        .then(r => r.json())
        .then(locations => newState.locations = locations)
        .then(() => fetch("http://localhost:5002/employees")
        .then(r => r.json()))
        .then(employees => newState.employees = employees)
        .then(() => fetch("http://localhost:5002/candies")
        .then(r => r.json()))
        .then(candies => newState.candies = candies)
        .then(() => fetch("http://localhost:5002/candyTypes")
        .then(r => r.json()))
        .then(candyTypes => newState.candyTypes = candyTypes)
        .then(() => this.setState(newState))
}

deleteCandy = id => {
    return fetch(`http://localhost:5002/candies/${id}`, {
        method: "DELETE"
    })
    .then(e => e.json())
    .then(() => fetch(`http://localhost:5002/candies`))
    .then(e => e.json())
    .then(candies => this.setState({
        candies: candies
    })
  )
}

render() {
    return (
        <React.Fragment>
            <Route exact path="/" render={(props) => {
                return <LocationList locations={this.state.locations} />
            }} />
            <Route path="/candies" render={(props) => {
                return <CandyList deleteCandy={this.deleteCandy} candies={this.state.candies} candyTypes={this.state.candyTypes} />
            }} />
            <Route path="/employees" render={(props) => {
                return <EmployeeList employees={this.state.employees} />
            }} />
        </React.Fragment>
        )
    }
}

