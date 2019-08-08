import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

class PopUp extends Component {
    constructor() {
        super();
        this.state = {
            visible: true,
            firstName: '',
            surname: '',
            country: ''
        }
    }

    // openModal() {
    //     this.setState({ visible: true })
    //     this.PopUp()
    // }

    closeModal() {
        this.props.closePopUp()
    }
    changeFirstName = (event) => { this.setState({ firstName: event.target.value }) }
    changeSurName = (event) => { this.setState({ surname: event.target.value }) }
    changeCountry = (event) => { this.setState({ country: event.target.value }) }

    PopUp = () => {
        this.props.popUp(this.state)
    }

    render() {
        let m = this.props.data

        return (
            <section >
                {/* <input type="button" value="Open" onClick={() => this.openModal()} /> */}
                <Modal
                    visible={this.state.visible}
                    width="250"
                    height="170"
                    effect="fadeInUp"
                    onClickAway={() => this.props.closePopUp()}>
                    <div>
                        <div>Name: </div><input placeholder={m.name.split(" ")[0]} defaultValue={m.name} onChange={this.changeFirstName}></input><br></br>
                        <div>SurName: </div><input placeholder={m.name.split(" ")[1]} defaultValue={m.name} onChange={this.changeSurName}></input><br></br>
                        <div>Country: </div><input placeholder={m.country} defaultValue={m.country} onChange={this.changeCountry}></input><br></br>
                        <button onClick={this.PopUp}>update</button>
                        <button onClick={() => this.props.closePopUp()}>Close</button>
                    </div>
                </Modal>
            </section>
        )
    }
}

export default PopUp
