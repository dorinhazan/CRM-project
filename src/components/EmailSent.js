import React, { Component } from 'react';

class EmailSent extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    emailSent = () => {
        let count = 0
        this.props.data.map(e => {
            if (e.emailType != null) {
                count += 1
            }
        })
        return count
    }
    render() {
        return (<div>
            <img src="https://i.gyazo.com/66892e40a848c3cdb9a2ac4730c82998.png" width="40"></img> <span>{this.emailSent()}</span> <span> Email Sent</span>  
        </div>
        )
    }
}

export default EmailSent
