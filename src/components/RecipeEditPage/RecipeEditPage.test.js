import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import RecipeEditPage from './RecipeEditPage'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
  <BrowserRouter>
    <Route path="/edit-recipe/:recipe_id" component={RecipeEditPage}/>
  </BrowserRouter>, 
  div);

  ReactDOM.unmountComponentAtNode(div);
});