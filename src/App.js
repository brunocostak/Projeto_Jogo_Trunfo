import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: '',
    hasTrunfo: false,
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleClick = () => {
    // this.setState({ isSaveButtonDisabled: true });
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
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <div>
          <Form
            onInputChange={ this.handleChange }
            onSaveButtonClick={ this.handleClick }
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
    );
  }
}

export default App;
// a
