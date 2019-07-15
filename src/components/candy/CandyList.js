import React, { Component } from 'react'


export default class CandyList extends Component {

    render() {
        return(
            <section className="candies">
                {
                    this.props.candies.map(candy =>
                        <div key={candy.id}>
                            { candy.name }
                             {" "}of type{" "}
                            {
                // Having access to the candy state you can loop through the candies using .find and compare the candyTypeId
                // in the CandyList to the candyType.id in the CandyTypeList component
                                this.props.candyTypes.find(candyType => candyType.id === candy.candyTypeId).name
                            }
                        </div>
                        )
                }
            </section>
        )
    }
}