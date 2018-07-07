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

  formSubmitEvent = (newAnimal) => {
    animalRequest.postRequest(newAnimal)
      .then(() => {
        animalRequest.getRequest()
          .then((animals) => {
            this.setState({ animals });
          });
      })
      .catch((err) => {
        console.error('error with animal post', err);
      });
  };

  componentDidMount() {
    connection();
    animalRequest.getRequest()
      .then((animals) => {
        this.setState({ animals });
      })
      .catch((err) => {
        console.error('error with mashup GET', err);
      });
  };

  render() {
    return (
      <div className="App">
        <div className="col-sm-6">
          <Animals
            animals={this.state.animals} />
        </div>
        <div className="col-sm-6">
          <MashupForm
            onSubmit={this.formSubmitEvent}
          />
        </div>
      </div>
    );
  }
}

export default App;
