import React, { Component } from 'react';
import Form from '../Form/Form';
import './App.css';
import Reservations from '../Reservations/Reservations';


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

  deleteRes = (id) => {
    const filteredRes = this.state.reservations.filter(Res => Res.id != id);
    //delete from API Here
    this.setState({ reservations:filteredRes});
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <Form addRes={this.addRes} />
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations} deleteRes={this.deleteRes} />
        </div>
      </div>
    )
  }
}

export default App;
