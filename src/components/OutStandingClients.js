import React, { Component } from 'react';

class OutStandingClients extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
 
    outStandingClients = () => {
        let outclients = 0
        this.props.data.map(s => {
            if (s.sold != true) {
                outclients++
            }
        })
        return outclients
    }
    
    render() {
        return (<div>
            <img src="https://i.gyazo.com/67fa879532734959b2be3904a57cc393.png" width="60"></img> <span>{this.outStandingClients()}</span><span id="outStanding"> Outstanding Clients</span>
        </div>
        )
    }
}

export default OutStandingClients
