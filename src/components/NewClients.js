import React, { Component } from 'react';
import axios from '../../node_modules/axios'

class NewClients extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            month: ''

        }
    }

    async getClients() {
        let data1 = await axios.get("http://localhost:8089/monthclients")    
        return data1
    }
 
    componentDidMount = async () => {
        const response = await this.getClients()
        this.setState({ count: response.data.length })

        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const date = new Date();
        let currentMonth = months[date.getMonth()]
        this.setState({month: currentMonth})

    }


    render() {

        return (
        <div>
            <img src="https://i.gyazo.com/c730ba62a90e0e3ca56c175f373cf960.png" width="60"></img> 
            <span>{this.state.count}</span><span id="clients"> New {this.state.month} Clients</span>
        </div>
        )
    }
}

export default NewClients
