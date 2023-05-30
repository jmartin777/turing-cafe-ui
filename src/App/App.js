import React, { Component } from 'react';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations:[]
    }
  }

  componentDidMount() {
  }

  addRes = (newRes) => {
 this.setState({ reservations: [...this.state.reservations,newRes]})
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <Form addRes={this.addRes} />
        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
