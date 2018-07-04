import React from 'react';
import PropTypes from 'prop-types';

import { animalShape } from '../../propz/animalProp';

import './Animals.css';

class Animals extends React.Component {
  static propTypes = {
    animals: PropTypes.arrayOf(animalShape),
  };
  render() {
    const { animals } = this.props;
    const animalsItem = animals.map((animal) => {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3">
              <div className="thumbnail">
                <img className="animal-image" src={animal.imgUrl} alt="animal" />
                <h3>{animal.name}</h3>
                <h4>{animal.description}</h4>
              </div>
            </div>
          </div>
        </div>
        // key={animal.id}>{animal.name}</div>
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
