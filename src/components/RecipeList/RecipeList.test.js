import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import RecipeList from './RecipeList'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
  <BrowserRouter>
    <RecipeList />
  </BrowserRouter>, 
  div);

  ReactDOM.unmountComponentAtNode(div);
});