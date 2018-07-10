import React from 'react';
import PropTypes from 'prop-types';

import './MashupForm.css';

const defaultAnimal = {
  name: '',
  imgUrl: '',
  description: '',
};

class MashupForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  state = {
    newAnimal: defaultAnimal,
  }

  formFieldStringState = (name, e) => {
    const tempAnimal = { ...this.state.newAnimal };
    tempAnimal[name] = e.target.value;
    this.setState({ newAnimal: tempAnimal });
  }

  nameChange = (e) => {
    this.formFieldStringState('name', e);
  }

  imageChange = (e) => {
    this.formFieldStringState('imgUrl', e);
  }

  descriptionChange = (e) => {
    this.formFieldStringState('description', e);
  }

  formSubmit = (e) => {
    const { onSubmit } = this.props;
    const { newAnimal } = this.state;
    e.preventDefault();
    if (
      newAnimal.name &&
      newAnimal.imgUrl &&
      newAnimal.description
    ) {
      onSubmit(this.state.newAnimal)
      this.setState({ newAnimal: defaultAnimal });
    } else {
      alert('Please fill in all the form');
    }
  }

  render() {
    const {newAnimal} = this.state;
    return (
      <div className="MashupForm">
        <h2> Mashup Form</h2>
        <form onSubmit={this.formSubmit}>
          <fieldset className="col-sm-3">
            <label htmlFor="Name">Name:</label>
            <input className="col-sm-12"
              type="text"
              id="name"
              value={newAnimal.name}
              onChange={this.nameChange}
            />
          </fieldset>
          <fieldset className="col-sm-3">
            <label htmlFor="imageUrl">Image Url: </label>
            <input className="col-sm-12"
              type="text"
              id="imgAnimal"
              value={newAnimal.imgUrl}
              onChange={this.imageChange}
            />
          </fieldset>
          <fieldset className="col-sm-3">
            <label htmlFor="description">Description: </label>
            <input className="col-sm-12"
              type="text"
              id="description"
              value={newAnimal.description}
              onChange={this.descriptionChange}
            />
          </fieldset>
          <button className="btn btn-primary col-xs-6 col-xs-offset-3">Submit</button>
        </form>
      </div>
    )
  }
}

export default MashupForm;
