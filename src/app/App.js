import React, { Component } from 'react';

import Animals from '../components/Animals/Animals';


import './App.css';
import MashupForm from '../components/MashupForm/MashupForm';

class App extends Component {
  render() {
    return (
      <div>
        <Animals />
        <MashupForm />
      </div>
    );
  }
}

export default App;
