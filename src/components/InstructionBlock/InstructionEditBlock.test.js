import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import InstructionBlock from './InstructionBlock'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
  <BrowserRouter>
    <InstructionBlock/>
  </BrowserRouter>, 
  div);

  ReactDOM.unmountComponentAtNode(div);
});