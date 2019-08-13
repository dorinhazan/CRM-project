import React, { Component } from 'react';
import PopUp from './popUp';

class ClientRow extends Component {
constructor(){
    super()
    this.state= {
        display: false
    }
}

setRow = () => {
    this.setState({
        display: !this.state.display
    })

}
PopUp = (event) => {
    this.props.PopUp(event)
}
    render() {
        let m = this.props.m
        return (<div>
            <div onClick={this.setRow} className="data">
                <span>{!m.name ? null : m.name.split(" ")[0]}</span>
                <span>{!m.name ? null : m.name.split(" ")[1]}</span>
                <span>{m.country}</span>
                <span>{!m.firstContact ? null : m.firstContact.slice(0, 10)}</span>
                <span>{!m.emailType ? "." : m.emailType}</span>
                <span>{m.sold === "true" ? <img src="https://png.pngtree.com/svg/20161202/da573c8d9d.svg" width="10"></img> : "X"}</span>
                <span>{!m.owner ? null : m.owner}</span>
            </div>
                {this.state.display ? <PopUp data={m} PopUp={this.PopUp} closePopUp={this.setRow} popUp={this.props.popUp}/> : null}
                </div>
            )
    }

}

export default ClientRow;
