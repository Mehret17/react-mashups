import React from 'react';

import './Animals.css';

class Animals extends React.Component {
  render() {
    const {animals} = this.props
    const animalsItem = animals.map((animal) => {
      return (
        <div key={animal.id}>{animal.name}</div>
      );
    });
    return (
      <div className="Animals">
        <h2>Animals</h2>
        <div>
          {animalsItem}
        </div>
      </div>
    );
  }
}

export default Animals;
