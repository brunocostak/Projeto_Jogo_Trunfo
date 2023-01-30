import React from 'react';

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

export default Button;
