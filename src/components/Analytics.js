import React, { Component } from 'react';
import EmailSent from './EmailSent'
import OutStandingClients from './OutStandingClients';
import HottestCountry from './HottestCountry';
import NewClients from './NewClients';
import TopEmpolee from './TopEmploee'
import SalesByCountry from './SalesByCountry';

class Analytics extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div id="analitics">
                <EmailSent data={this.props.data} />
                <OutStandingClients data={this.props.data} />
                <HottestCountry data={this.props.data} />
                <NewClients data={this.props.data} />
                <div id="graph">
                    <TopEmpolee data={this.props.data} />
                    <SalesByCountry data={this.props.data} />
                </div>
            </div>
        )
    }

}

export default Analytics;
