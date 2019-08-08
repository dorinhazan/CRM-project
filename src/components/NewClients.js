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
        let data = await axios.get("http://localhost:8089/monthclients")
        return data
    }
    componentDidMount = async () => {
        const response = await this.getClients()
        console.log(response)
        this.setState({ count: response.data.length })

    }


    componentDidMount = async () => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var date = new Date();

      let cuurentMonth= months[date.getMonth()]
    this.setState({
        month: cuurentMonth
    })
    }

    render() {

        return (<div>
            <img src="https://i.gyazo.com/c730ba62a90e0e3ca56c175f373cf960.png" width="40"></img> <span>{this.state.count}</span><span> New {this.state.month} Clients</span>
        </div>
        )
    }
}

export default NewClients
