import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div className="card">
        <h2 data-testid="name-card">{cardName}</h2>
        <h3 data-testid="description-card">{cardDescription}</h3>
        <img
          data-testid="image-card"
          width="250px"
          heigth="250px"
          src={ cardImage }
          alt={ cardName }
        />
        <div className="attr1">
          <p data-testid="attr1-card">
            {`Attr1:
          ............................................ ${cardAttr1}`}

          </p>
        </div>
        <div className="attr2">
          <p data-testid="attr2-card">
            {`Attr1:
          ............................................ ${cardAttr2}`}

          </p>
        </div>
        <div className="attr3">
          <p data-testid="attr3-card">
            {`Attr1:
          ............................................ ${cardAttr3}`}

          </p>
        </div>
        <h2 data-testid="rare-card">{cardRare}</h2>
        {cardTrunfo ? <h2 data-testid="trunfo-card">Super Trunfo!</h2> : <h2> </h2>}
      </div>
    );
  }
}
Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
