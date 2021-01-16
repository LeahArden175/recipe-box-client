import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import IngredientEditBlock from './IngredientEditBlock'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
  <BrowserRouter>
    <IngredientEditBlock/>
  </BrowserRouter>, 
  div);

  ReactDOM.unmountComponentAtNode(div);
});