import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    cards: [],
  };

  handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value });
  };

  saveButton = () => {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo, cards } = this.state;
    cards.push({
      name: cardName,
      description: cardDescription,
      attr1: cardAttr1,
      attr2: cardAttr2,
      attr3: cardAttr3,
      image: cardImage,
      rare: cardRare,
      trunfo: cardTrunfo,
    });
    this.setState(() => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      hasTrunfo: this.verifyTrunfo(),
    }));
  };

  verifyStates = () => {
    const { cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;

    const maxNumber = 91;
    const soma = 210;
    const validacaoString = cardName.length > 0
    && cardDescription.length > 0
    && cardImage.length > 0;
    const validacaoAttr1 = (cardAttr1 >= 0 && cardAttr1 < maxNumber);
    const validacaoAttr2 = (cardAttr2 >= 0 && cardAttr2 < maxNumber);
    const validacaoAttr3 = (cardAttr3 >= 0 && cardAttr3 < maxNumber);
    const validacaoSoma = (Number(cardAttr1)
    + Number(cardAttr2) + Number(cardAttr3)) <= soma;
    const validacao = validacaoAttr1
    && validacaoAttr2
    && validacaoAttr3
    && validacaoSoma
    && validacaoString;
    return validacao;
  };

  verifyTrunfo = () => {
    const { cards } = this.state;
    return cards.some((card) => card.trunfo === true);
  };

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
      hasTrunfo,
      cards,
    } = this.state;
    return (
      <>
        <div>
          <h1>Tryunfo</h1>
          <div>
            <Form
              onInputChange={ this.handleChange }
              onSaveButtonClick={ this.saveButton }
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ !this.verifyStates() }
            />
          </div>
          <div>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </div>
        <div>
          {
            cards.map((card) => (
              <Card
                key={ card.name }
                cardName={ card.name }
                cardDescription={ card.description }
                cardAttr1={ card.attr1 }
                cardAttr2={ card.attr2 }
                cardAttr3={ card.attr3 }
                cardImage={ card.image }
                cardRare={ card.rare }
                cardTrunfo={ card.trunfo }
              />
            ))
          }
        </div>
      </>
    );
  }
}

export default App;
// a
