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
          <label className="name-form" htmlFor="name">
            Nome
            <input
              value={ cardName }
              data-testid="name-input"
              required
              name="cardName"
              id="name"
              className="name"
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
              cols="40"
              rows="3"
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr01">
            Attr01
            <input
              className="attr"
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
              className="attr"
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
              className="attr"
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
              className="img"
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
              className="select"
              onChange={ onInputChange }
              value={ cardRare }
              name="cardRare"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <div className="cb-container">
            <label htmlFor="checkbox">
              {
                !hasTrunfo
                  ? (
                    <div>
                      <input
                        className="checkbox"
                        checked={ cardTrunfo }
                        onChange={ onInputChange }
                        data-testid="trunfo-input"
                        type="checkbox"
                        name="cardTrunfo"
                      />
                      <span>Super Trybe Trunfo</span>
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
          </div>
        </fieldset>
      </form>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
  isSaveButtonDisabled: PropTypes.bool,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
}.isRequired;
export default Form;
