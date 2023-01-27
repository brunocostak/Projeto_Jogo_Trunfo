import React from 'react';

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
      <>
        <h3 data-testid="name-card">{cardName}</h3>
        <h4 data-testid="description-card">{cardDescription}</h4>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="attr1-card">{cardAttr1}</p>
        <p data-testid="attr2-card">{cardAttr2}</p>
        <p data-testid="attr3-card">{cardAttr3}</p>
        <h2 data-testid="rare-card">{cardRare}</h2>
        {cardTrunfo ? <h2 data-testid="trunfo-card">Super Trunfo!</h2> : <h2> </h2>}

      </>
    );
  }
}
export default Card;
