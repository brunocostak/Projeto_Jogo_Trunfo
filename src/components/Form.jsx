import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <form>
        <fieldset>
          <label htmlFor="name">
            Nome
            <input
              value={ cardName }
              data-testid="name-input"
              required
              name="cardName"
              id="name"
              type="text"
              maxLength="40"
              onChange={ onInputChange }
            />
          </label>
          Descrição
          <label htmlFor="description">
            <textarea
              name="cardDescription"
              value={ cardDescription }
              data-testid="description-input"
              id="description"
              cols="30"
              rows="10"
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr01">
            Attr01
            <input
              name="cardAttr1"
              data-testid="attr1-input"
              type="number"
              id="attr01"
              onChange={ onInputChange }
              value={ cardAttr1 }
            />
          </label>
          <label htmlFor="attr02">
            Attr02
            <input
              name="cardAttr2"
              data-testid="attr2-input"
              type="number"
              id="attr02"
              onChange={ onInputChange }
              value={ cardAttr2 }
            />
          </label>
          <label htmlFor="attr03">
            Attr03
            <input
              name="cardAttr3"
              data-testid="attr3-input"
              type="number"
              id="attr03"
              onChange={ onInputChange }
              value={ cardAttr3 }
            />
          </label>
          <label htmlFor="img">
            Imagem
            <input
              data-testid="image-input"
              id="img"
              type="text"
              name="cardImage"
              onChange={ onInputChange }
              value={ cardImage }
            />
          </label>
          Raridade
          <label htmlFor="select">
            <select
              data-testid="rare-input"
              id="select"
              onChange={ onInputChange }
              value={ cardRare }
              name="cardRare"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="checkbox">
            {
              !hasTrunfo
                ? (
                  <div>
                    <span>Super Trybe Trunfo</span>
                    <input
                      checked={ cardTrunfo }
                      onChange={ onInputChange }
                      data-testid="trunfo-input"
                      type="checkbox"
                      name="cardTrunfo"
                    />
                  </div>)
                : <p>Você já tem um Super Trunfo em seu baralho</p>
            }
          </label>
          <button
            disabled={ isSaveButtonDisabled }
            data-testid="save-button"
            type="submit"
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </fieldset>
      </form>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
export default Form;
