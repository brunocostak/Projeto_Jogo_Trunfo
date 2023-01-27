import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <fieldset>
          <label htmlFor="name">
            Nome
            <input
              data-testid="name-input"
              required
              name="name"
              id="name"
              type="text"
              maxLength="40"
            />
          </label>
          Descrição
          <label htmlFor="description">
            <textarea
              data-testid="description-input"
              name="description"
              id="description"
              cols="30"
              rows="10"
            />
          </label>
          <label htmlFor="attr01">
            Attr01
            <input data-testid="attr1-input" type="number" id="attr01" />
          </label>
          <label htmlFor="attr02">
            Attr02
            <input data-testid="attr2-input" type="number" id="attr02" />
          </label>
          <label htmlFor="attr03">
            Attr03
            <input data-testid="attr3-input" type="number" id="attr03" />
          </label>
          <label htmlFor="img">
            Imagem
            <input data-testid="image-input" id="img" type="text" />
          </label>
          Raridade
          <label htmlFor="select">
            <select data-testid="rare-input" name="" id="select">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="checkbox">
            Super Trybe Trunfo
            <input data-testid="trunfo-input" type="checkbox" />
          </label>
          <button data-testid="save-button" type="submit">Salvar</button>
        </fieldset>
      </form>
    );
  }
}
export default Form;
