import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import RecipePage from './RecipePage'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
  <BrowserRouter>
    <Route path="/:recipe_Id" component={RecipePage}/>
  </BrowserRouter>, 
  div);

  ReactDOM.unmountComponentAtNode(div);
});