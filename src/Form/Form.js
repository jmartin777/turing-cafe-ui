import React, {Component} from "react";
import './Form.css';

class Form extends Component{
constructor(){
    super();
        this.state = {
            name : '',
            date:'',
            time: '',
            noGuests: 0
        }
    }

    handleChange = event =>{
        this.setState({[event.target.name]: event.target.value});
    }
}

