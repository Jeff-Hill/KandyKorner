import React, { Component } from 'react'
import candyimage from "./candyimage.jpg"
import "./Candy.css"


export default class CandyList extends Component {

    render() {
        return(
            <section className="candies">
                {
                    this.props.candies.map(candy =>
                        <div key={candy.id} className="card">
                            <div className= "card-body">
                                <div className="card-title">
                                    <img src={candyimage} className="icon--candy" alt="candy-icon"/>
                {/* Having access to the candy state you can loop through the candies using .find and compare the candyTypeId
                in the CandyList to the candyType.id in the CandyTypeList component */}
                                    <h5>{candy.name}  {" "}of type{" "}
                                    {this.props.candyTypes.find(candyType => candyType.id === candy.candyTypeId).name}</h5>
                                    <button onClick={() => this.props.deleteCandy(candy.id)}
                                        className="card-link">Delete Candy</button>
                                </div>
                            </div>
                        </div>
                        )
                }
            </section>
        )
    }
}