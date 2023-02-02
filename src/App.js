import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Button from './components/Button';
import Trunfo from './components/Trunfo';
import './App.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    cards: [],
    nameFilter: '',
    rareFilter: 'all',
    trunfoFilter: false,
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
      cardTrunfo: false,
      cardRare: 'normal',
      hasTrunfo: this.verifyTrunfo(),
    }));
  };

  removeButton = (index) => {
    const { cards } = this.state;
    cards.splice(index, 1);
    this.setState({ cards, hasTrunfo: this.verifyTrunfo() });
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
      nameFilter,
      rareFilter,
      trunfoFilter,
    } = this.state;
    return (
      <>
        <h1 className="title">Tryunfo</h1>
        <div className="container">
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
          <div className="container-cards">
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
        <h1 className="title-filter">Filtros</h1>
        <div className="container-filters">
          <label className="filter-name" htmlFor="filter-name">
            Filtro de Nome
            <input
              data-testid="name-filter"
              id="filter-name"
              name="nameFilter"
              type="text"
              disabled={ trunfoFilter ? 'disabled' : '' }
              onChange={ (event) => {
                this.handleChange(event);
              } }
            />
          </label>
          <label htmlFor="filter-rare">
            Filtro de Raridade
            <select
              id="filter-rare"
              className="filter-rare"
              data-testid="rare-filter"
              name="rareFilter"
              disabled={ trunfoFilter ? 'disabled' : '' }
              onChange={ (event) => this.handleChange(event) }
            >
              <option value="all">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="filter-trunfo">
            Filtrar Trunfo
            <input
              type="checkbox"
              name="trunfoFilter"
              data-testid="trunfo-filter"
              checked={ trunfoFilter }
              onChange={ (event) => this.handleChange(event) }
            />
          </label>
        </div>
        <div className="render-card">
          {trunfoFilter ? <Trunfo cards={ cards } />
            : cards.filter((card) => card.rare === rareFilter || rareFilter === 'all')
              .filter((card) => card.name.includes(nameFilter))
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
              ))}
        </div>

      </>
    );
  }
}
export default App;
