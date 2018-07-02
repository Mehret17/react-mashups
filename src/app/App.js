import React, { Component } from 'react';

import connection from '../firebaseRequests/connection';
import animalRequest from '../firebaseRequests/animals';
import Animals from '../components/Animals/Animals';



import './App.css';
import MashupForm from '../components/MashupForm/MashupForm';

class App extends Component {
  state = {
    animals: [],
  }
  componentDidMount () {
    connection();
    animalRequest.getRequest()
    .then((animals) => {
      this.setState ({ animals });
    })
    .catch((err) => {
      console.error('error with mashup GET', err);
    });
  };

  render() {
    return (
      <div>
        <Animals 
         animals={this.state.animals}/>
        <MashupForm />
      </div>
    );
  }
}

export default App;
