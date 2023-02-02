import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Card from './Card';

class Trunfo extends React.Component {
  render() {
    const { cards } = this.props;
    return (
      <div>
        {
          cards.filter((card) => card.trunfo === true)
            .map((card, index) => (
              <div className="single-card" key={ index }>
                <Card
                  key={ index }
                  cardName={ card.name }
                  cardDescription={ card.description }
                  cardAttr1={ card.attr1 }
                  cardAttr2={ card.attr2 }
                  cardAttr3={ card.attr3 }
                  cardImage={ card.image }
                  cardRare={ card.rare }
                  cardTrunfo={ card.trunfo }
                />
                <Button
                  key={ `${index} ${card.name}` }
                  text="Remover"
                  remove={ () => this.removeButton(index) }
                />
              </div>
            ))
        }
      </div>
    );
  }
}

Trunfo.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      attr1: PropTypes.number,
      attr2: PropTypes.number,
      attr3: PropTypes.number,
      image: PropTypes.string,
      rare: PropTypes.bool,
      trunfo: PropTypes.bool,
    }),
  ),
}.isRequired;
export default Trunfo;
