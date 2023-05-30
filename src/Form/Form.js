import React, {Component} from "react";
import './Form.css';

class Form extends Component{
constructor(){
    super();
        this.state = {
            name : '',
            date:'',
            time: '',
            numGuests: 0
        }
    }

    handleChange = event =>{
        this.setState({[event.target.name]: event.target.value});
    }

    clearInputs = () => {
        this.setState({ name : '', date:'', time: '', numGuests: 0});
    }

    submitRes = event => {
        event.preventDefault();
        const newRes = {
            id: Date.now(),
            ...this.state
        }
        this.props.addRes(newRes);
        this.clearInputs();
    }

    render() {
        return(
            <form>
                <input
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={event => this.handleChange(event)}
                />

                <input
                type="text"
                name="date"
                placeholder="Date"
                value={this.state.date}
                onChange={event => this.handleChange(event)}
                />

                <input
                type="text"
                name="time"
                placeholder="Time"
                value={this.state.time}
                onChange={event => this.handleChange(event)}
                />

                <input
                type="text"
                name="numGuests"
                placeholder="Number Of Guests"
                value={this.state.numGuests}
                onChange={event => this.handleChange(event)}
                />
            
            </form>
        )
    }
}

export default Form;