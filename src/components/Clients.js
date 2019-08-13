import React, { Component } from 'react';
import ClientRow from './ClientRow';

class Clients extends Component {
    constructor() {
        super()
        this.state = {
            input: " ",
            option: "name",

        }
    }

    changeInput = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({input: value})
    }

    changeOption = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({ option: value })
    }

    PopUp = (event) => {
        this.props.PopUp(event)
    }

    render() {
        let option = this.state.option
        let data = this.props.data.filter(item => {
            if (typeof item[option] !== "undefined") {
                if(option !== 'sold'){
                    return item[option].includes(this.state.input)
                }
                else{
                    if (typeof item[option] !== "undefined") {
                        if( item[option]==="true"){
                            return item.name.includes(this.state.input)
                        }
                    }
                }
            }
        })


        return (
            <div className="allData">
                <div id='inputs'>
                    <input placeholder="Search" value={this.state.input} onChange={this.changeInput} className="inp" ></input>
                    <select onChange={this.changeOption} className="inp">
                        <option value="name">Name</option>
                        <option value="email">Email</option>
                        <option value="sold">Sold</option>
                        <option value="owner">Owner</option>
                        <option value="country">Country</option>
                    </select></div>
                <div id="header"><span>name</span><span>surnName</span><span>Country</span><span>First Contact</span> <span>Email</span> <span>Sold</span><span> Owner</span></div>
                <div id="all">
                    {data.map(m =>
                        <ClientRow  PopUp={this.PopUp} m={m} />
                    )}
                </div>
            </div>
        )
    }
}

export default Clients;
