import React, { Component } from 'react';

class Actions extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            surname: '',
            country: '',
            owner: '',
            emailType: '',
            sold: true
        }
    }


    changeFirstNAme = (event) => { this.setState({ firstName: event.target.value }) }
    changeSurName = (event) => { this.setState({ surname: event.target.value }) }
    changeCountry = (event) => { this.setState({ country: event.target.value }) }
    changeOwner = (event) => { this.setState({ owner: event.target.value }) }
    changeEmail = (event) => { this.setState({ emailType: event.target.value }) }




    addClient = async () => {
        await this.props.addClient(this.state)
    }
    upsetUser = async () => {
        await this.props.upsetUser(this.state)
    }

    transferOwner = async () => {
        await this.props.transferOwner(this.state)
    }

    transferEmail = async () => {
        await this.props.transferEmail(this.state)
    }

    transferSold = async () => {
        await this.props.transferSold(this.state)
    }

    render() {
        let data = this.props.data

        return (
            <div>
                <div>
                    <h4>Update User</h4>
                    <input className="inpAction" list="clients" placeholder="Client" value={data.name} onChange={this.changeFirstNAme}></input><br></br>
                    <datalist id="clients">
                        {data.map(m => <option value={m.name}></option>)}
                    </datalist>

                    <input className="inpAction" list="ownership" placeholder="Transfet Ownership To" value={data.owner} onChange={this.changeOwner}></input>
                    <datalist id="ownership">
                        {data.map(m => <option value={m.owner}></option>)}

                    </datalist>
                    <button className="button" onClick={this.transferOwner}> transfer </button><br></br>
                    <input className="inpAction" list="emailType" placeholder="Send Email" value={data.country} onChange={this.changeEmail}></input>
                    <datalist id="emailType">
                        <option value="A"></option>
                        <option value="B"></option>
                        <option value="C"></option>
                        <option value="D"></option>
                    </datalist>

                    <button className="button" onClick={this.transferEmail}> send </button><br></br>
                    <span>Declare Sale!</span>
                    <button className="button" onClick={this.transferSold}> Declare </button>
                </div>
                <hr />
                <div>
                    <h4>Add Client</h4>
                    <input className="inpAction" placeholder="firstNAme" value={data.name} onChange={this.changeFirstNAme}></input><br></br>
                    <input className="inpAction" placeholder="surname" value={data.name} onChange={this.changeSurName}></input><br></br>
                    <input className="inpAction" placeholder="country" value={data.country} onChange={this.changeCountry}></input><br></br>
                    <input className="inpAction" placeholder="owner" value={data.owner} onChange={this.changeOwner}></input><br></br>
                    <button className="button" onClick={this.addClient}> Add new client</button>
                </div>
            </div>
        )
    }

}

export default Actions;
