import PropTypes from 'prop-types';

const animalShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

export {animalShape};
