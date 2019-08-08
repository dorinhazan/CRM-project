import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import './App.css';
import Clients from './components/Clients';
import Actions from './components/Actions';
import Analytics from './components/Analytics';
import axios from '../node_modules/axios'


class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  async getData() {
    return await axios.get("http://localhost:8089/usersData")
  }

  async componentDidMount() {
    const response = await this.getData()

    this.setState({ data: response.data }, function () {

    })
  }

  addClient = async (event) => {
    await axios.post('http://localhost:8089/userdata', event)
    .then(response => {
      alert('Add new client')
    })
    .catch(err => console.log(err)
    )}


  transferOwner = async (event) => {
    await axios.put('http://localhost:8089/owner', {
      name: event.firstName,
      owner: event.owner
    })
      .then(response => {
        alert('change owner')
      })
      .catch(err => console.log(err)
      )
  }

  transferEmail = async (event) => {
    await axios.put('http://localhost:8089/email', {
      name: event.firstName,
      emailType: event.emailType
    })
      .then(response => {
        alert('change Email')
      })
      .catch(err => console.log(err)
      )
  }

  transferSold = async (event) => {
    await axios.put('http://localhost:8089/sold', {
      name: event.firstName,
      sold: event.sold
    })
      .then(response => {
        alert("it's sold")
      })
      .catch(err => console.log(err)
      )
  }

  popUp = async (event) => {
    console.log(event);
    
    await axios.put('http://localhost:8089/popup', event)
      .then(response => {
        console.log(response)
        
      })
      .catch(err => console.log(err)
      )
      console.log(event.firstName + " " + event.surname)

  }
  render() {
    return (
      <Router>
        <div className="App"><div id="home-background"></div><div id="main-links">
          <Link className="main-links" to="/clients">clients</Link>
          <Link className="main-links" to="/actions">actions</Link>
          <Link className="main-links" to="/analytics">analytics</Link>
        </div>
          <Route path="/" render={() => (<Redirect to="/clients" />)} />
          <Route path="/clients" exact render={() => <Clients changeData={this.changeData} popUp={this.popUp} data={this.state.data} />} />
          <Route path="/actions" exact render={() => <Actions data={this.state.data} transferSold={this.transferSold} transferEmail={this.transferEmail} transferOwner={this.transferOwner} upsetUser={this.updetUser} addClient={this.addClient} />} />
          <Route path="/analytics" exact render={() => <Analytics data={this.state.data} />} />
        </div>
      </Router>
    )
  }
}

export default App;
