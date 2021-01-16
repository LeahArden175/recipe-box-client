import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import TestRecipeRoute from './TestRecipeRoute'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
  <BrowserRouter>
    <Route path="/:recipe_id" component={TestRecipeRoute}/>
  </BrowserRouter>, 
  div);

  ReactDOM.unmountComponentAtNode(div);
});