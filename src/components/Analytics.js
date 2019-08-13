import React, { Component } from 'react';
import EmailSent from './EmailSent'
import OutStandingClients from './OutStandingClients';
import HottestCountry from './HottestCountry';
import NewClients from './NewClients';
import TopEmpolee from './TopEmploee'
import SalesByCountry from './SalesByCountry';
import ClientAcquisition from './ClientAcquisition';
import SalesSience from './SalesSience';

class Analytics extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div id="allAnalitics">
                <div id="analitics">
                    <EmailSent data={this.props.data} />
                    <OutStandingClients data={this.props.data} />
                    <HottestCountry data={this.props.data} />
                    <NewClients data={this.props.data} />
                </div>

                <div id="graph">
                    <h3 className="s">Top Emploees</h3><br></br>
                    <div className="top"> <TopEmpolee data={this.props.data} /></div>
                    <h3 className="s">Sales By Country</h3><br></br>
                    <div className="top"> <SalesByCountry data={this.props.data} /></div>
                    <div className="s"><h3>Client Acquisition</h3>
                        <span id="green">Green: 0-6 Month</span><br></br>
                        <span id="blue">Blue: Current Month</span><br></br>
                        <span id="yellow">Yellow: 6-12 Month</span></div>
                    <div className="top"><ClientAcquisition data={this.props.data} /></div>
                    <h3 className="s">Sales Sience</h3><br></br>
                    <div className="top"><SalesSience data={this.props.data} /></div>

                </div>
            </div>
        )
    }

}

export default Analytics;
