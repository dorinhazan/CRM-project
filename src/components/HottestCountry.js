import React, { Component } from 'react';

class HottestCountry extends Component {
    constructor() {
        super()
        this.state = {}
    }

    hottestCountry = () => {
        let countries = {}
        let max = 0
        let result = ""
        this.props.data.map(c => {
            if (countries[c.country]) {
                countries[c.country]++
            }
            else {
                countries[c.country] = 1
            }
            for (let country in countries) {
                if (countries[country] > max) {
                    max = countries[country]
                    result = country
                }
            }
        })
        return result
    }

    render() {
        return (<div>
            <img src="https://i.gyazo.com/3f3dc80bd7bf041290c42a3a1c8d2c5c.png" width="40"></img> <span>{this.hottestCountry()}</span><span> Hottest Country</span>
        </div>
        )
    }
}

export default HottestCountry
