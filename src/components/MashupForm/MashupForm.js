import React from 'react';

import './MashupForm.css';

class MashupForm extends React.Component {
  state = {
    newAnimal: {
      Name: '',
      ImageUrl: '',
      description: '',
    },
  }
  formFieldStringState = (name, e) => {
    const tempListing = {...this.state.newListing};
    tempListing[name] = e.target.value;
    this.setState({newAnimal: tempListing});
  }

  nameChange = (e) => {
    this.formFieldStringState('name', e);
  }

  formSubmit = (e) => {
    const {onSubmit} = this.props;
    e.preventDefault();
    onSubmit(this.state.newAnimal)
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
              value={newAnimal.Name}
              onChange={this.nameChange}
            />
          </fieldset>
          <fieldset className="col-sm-3">
            <label htmlFor="Name">Image Url: </label>
            <input className="col-sm-12"
              type="text"
              id="name"
              // value={newAnimal.ImageUrl}
            />
          </fieldset>
          <fieldset className="col-sm-3">
            <label htmlFor="Name">Description: </label>
            <input className="col-sm-12"
              type="text"
              id="name"
            />
          </fieldset>
          <button className="btn btn-primary col-xs-6 col-xs-offset-3">Submit</button>
          </form>
      </div>
    )
  }
}

export default MashupForm;
