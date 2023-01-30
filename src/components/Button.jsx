import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { remove, text } = this.props;
    return (
      <button
        type="button"
        name="btn-remove"
        data-testid="delete-button"
        onClick={ remove }
      >
        {text}

      </button>
    );
  }
}
Button.propTypes = {
  remove: PropTypes.func,
  text: PropTypes.string,
}.isRequired;
export default Button;
