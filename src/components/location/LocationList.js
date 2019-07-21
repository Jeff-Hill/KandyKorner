import React, { Component } from 'react'
import locationimage from "./locationimage.jpg"
import "./Location.css"

export default class LocationList extends Component {

    render() {
        return(
            <section className="locations">
                {
                    this.props.locations.map(location =>
                        <div key={location.id} className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    <img src={locationimage} className="icon--location" alt="location-icon"/>
                                    <h5>{location.name}</h5>
                                    <h5>{location.address}</h5>
                                    <button onClick={() => this.props.deleteLocation(location.id)}
                                    className="card-link">Close Location</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </section>
        )
    }
}