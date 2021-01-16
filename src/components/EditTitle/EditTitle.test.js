import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import EditTitle from './EditTitle'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
  <BrowserRouter>
    <EditTitle/>
  </BrowserRouter>, 
  div);

  ReactDOM.unmountComponentAtNode(div);
});