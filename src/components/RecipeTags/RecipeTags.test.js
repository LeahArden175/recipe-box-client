import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import RecipeTags from './RecipeTags'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
  <BrowserRouter>
    <RecipeTags />
  </BrowserRouter>, 
  div);

  ReactDOM.unmountComponentAtNode(div);
});