import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import CandyList from "./candy/CandyList"
import CandyManager from "../modules/CandyManager"
import LocationManager from "../modules/LocationManager"
import EmployeeManager from "../modules/EmployeeManager"
import CandyTypeManager from "../modules/CandyTypeManager"
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

    LocationManager.getAll("locations")
        .then(locations => newState.locations = locations)
    EmployeeManager.getAll("employees")
        .then(employees => newState.employees = employees)
    CandyManager.getAll("candies")
        .then(candies => newState.candies = candies)
    CandyTypeManager.getAll("candyTypes")
        .then(candyTypes => newState.candyTypes = candyTypes)
        .then(() => this.setState(newState))
}

// deleteCandy = id => {
//     return fetch(`http://localhost:5002/candies/${id}`, {
//         method: "DELETE"
//     })
//     .then(e => e.json())
//     .then(() => fetch(`http://localhost:5002/candies`))
//     .then(e => e.json())
//     .then(candies => this.setState({
//         candies: candies
//     })
//   )
// }

deleteCandy = (id) => {
    return CandyManager.removeAndList("candies", id)
    // .then(candies => { this.props.history.push("/candies")
    .then(candies => {
    this.setState({ candies : candies})
    })
  }

deleteEmployee = (id) => {
    return EmployeeManager.removeAndList("employees", id)
      // .then(employees => { this.props.history.push("/employees")
    .then(employees => {
    this.setState({ employees : employees })
    })
}

deleteLocation = (id) => {
    return LocationManager.removeAndList("locations", id)
    .then(locations => {
        this.setState({ locations : locations })
    })
}

deleteCandyType = (id) => {
    return CandyTypeManager.removeAndList("candyTypes", id)
    .then(candyTypes => {
        this.setState({ candyTypes : candyTypes})
    })
}

render() {
    return (
        <React.Fragment>
            <Route exact path="/" render={(props) => {
                return <LocationList locations={this.state.locations} deleteLocation={this.deleteLocation} />
            }} />
            <Route path="/candies" render={(props) => {
                return <CandyList deleteCandy={this.deleteCandy} candies={this.state.candies} candyTypes={this.state.candyTypes} />
            }} />
            <Route path="/employees" render={(props) => {
                return <EmployeeList {...this.props} employees={this.state.employees} deleteEmployee={this.deleteEmployee} />
            }} />
        </React.Fragment>
        )
    }
}

