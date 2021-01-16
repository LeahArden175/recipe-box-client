import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import InstructionEditBlock from './InstructionEditBlock'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
  <BrowserRouter>
    <InstructionEditBlock/>
  </BrowserRouter>, 
  div);

  ReactDOM.unmountComponentAtNode(div);
});