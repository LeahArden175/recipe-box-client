import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import EditIngredient from './EditIngredient'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
  <BrowserRouter>
    <EditIngredient/>
  </BrowserRouter>, 
  div);

  ReactDOM.unmountComponentAtNode(div);
});