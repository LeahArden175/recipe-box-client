import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import EditInstruction from './EditInstruction'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
  <BrowserRouter>
    <EditInstruction/>
  </BrowserRouter>, 
  div);

  ReactDOM.unmountComponentAtNode(div);
});