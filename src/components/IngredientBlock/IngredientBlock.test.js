import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import IngredientBlock from './IngredientBlock'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
  <BrowserRouter>
    <IngredientBlock/>
  </BrowserRouter>, 
  div);

  ReactDOM.unmountComponentAtNode(div);
});